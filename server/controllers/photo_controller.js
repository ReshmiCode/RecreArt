const Photo = require('../models/photo_model');
const axios = require("axios").default;

exports.getPhotos = async (req, res, next) => {    
    try {
        const photos = await Photo.find();

        return res.status(200).json({
            success: true,
            count: photos.length,
            data: photos
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}

exports.addPhoto = async (req, res, next) => {    
    try {
        const photo = await Photo.create(req.body);

        try {
            const user = await axios.get(
              `https://hack-the-ne.appspot.com/api/v1/users/${photo.userID}`
            );
            const newPhotos = user.data.data[0].photos;
            newPhotos.push(photo._id.toString());
            await axios.patch(
              `https://hack-the-ne.appspot.com/api/v1/users/${photo.userID}`,
              {
                photos: newPhotos,
              }
            );
        } catch (err) {
            console.log(err);
        }

        return res.status(201).json({
            success: true,
            data: photo
        });
    } catch (error) {
        if(error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(val => val.message);
        
            return res.status(400).json({
                success: false,
                error: messages
            });

        } 
        
        else {
            return res.status(500).json({
                success: false,
                error: 'Server Error'
            });
        }
    }
}

exports.getPhoto = async (req, res, next) => {    
    try {
        const photo = await Photo.findById(req.params.id);

        if(!photo){
            return res.status(404).json({
                success: false,
                error: 'No photo found'
            });
        }

        return res.status(200).json({
            success: true,
            data: photo
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}

exports.deletePhoto = async (req, res, next) => {    
    try {
        const photo = await Photo.findById(req.params.id);

        if(!photo){
            return res.status(404).json({
                success: false,
                error: 'No photo found'
            });
        }

        const photoToDelete = photo._id;

        await photo.remove();

        try {
            const user = await axios.get(
              `https://hack-the-ne.appspot.com/api/v1/users/${photo.userID}`
            );
            const newPhotos = user.data.data[0].photos;
            var index = newPhotos.indexOf(photoToDelete.toString());
            if (index !== -1) newPhotos.splice(index, 1);
            await axios.patch(
              `https://hack-the-ne.appspot.com/api/v1/users/${photo.userID}`,
              {
                photos: newPhotos,
              }
            );
        } catch (err) {
            console.log(err);
        }

        return res.status(200).json({
            success: true,
            data: photo
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}

exports.getUserPhoto = async (req, res, next) => {    
    try {
        const photos = await Photo.find({}).where({ "userID": req.params.id});

        if(!photos){
            return res.status(404).json({
                success: false,
                error: 'No photos found'
            });
        }

        return res.status(200).json({
            success: true,
            count: photos.length,
            data: photos
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}

exports.updatePhoto = async (req, res, next) => {
    try {

        const photo = await Photo.findById(req.params.id);

        if(!photo){
            return res.status(404).json({
                success: false,
                error: 'No photo found'
            });
        }

        if(req.body.userPhoto != null) {
            await Photo.findById(req.params.id).replaceOne({}, { 
                $set: { 
                    userPhoto: req.body.userPhoto
                } 
            });
        }

        if(req.body.originalArt != null) {
            await Photo.findById(req.params.id).replaceOne({}, { 
                $set: { 
                    originalArt: req.body.originalArt
                } 
            });
        }

        if(req.body.accuracy != null) {
            await Photo.findById(req.params.id).replaceOne({}, { 
                $set: { 
                    accuracy: req.body.accuracy
                } 
            });
        }

        if(req.body.mode != null) {
            await Photo.findById(req.params.id).replaceOne({}, { 
                $set: { 
                    mode: req.body.mode
                } 
            });
        }

        if(req.body.votes != null) {
            await Photo.findById(req.params.id).replaceOne({}, { 
                $set: { 
                    votes: req.body.votes
                } 
            });
        }

        return res.status(200).json({
            success: true,
            data: photo
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}