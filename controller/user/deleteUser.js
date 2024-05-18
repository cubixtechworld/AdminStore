const User = require("../../models/User");

async function deleteUser(req,res){
    try{
        const user = await User.findByIdAndDelete(req.userId);
        
        console.log('delete a user',user)
        if (!user) {
            return res.status(404).json({
                message: "User not found",
                error: true,
                success: false
            });
        }
        res.status(200).json({
            message: "User deleted successfully",
            error: false,
            success: true
        });


    }catch(error){
        res.status(400).json({
            message : error.message || error,
            error : true,
            success : false
        })
    }
}

module.exports=deleteUser