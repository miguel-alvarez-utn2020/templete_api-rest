const handleError = require('../utils/handleError');
const { verifyToken } = require('../utils/handleJwt');
const { usersModel } = require('../models');

const authMiddlewere = async (req, res ,next) => {
    try{
        if(!req.headers.authorization){
            handleError(res, 'NEED_SESSION_TOKEN', 401);
            return
        }
        const token = req.headers.authorization.split(' ').pop();
        const dataToken = await verifyToken(token);
        if(!dataToken._id){
            handleError(res, 'NOT_ID_TOKEN', 401);
            return
        }
        const user = await usersModel.findById(dataToken._id);
        req.user = user;
        next();
    }catch(e){
        console.log(e);
        handleError(res, "NOT_SESSION", 401);
    }
}

module.exports = { authMiddlewere };