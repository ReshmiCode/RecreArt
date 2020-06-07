const express = require('express');
const router = express.Router();
const { getPhotos, addPhoto, deletePhoto, getPhoto, getUserPhoto, updatePhoto, getChallengePhoto} = require('../controllers/photo_controller');

router
    .route('/')
    .get(getPhotos)
    .post(addPhoto);

router
    .route('/:id')
    .get(getPhoto)
    .delete(deletePhoto)
    .patch(updatePhoto);

router
    .route('/user/:id')
    .get(getUserPhoto)

router
    .route('/challenge/:id')
    .get(getChallengePhoto)

module.exports = router;