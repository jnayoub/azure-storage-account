const express = require('express');
const path = require('path');

const checkAuth = require('../middleware/checkAuth');

const router = express.Router();

// Serve the static files in the 'client' directory
const clientFolderPath = path.join(__dirname, '../../client');
router.use(express.static(clientFolderPath));

// Serve specific pages when certain routes are accessed
router.get('/', (req, res) => {
    res.sendFile(path.join(clientFolderPath, 'pages/home.html'));
});

router.get('/admin', (req, res) => {
    res.sendFile(path.join(clientFolderPath, 'pages/admin.html'));
});

router.get('/upload', (req, res) => {
    res.sendFile(path.join(clientFolderPath, 'pages/file-upload.html'));
});

router.get('/download', (req, res) => {
    res.sendFile(path.join(clientFolderPath, 'pages/file-download.html'))
})

router.get('/list', (req, res) => {
    res.sendFile(path.join(clientFolderPath, 'pages/file-list.html'))
})

router.get('/login', (req, res) => {
    res.sendFile(path.join(clientFolderPath, 'pages/login.html'))
})

router.get('/unauthorized', (req, res) => {
    res.sendFile(path.join(clientFolderPath, 'pages/unauthorized.html'))
})
module.exports = router;
