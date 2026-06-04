require('dotenv').config();
const mongoose = require('mongoose');
const Project = require('./models/Project');

mongoose.connect(process.env.MONGO_URI).then(async () => {
  await Project.deleteMany();
  await Project.insertMany([
    {
      title: 'Portfolio Website',
      description: 'A full-stack portfolio built with React, Node.js, and MongoDB.',
      techStack: ['React', 'Node.js', 'MongoDB'],
      githubUrl: 'https://github.com/yourusername/portfolio',
      liveUrl: ''
    },
    {
      title: 'Todo App',
      description: 'A simple task management app with CRUD operations.',
      techStack: ['React', 'Express', 'MongoDB'],
      githubUrl: 'https://github.com/yourusername/todo-app',
      liveUrl: ''
    },
    {
      title: 'Weather Dashboard',
      description: 'Displays live weather data using the OpenWeatherMap API.',
      techStack: ['HTML', 'CSS', 'JavaScript'],
      githubUrl: 'https://github.com/yourusername/weather-app',
      liveUrl: ''
    }
  ]);
  console.log('Database seeded!');
  mongoose.disconnect();
});