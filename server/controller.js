module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const fortunes = [
            "Soon Brian Pagani will eat Portillo's with Adrian",
            "Follow a rainbow to find rain",
            "Just be yourself",
            "A fresh start will put you on your way",
            "Jared will be unlocked upon completion of the class",
            "You will assist a puffin with your gloved hand",
        ]

        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];

        res.status(200).send(randomFortune);
    },
    createUser: (req, res) => {
        database.push(req.body)
        res.status(200).send({success: true, info: database})
    },
    incUser: (req, res) => {
        const name = req.params.name
        for (let i=0; i<database.length; i++) {
            if (database[i].name === name) {
                database[i].power_level++
            }
        }
        res.status(200).send({success: true, info: database})
    },
    delUser: (req, res) => {
        const name = req.params.name
        for (let i=0; i<database.length; i++) {
            if (database[i].name === name) {
                database.splice(i, 1);
            }
        }
        res.status(200).send({success: true, info: database})
    },
    getplayer: (req,res)=>{
        res.status(200).send(database)
    },

}

const database = [
    {
        name:'duvens',
        power_level:55
    },
]