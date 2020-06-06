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

//TODO: This
exports.addPhoto = async (req, res, next) => {    
    try {
        const photo = await Photo.create(req.body);

        // try {
        //     const user = await axios.get(
        //       `https://backyardhacks2020.wl.r.appspot.com/api/v1/users/${plant.userID}`
        //     );
        //     const newPlants = user.data.data[0].plants;
        //     newPlants.push(plant._id.toString());
        //     await axios.patch(
        //       `https://backyardhacks2020.wl.r.appspot.com/api/v1/users/${plant.userID}`,
        //       {
        //         plants: newPlants,
        //       }
        //     );
        // } catch (err) {
        //     console.log(err);
        // }

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

//TODO: This
exports.deletePhoto = async (req, res, next) => {    
    try {
        const photo = await Photo.findById(req.params.id);

        const photoToDelete = photo._id;

        if(!photo){
            return res.status(404).json({
                success: false,
                error: 'No photo found'
            });
        }

        await photo.remove();

        // try {
        //     const user = await axios.get(
        //       `https://backyardhacks2020.wl.r.appspot.com/api/v1/users/${plant.userID}`
        //     );
        //     const newPlants = user.data.data[0].plants;
        //     var index = newPlants.indexOf(plantToDelete.toString());
        //     if (index !== -1) newPlants.splice(index, 1);
        //     await axios.patch(
        //       `https://backyardhacks2020.wl.r.appspot.com/api/v1/users/${plant.userID}`,
        //       {
        //         plants: newPlants,
        //       }
        //     );
        // } catch (err) {
        //     console.log(err);
        // }

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