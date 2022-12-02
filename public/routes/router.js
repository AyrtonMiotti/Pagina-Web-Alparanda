const express = require("express");
const router = express.Router();

const partController = require("../controllers/Controllers");
const Chatcontroller = require("../controllers/chatController")

// RUTAS
router.get('/', (req, res) => {
    return res.render('login');
})

router.get('/home', (req, res)=>{
    return res.render('home');
})

router.get('/next_home', (req, res)=>{
    return res.render('next_home');
})

router.get('/shop', (req, res)=>{
    return res.render('characters');
})

router.get('/player', (req, res)=>{
    return res.render('musicPlayer');
})


// Functions
router.post("/logIn", partController.login)

// Select Characters
router.get('/characters-Shark', partController.selectCharacter1);
router.get('/characters-Otter', partController.selectCharacter2);
router.get('/characters-Octopus', partController.selectCharacter3);
router.get('/characters-Seal', partController.selectCharacter4);


// ------------- SHARK ROUTES -------------
router.get('/sHome', (req, res)=>{
    return res.render('Shark-Home');
})

router.get('/sGames', (req, res)=>{
    return res.render('Shark-Games');
})



module.exports = router;