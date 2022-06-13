
module.exports = (admin) => {
  return (req, res, next) => {
    const token = req.headers["authorization"];
    console.log("token"+token)
    if (!token) {
      return res.status(401).send("401 : Unauthorized");
    } else {
      admin
        .auth()
        .verifyIdToken(token)
        .then(() => {
          next();
        })
        .catch((err) => {
            console.log(err)
          res.status(401).send("401 : Unauthorized");
        });
    }
  };
};
