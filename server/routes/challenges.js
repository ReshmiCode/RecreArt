const express = require('express');
const router = express.Router();
const { getChallenges, addChallenge , getChallenge , deleteChallenge , updateChallenge} = require('../controllers/challenge_controller');

router
    .route('/')
    .get(getChallenges)
    .post(addChallenge);

router
    .route('/:id')
    .get(getChallenge)
    .delete(deleteChallenge)
    .patch(updateChallenge);

module.exports = router;