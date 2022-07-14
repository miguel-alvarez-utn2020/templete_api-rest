const { storageModel } = require('../models')
const { matchedData } = require('express-validator');
const handleError = require('../utils/handleError');
const fs = require('fs')
const PUBLIC_URL = process.env.PUBLIC_URL;
const MEDIA_PATH = `${__dirname}/../storage`
/**
 * Obtener lista de la base de datoss
 * @param {*} req 
 * @param {*} res 
 */
const getItems   = async (req, res) => {
    try{
        const data = await storageModel.find({})
        res.send({data});
    }catch(e){
        handleError(res, 'Error, get item storage');
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
        const data = await storageModel.findById(id);
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
    const {file} = req;
    const fileData = {
        filename: file.filename,
        url: `${PUBLIC_URL}/${file.filename}`
    }
    const data = await storageModel.create(fileData)
    res.send({data});
};

/**
 * Actualizar un registro
 * @param {*} req 
 * @param {*} res 
 */
const updateItem = (req, res) => {};

/**
 * Eliminar un registro
 * @param {*} req 
 * @param {*} res 
 */
const deleteItem = async (req, res) => {
    try{
        try{
            req = matchedData(req);
            console.log(req);
            const {id} = req;
            const dataFile = await storageModel.findById(id);
            await storageModel.delete({_id:id});
            console.log('data', dataFile);

            const {filename} = dataFile;
            const filePath = `${MEDIA_PATH}/${filename}`;

            //fs.unlinkSync(filePath);

            const data = {
                filePath,
                deleted: 1
            }
            res.send({data});
        }catch(e){
            handleError(res, 'Error, al eliminar un item storage');
        }
    }catch(e){
        handleError(res, 'Error, al eliminar track');
    }
};

module.exports = {getItem, getItems, createItem, updateItem, deleteItem};
