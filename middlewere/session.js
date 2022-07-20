const handleError = require('../utils/handleError');

const authMiddlewere = (req, res ,next) => {
    try{
        
    }catch(e){
        handleError(res, "NOT_SESSION", 401);
    }
}

module.exports = { authMiddlewere };