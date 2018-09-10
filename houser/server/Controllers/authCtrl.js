module.exports={
    login:(req,res,next)=>{
        const dbInstance=req.app.get('db');
        // const {session}=req;
        // const {username, password}=req.body;
        dbInstance.login([req.body.username,req.body.password])
        .then( user=> 
            {req.session.user=user[0];
                res.status(200).send()
            })
        .catch(err=>{
            res.status(500).send({errorMessage:"Alert"})
            console.log(err)
        })      
    },

    register: (req,res)=>{
        const dbInstance=req.app.get('db');
        const {session} = req;
        const {username,password}=req.body;
        dbInstance.register([username,password])
        .then(user=> 
            {session.user=user[0];
            res.status(200).send(user)})
        .catch(err=>{
            res.status(500).send({errorMessage:"Alert"})
            console.log(err)
        })
    },

    logout: (req,res)=>{
        const {session} = req;
        session.destroy();
        res.status(200).send();
        },

    getUser: (req,res)=>{
        const {session}=req;
        res.status(200).send(session.user)
    }
}