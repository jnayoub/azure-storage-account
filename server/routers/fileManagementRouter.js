const express = require('express');
const router = express.Router();
//middleware
const checkAuth = require('../middleware/checkAuth');
//endpoints
const uploadFile = require('../endpoints/azureStorageContainer/uploadFile');
const listFiles = require('../endpoints/azureStorageContainer/listFiles');
const downloadFile = require('../endpoints/azureStorageContainer/downloadProtectedFile');
//routes
router.post('/upload', uploadFile);
router.get('/list-files', listFiles);
router.get('/download/:filename', downloadFile);

module.exports = router;
