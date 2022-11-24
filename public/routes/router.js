const express = require("express");
const router = express.Router();

const partController = require("../controllers/pController");
const Chatcontroller = require("../controllers/chatController")

router.get("/show-Participants", partController.showParticipants);

// Participantes
router.post("/add", partController.insertParticipant);
router.get("/delete/:cod_par", partController.deleteParticipant);
router.get("/edit/:cod_par", partController.editParticipant);
router.get("/raffle", partController.raffle)
router.get("/historialGanadores", partController.shoWinners);
router.get("/deleteGanador/:cod_par", partController.deleteWinner);


// CHAT --->
router.get('/prueba', (req, res)=>{
    return res.render('Chat', {time:Chatcontroller.getTime()});
})

router.get('/chat', Chatcontroller.history)

router.get("/prueba2", Chatcontroller.firstOptions, Chatcontroller.history);

/*router.get('/prueba2', (req, res)=>{
    return res.render('Chat-2', {Chatcontroller.firstOptions});
})

router.get("/mood%first", Chatcontroller.firstOptions);

/*router.post("/mood%second%good", Chatcontroller.secondOptions);
router.post("/mood%second%veryGood", Chatcontroller.secondOptions);
router.post("/mood%second%bad", Chatcontroller.secondOptions);
router.post("/mood%second%soBad", Chatcontroller.secondOptions);*/

/*Routes*/ 
router.get('/winners2', partController.shoParticipants);


router.get('/', (req, res) => {
    return res.render('home');
})


//Functions







module.exports = router;