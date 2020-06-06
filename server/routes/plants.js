const express = require('express');
const router = express.Router();
const { getPhotos, addPhoto, deletePhoto, getPhoto, getUserPhoto} = require('../controllers/photo_controller');

router
    .route('/')
    .get(getPhotos)
    .post(addPhoto);

router
    .route('/:id')
    .get(getPhoto)
    .delete(deletePhoto);

router
    .route('/user/:id')
    .get(getUserPhoto)

module.exports = router;