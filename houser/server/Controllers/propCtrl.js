module.exports={

    // inventory:(req,res,next)=>{
    //     const dbInstance = req.app.get('db');

    //     dbInstance.inventory([req.session.user.user_id])
    //     console.log("test",req)
    //     .then(properties=>res.status(200).send(properties))
    //     .catch(err=>{
    //         res.status(500).send({errorMessage: "Error"})
    //         console.log(err)
    //     })
    // },

    add: (req,res,next)=>{
        const dbInstance = req.app.get('db');
        const {propertyName,propertyDescription,address,city,stateName,zip,img,loanAmount,mortgage,desiredrent}=req.body;

        dbInstance.add([req.session.user.user_id,propertyName,propertyDescription,address,city,stateName,zip,img,loanAmount,mortgage,desiredrent])
        // session is found on the back-end so this is where we enter req.session.user.user_id to direct the info to the correct user in the db.
      .then(res.sendStatus(200))
      .catch(err=>{
        res.status(500).send({errorMessage: "Error"})
        console.log(err)
    })
    }
}


    