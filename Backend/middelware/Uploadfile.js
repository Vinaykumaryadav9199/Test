// multerConfig.js
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Ensure the uploads directory exists
const uploadDir = 'C:\\Test\\Backend\\public\\temp\\';
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

// Set up storage
const storage = multer.diskStorage({
    destination: function (_, _, cb) {
        cb(null, uploadDir); // Specify the directory where uploaded files should be stored
    },
    filename: function (_, _, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname)); // Generate a unique filename
    }
});

// Initialize multer
const upload = multer({ storage: storage });

// Export the upload middleware
module.exports = upload;
