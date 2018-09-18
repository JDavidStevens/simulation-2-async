module.exports = {
  inventory: (req, res, next) => {
    const dbInstance = req.app.get("db");
    console.log(req.query.filter)
    if (req.query.filter) {
      dbInstance
        .filter([req.session.user.user_id, req.query.filter])
        .then(properties => res.status(200).send(properties))
        .catch(err => {
          res.status(500).send({ errorMessage: "Error" });
          console.log(err);
        });
    } else {
      dbInstance
        .inventory([req.session.user.user_id])
        .then(properties => res.status(200).send(properties))
        .catch(err => {
          res.status(500).send({ errorMessage: "Error" });
          console.log(err);
        });
    }
  },

  add: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const {
      propertyName,
      propertyDescription,
      address,
      city,
      stateName,
      zip,
      img,
      loanAmount,
      mortgage,
      desiredRent
    } = req.body;

    dbInstance
      .add([
        req.session.user.user_id,
        propertyName,
        propertyDescription,
        address,
        city,
        stateName,
        zip,
        img,
        loanAmount,
        mortgage,
        desiredRent
      ])
      // session is found on the back-end so this is where we enter req.session.user.user_id to direct the info to the correct user in the db.
      .then(res.sendStatus(200))
      .catch(err => {
        res.status(500).send({ errorMessage: "Error" });
        console.log(err);
      });
  },

  filter: (req, res, next) => {
    const dbInstance = req.app.get("db");

    dbInstance
      .filter([req.session.user.user_id, req.body.desiredrent])
      .then(properties => res.status(200).send(properties))
      .catch(err => {
        res.status(500).send({ errorMessage: "Error" });
        console.log(err);
      });
  },

  delete: (req,res,next)=>{
    const dbInstance= req.app.get('db');
    console.log("delete check:", req.params.id)
    dbInstance
    .delete([req.session.user.user_id,req.params.id])
    .then((properties)=>res.status(200).send(properties))
    .catch(err=>{
      res.status(500).send({errorMessage: "Error"})
      console.log(err)
    })
  }
};
