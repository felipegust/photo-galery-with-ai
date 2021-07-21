var express = require('express');
var router = express.Router();
var mongoUtil = require('../services/db')
var multer = require('multer')
var upload = multer({ storage: multer.memoryStorage() })

const { photoList } = require('../controller/getController')
const { handleFileUpload } = require('../controller/uploadController')
const { handleQuery } = require('../controller/handleQuery')
mongoUtil.connectToServer(function (err) {
  if (err) console.log(err);

  router.get('/images', photoList);
  router.post('/upload', upload.single('file'), handleFileUpload);
  router.get('/query', handleQuery)
});

module.exports = router;
