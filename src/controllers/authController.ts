const authService = require('../service/authentication/authService')


interface dataLogin {
    userName: string,
    password: string
}

const loginAuth = async (req: any, res: any) => {
    console.log('data: ', req.body.userName)
    const {userName, password} = req.body
    const dataInput: dataLogin = {userName, password}
    
    try {
        const data = await authService.handleLogin(dataInput)
        //set cookie
        if(data && data.DT && data.DT.access_token) {
            res.cookie("JWT", data.DT.access_token, {httpOnly: true}, {maxAge: 3600})
        }
        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT,
            status: 200
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            EM: "error from server",
            EC: 1,
            DT: '',
            status: 500
        })
    }
}

const registerAuth = (req: any, res: any) => {

}

module.exports = {loginAuth, registerAuth}