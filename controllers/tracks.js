const { tracksModel } = require('../models');
const { matchedData } = require('express-validator');
const handleError = require('../utils/handleError');

/**
 * Obtener lista de la base de datoss
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async (req, res) => {

    try{
        const data = await tracksModel.find({})
        res.send({data});
    }catch(e){
        handleError(res, 'Error, al obtener tracks');
    }
};

/**
 * Obtener detalle
 * @param {*} req 
 * @param {*} res 
 */
const getItem = async (req, res) => {
    try{
        req = matchedData(req);
        console.log(req);
        const {id} = req;
        const data = await tracksModel.findById(id);
        res.send({data});
    }catch(e){
        handleError(res, 'Error, al obtener un track');
    }
};

/**
 * Insertar un registro
 * @param {*} req 
 * @param {*} res 
 */
const createItem = async (req, res) => {
    try{
        const body = matchedData(req);
        const data = await tracksModel.create(body)
        res.send({data});
    }catch(e){
        handleError(res, 'Error, al crear track');
    }
};

/**
 * Actualizar un registro
 * @param {*} req 
 * @param {*} res 
 */
const updateItem = async (req, res) => {
    try{
        const {id, ...body } = matchedData(req);
        const data = await tracksModel.findOneAndUpdate(
            id, body
        )
        res.send({data});
    }catch(e){
        handleError(res, 'Error, al editar track');
    }
};

/**
 * Eliminar un registro
 * @param {*} req 
 * @param {*} res 
 */
const deleteItem = async (req, res) => {
    try{
        try{
            req = matchedData(req);
            const {id} = req;
            const data = await tracksModel.delete({_id:id});
            res.send({data});
        }catch(e){
            handleError(res, 'Error, al eliminar un track');
        }
    }catch(e){
        handleError(res, 'Error, al eliminar track');
    }
};

module.exports = {getItem, getItems, createItem, updateItem, deleteItem};
