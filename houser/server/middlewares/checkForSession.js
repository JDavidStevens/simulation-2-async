module.exports=function(req,res,next){
    const {session}=req;
    
    if (session.user){
        res.status(200).send()
    }else{
        res.status(403).send('unauthorized')
    }

    next();
}