const db = require('../models/index.js')
const security = require('../untils/security')
const JWT = require('../untils/JWT')

interface dataLogin {
    userName: string,
    password: string
}

interface dataPayload {
    userName: string,
    firstName: string,
    lastName: string,
    avatar?: string,
    age?: number 
}

const handleLogin = async (data: dataLogin) => {
    try {
        const user = await db.User.findOne({ where: { userName: data.userName } });
        if (user) {
            const checkPass: boolean = await security.isConvertPassword(data.password, user.password)
            if (checkPass) {

                const payload: dataPayload = {
                    userName: user.userName,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    avatar: user.avatar,
                    age: user.age
                }
                const token = await JWT.createJWT(payload)


                return {
                    EM: "Login user successfuly!",
                    EC: 0,
                    DT: {
                        access_token: token,
                        data: payload
                    }
                } 
            } else {
                return {
                    EM: "Password is incorrect, please try again.",
                    EC: -3,
                    DT: []
                } 
            }
        } else {
            return {
                EM: "Username does not exist, please check again.",
                EC: -1,
                DT: []
             }  
        }
    } catch (error) {
        console.log(error)
        return {
            EM: "Internal server error.",
            EC: -500,
            DT: []
        }; 
    }
}

module.exports = {handleLogin}