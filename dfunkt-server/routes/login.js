const express = require('express');
const models = require('../models');
const router = express.Router();
const https = require('https');

router.get('/dauth/:token', function(req, res) {
  if (!req.params.token) {
    res.status(400);
    res.send("No token");
    return; //Nothing left to do here.
  }
  //Verify the token
  const verifyurl = "https://login2.datasektionen.se/verify/" + req.params.token + ".json?api_key=" + process.env.LOGIN2_KEY;
  const plsurl = "https://pls.datasektionen.se/api/user/";
  https.get(verifyurl, (login2res) => {
    login2res.on('data', (login2data) => {
      //we have verified the token.
      //parse out all the data
      let login2json;
      try {
        login2json = JSON.parse(login2data)
      } catch(e) {
        res.json({
          isloggedin: false,
          user: null,
          permissions: []
        });
        return; //Nothing left to do.
      }
      const {first_name, last_name, emails, user, ugkthid} = login2json;
      //now lets ask pls for permissions
      //these can become outdated, but will be verified again on important api calls.
      https.get(plsurl + user + "/dfunkt", (plsres) => {
        plsres.on('data', (plsdata) => {
          let permissons = [];
          try {
            permissions = JSON.parse(plsdata); //can be a list of permissions or [].
          } catch(e) { /* ignore json parse errors */ }
          //Now lets send data back.
          res.json({
            isloggedin: true,
            user: user,
            permissions: permissions,
          });
        }); //pls data
      }).on('error', (e) => {
        console.error(e);
      }); //pls request
    }); //login2 data
  }).on('error', (e) => {
    console.error(e);
  }); //login2 request
});

module.exports = router;
