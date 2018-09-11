module.exports={

    inventory:(req,res,next)=>{
        dbInstance.inventory([req.session.user.user_id])
        .then(properties=>res.status(200).send(properties))
        .catch(err=>{
            res.status(500).send({errorMessage: "Error"})
            console.log(err)
        })
    }
}


    