const Job = require('../models/Job');
const User = require('../models/User');

const createJob = async (req, res) => {
  try {
    const { title, description, location, salary } = req.body;
    const newJob = new Job({ title, description, location, salary, recruiter: req.user.id });
    await newJob.save();
    res.status(201).json(newJob);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

const applyForJob = async (req, res) => {
  try {
    const job = await Job.findById(req.params.jobId);
    if (!job) return res.status(404).json({ message: 'Job not found' });

    if (job.applicants.includes(req.user.id)) {
      return res.status(400).json({ message: 'Already applied' });
    }

    job.applicants.push(req.user.id);
    await job.save();

    res.status(200).json({ message: 'Application successful' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { createJob, applyForJob };
