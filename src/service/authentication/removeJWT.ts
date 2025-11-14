
const handleRemoveJWT = async(res: any) => {
    try {
        await res.clearCookie('JWT', {
            httpOnly: true,      
            sameSite: 'Strict',  
            secure: true,     
            path: '/'          
        });
        return {
            EM: "remove jwt successfuly!",
            EC: 0,
            DT: []
         }
    } catch (error: unknown) {
        console.log(error)
        return {
            EM: "Internal server error.",
            EC: -500,
            DT: []
        }; 
    }
}

module.exports = {handleRemoveJWT}