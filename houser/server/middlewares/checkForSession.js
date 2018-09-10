module.exports=function(req,res,next){
    // const {session}=req;
    
    if (req.session.user){
        res.status(200).send()
    }else{
        console.log('unauthorized')
        res.status(403).send()
    }
}