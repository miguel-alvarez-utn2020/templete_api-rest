const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;
//este recibe el usuario
const tokenSign = async (user) => {
    console.log('okey');
    const sign = await jwt.sign(
        {
            _id: user._id,
            rol: user.rol
        },
        JWT_SECRET,
        {
            expiresIn: '2h'
        }
    )
    return sign
};
//verifica el token
const verifyToken = async (tokenJwt) => {
  try {
    return Jwt.verify(tokenJwt, JWT_SECRET);
  } catch (e) {
    return null;
  }
};

module.exports = { tokenSign, verifyToken };
