const handleError = require('../utils/handleError');
const { usersModel } = require('../models')
const { matchedData } = require('express-validator');
const {encrypt, comparer} = require('../utils/handlePassword');
const { tokenSign } = require('../utils/handleJwt');

const register = async (req, res) => {
    try{
        req = matchedData(req);
        const passwordHash = await encrypt(req.password);
        const body = {...req, password: passwordHash};
        const dataUser = await usersModel.create(body);
        dataUser.set(("password", undefined, { strict: false }))
        const data = {
            user: dataUser,
            token: await tokenSign(dataUser)
        }

        res.send({data});
    }catch(e){
        handleError(res, 'Error, email existente');
    }
}


const login = async (req, res) => {
    try{
        req = matchedData(req);
        const user = await usersModel.findOne({email:req.email});
        if(!user){
            handleError(res, 'Usuario o contraseña invalida', 401);
            return
        }
        const hashPassword = user.get('password');
        const check = await comparer(req.password, hashPassword);

        if(!check){
            handleError(res, 'Usuario o contraseña invalida', 401);
            return
        }

        const data = {
            user,
            token: await tokenSign(user)
        }
        res.send({data});
    }catch(e){
        console.log(e);
        handleError(res, 'Error, usuario no valido');
    }
} 

module.exports = { register, login }