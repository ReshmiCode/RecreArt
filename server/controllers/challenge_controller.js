const Challenge = require('../models/challenge_model');

exports.getChallenges = async (req, res, next) => {
    try {
        const challenges = await Challenge.find();

        return res.status(200).json({
            success: true,
            count: challenges.length,
            data: challenges
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}

exports.getChallenge = async (req, res, next) => {
    try {
        const challenge = await Challenge.findById(req.params.id);

        return res.status(200).json({
            success: true,
            data: challenge
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}

exports.addChallenge = async (req, res, next) => {
    try {
        const challenge = await Challenge.create(req.body);

        return res.status(201).json({
            success: true,
            data: challenge
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

exports.deleteChallenge = async (req, res, next) => {
    try {
        const challenge = await Challenge.findById(req.params.id);
        if(!challenge){
            return res.status(404).json({
                success: false,
                error: 'No challenge found'
            });
        }

        await challenge.remove();

        return res.status(200).json({
            success: true,
            data: challenge
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}

exports.updateChallenge = async (req, res, next) => {
    try {

        const challenge = await Challenge.findById(req.params.id);

        if(!challenge){
            return res.status(404).json({
                success: false,
                error: 'No challenge found'
            });
        }

        if(req.body.originalArt != null) {
            await Challenge.findById(req.params.id).replaceOne({}, { 
                $set: { 
                    originalArt: req.body.originalArt
                } 
            });
        }

        if(req.body.photos != null) {
            await Challenge.findById(req.params.id).replaceOne({}, { 
                $set: { 
                    photos: req.body.photos
                } 
            });
        }

        return res.status(200).json({
            success: true,
            data: challenge
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}