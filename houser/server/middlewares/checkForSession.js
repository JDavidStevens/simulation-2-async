module.exports=function(req,res,next){
    const {session}=req;
    
    if (session.user){
        return res.sendStatus(200)
    }else{
        return res.sendStatus(403)
    }

    next();
}