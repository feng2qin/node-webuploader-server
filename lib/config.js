var config = {
    uploadDir: '/Users/yangyin/Downloads/test',
    limitExtension: ['.gif', '.jpg', '.png', '.zip', '.pdf'],
    chunkChecked: function (req, res, next) {
        var result = req.webUploader.chunkCheckResult;
        if (req.webUploader.error) {
            return res.status(500).json({isSuc: false, exists: false, message: req.webUploader.error.message})
        }
        result.isSuc = true;
        return res.json(result);

    },
    fileChecked: function (req, res, next) {
        var result = req.webUploader.fileCheckResult;
        if (req.webUploader.error) {
            return res.status(500).json({isSuc: false, exists: false, message: req.webUploader.error.message})
        }
        result.isSuc = true;
        return res.json(result);
    },
    chunksMerged: function (req, res, next) {
        var result = req.webUploader.chunksMergeResult;
        if (req.webUploader.error) {
            return res.status(500).json({isSuc: false, message: req.webUploader.error.message})
        }
        result.isSuc = true;
        return res.json(result);
    },
    uploaded: function (req, res, next) {
        if (req.file.path) {
            return res.json({isSuc: true, path: req.file.path})
        }
        return res.json({isSuc: false})
    }

}

module.exports = config;