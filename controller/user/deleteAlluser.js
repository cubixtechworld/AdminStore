const User = require("../../models/User");

async function deleteAllUser(req,res){
    try{
        const result = await User.deleteMany({});

        console.log('Deleted users:', result.deletedCount);

        res.status(200).json({
            message: `Deleted ${result.deletedCount} users successfully`,
            error: false,
            success: true
        });

    }catch(error){
        console.error('Error deleting users:', error);
        res.status(400).json({
            message : error.message || error,
            error : true,
            success : false
        })
    }
}

module.exports=deleteAllUser