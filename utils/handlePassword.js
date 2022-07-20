const bcryptjs = require('bcryptjs');

const encrypt = async (passwordPlain) => {
    const hash = await bcryptjs.hash(passwordPlain, 10);
    return hash;
}


/**
 * pasar contraseña sin encriptar y contraseña encriptada
 * @param {*} passwordPlain 
 * @param {*} hash 
 */
const comparer = async (passwordPlain, hash) => {
    return await bcryptjs.compare(passwordPlain, hash);
}

module.exports = {encrypt, comparer};