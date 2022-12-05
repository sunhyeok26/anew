const express = require("express");
var router = express.Router();
var multer = require("multer");

var storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, 'uploadFiles/');
    },
    filename(req, file, cb) {
        cb(null, `$(Date.now()__${file.originalname}`);
    }
});

var upload = multer({ dest : 'uploadFiles/' })
var uploadWithOriginalFilename = multer({ storage : storage })

router.get('/', function(req, res) {
    res.render('upload');
})

router.post('/uploadFile', upload.single('attachment'), function(req, res){
    res.render('confirmation', { file : req.file, files : null });
})

router.post('/uploadFileWithOriginalFilename', uploadWithOriginalFilename.single('attachment'), function(req, res){
    res.render('confirmation', { file : req.file, files : null });
})

router.post('/uploadFile', upload.single('attachment'), function(req, res){
    res.render('confirmation', { file : null, files : req.file });
})

router.post('/uploadFileWithOriginalFilename', uploadWithOriginalFilename.single('attachment'), function(req, res){
    res.render('confirmation', { file : null, files : req.file });
})

module.exports = router;