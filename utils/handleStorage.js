const multer = require('multer');
const storage = multer.diskStorage({
    destination: function(req, file, cd){
        const pathStorage = `${__dirname}/../storage`;
        cd(null, pathStorage);
    },
    filename: function(req, file, cd){
        const extension = file.originalname.split('.').pop();
        const  filename = `file-${Date.now()}.${extension}`;
        cd(null, filename);
    }
})

const uploadMiddlewere = multer({storage});


module.exports = uploadMiddlewere;