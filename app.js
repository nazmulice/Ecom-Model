const express = require('express');
const app = express();
const router = require('./routes/api');
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");

// Middleware
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rate limiting
app.use(
  "/api/v1",
  rateLimit({
    windowMs: 15 * 60 * 1000,
  })
);


// routing setup
app.use("/api/v1", router);

// 404 handler
app.get('*', (req, res) => { 
    res.send('404! not found');
});


exports.module = app;