const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title:       { type: String, required: true },
  description: { type: String, required: true },
  techStack:   [String],
  githubUrl:   String,
  liveUrl:     String
});

module.exports = mongoose.model('Project', ProjectSchema);