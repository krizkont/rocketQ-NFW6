const Database = require('../db/config')

module.exports = {
    async create(req, res){
        const db = await Database()
        const pass = req.body.password
    
        let roomId
        let isRoom = true

        //Gera um id de sala e compara com os que existem no banco de dados, toda vez que for igual ele gera um novo
        while(isRoom){
            /*Gera numero da sala*/
            for(var i = 0; i < 6; i++)
            i === 0 ? roomId = Math.floor(Math.random() * 10).toString() :
            roomId += Math.floor(Math.random() * 10).toString()
            
            /*Verifica no banco de dados se já existe essa sala criada */
            const roomsExistIds = await db.all(`SELECT id FROM rooms`)
            isRoom = roomsExistIds.some(roomExistId => roomExistId === roomId)
        }

        /* Inserir sala no banco de dados*/
        if(!isRoom){
            await db.run(`INSERT INTO rooms (
                id,
                pass
            ) VALUES (
                ${parseInt(roomId)},
                ${pass}
            )`);
        }

        await db.close();

        res.redirect(`/room/${roomId}`);

    },

    async open(req,res){
        const db = await Database()
        const roomId = req.params.room
        const questions = await db.all(`SELECT * FROM questions WHERE room = ${roomId} and read = 0`)
        const questionRead = await db.all(`SELECT * FROM questions WHERE room = ${roomId} and read = 1`)
        let isNoQuestions

        if(questions.length == 0 ){
            if(questionRead.length == 0){
                isNoQuestions = true
            }
        }

        res.render('room', {roomId: roomId, questions: questions, questionsRead: questionRead, isNoQuestions: isNoQuestions})
    },

    enter(req, res){
        const roomId = req.body.roomId

        res.redirect(`/room/${roomId}`);
    }

}