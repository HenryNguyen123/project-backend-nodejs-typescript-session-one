var jwt = require('jsonwebtoken');

const createJWT = (payload: any) => {
    let key: any = process.env.JWT_SECRET
    let token: any | null = null
    try {
        token = jwt.sign(payload, key, { expiresIn: '1h' });
    } catch (error: unknown) {
        console.log(error)
    }
    return token
}

const verifyToken = (token: any) => {
    let key: any =  process.env.JWT_SECRET
    let decoded: any | null = null;
    try {
        decoded  = jwt.verify(token, key);
    } catch (error: unknown) {
        console.log(error)
    }
   return decoded
}


module.exports = {createJWT, verifyToken}