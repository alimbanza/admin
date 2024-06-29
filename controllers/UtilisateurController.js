require('dotenv').config();
const bodyParser = require('body-parser')
const {sequelize,Op,User} = require('../config/db');
const fs = require('fs/promises')
const utilisateurService = require('../services/utilisateur.service');

module.exports={
    accueil: async (req,res)=>{
       res.render('accueil');
    }
}
