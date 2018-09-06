module.exports=function(req,res,next){
    const {session}=req;

    if (!session.user){
        session.user={username:'', user_id:''}
    }

    next();
}