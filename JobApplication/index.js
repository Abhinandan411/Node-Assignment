const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Temporary in-memory storage for jobs
let jobs = [];
let jobId = 1;

// Create a Job
app.post('/jobs', (req, res) => {
   const job = { id: jobId++, ...req.body };
   jobs.push(job);
   res.status(201).send(job);
});

// Get all Jobs
app.get('/jobs', (req, res) => {
   res.status(200).send(jobs);
});

// Update a Job
app.put('/jobs/:id', (req, res) => {
    const jobId = req.params.id;  // Use string comparison
    const index = jobs.findIndex(job => job.id === jobId); // Compare string to string

    if (index !== -1) {
        jobs[index] = { ...jobs[index], ...req.body };
        res.status(200).send(jobs[index]);
    } else {
        res.status(404).send({ message: "Job not found" });
    }
});

app.delete('/jobs/:id', (req, res) => {
    const jobId = req.params.id;  // Use string comparison
    const index = jobs.findIndex(job => job.id === jobId); // Compare string to string

    if (index !== -1) {
        jobs = jobs.filter(job => job.id !== jobId);
        res.status(200).send({ message: "Job deleted" });
    } else {
        res.status(404).send({ message: "Job not found" });
    }
});


// Start the server
const PORT = process.env.PORT || 8989;
app.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}`);
});
