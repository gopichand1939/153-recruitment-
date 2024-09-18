const express = require('express');
const { createJob, applyForJob } = require('../controllers/jobController');
const router = express.Router();

router.post('/create', createJob);
router.post('/apply/:jobId', applyForJob);

module.exports = router;
