const User = require("../../models/User");

async function updateUser(req,res){
    try{
        const sessionUser = req.userId

        const { userId , email, name, role,phone,address} = req.body

        const payload = {
            ...( email && { email : email}),
            ...( name && { name : name}),
            ...( role && { role : role}),
            ...( phone && { phone : phone}),
            ...( address && { address : address}),
        }

        const user = await User.findById(sessionUser)

        console.log("user.role",user.role)



        const updateUser = await User.findByIdAndUpdate(userId,payload)

        
        res.json({
            data : updateUser,
            message : "User Updated",
            success : true,
            error : false
        })
    }catch(err){
        res.status(400).json({
            message : err.message || err,
            error : true,
            success : false
        })
    }
}


module.exports = updateUser