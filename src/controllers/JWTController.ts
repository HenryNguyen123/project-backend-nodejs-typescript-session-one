const removeJWT =  require('../service/authentication/removeJWT')

const destroy = async (req: any, res: any) => {
    try {
        const data = await removeJWT.handleRemoveJWT(res)
        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT,
            status: 200
        })
    } catch (error: unknown) {
        console.log(error)
        return res.status(500).json({
            EM: "error from server",
            EC: 1,
            DT: '',
            status: 500
        })
    }
}

module.exports = {destroy}