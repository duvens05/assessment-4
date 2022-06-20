// let img1 = document.getElementById("img1");
// let img2 = document.getElementById("img2");
// let img3 = document.getElementById("img3");
const haircuts = require('./db.json')
let globalID = 4
module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getfortune: (req, res) =>{
        const fortunes = ["A beautiful, smart, and loving person will be coming into your life.", "A dubious friend may be an enemy in camouflage.","A faithful friend is a strong defense."]
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomfortune = fortunes[randomIndex];
        res.status(200).send(randomfortune);
    },
    
    gethaircut: (req, res)=>{
        
        // const haircuts = ['mohawk','dreads','bald']
        

        let randomIndex = Math.floor(Math.random() * haircuts.length);
        let randomhaircut = haircuts[randomIndex];
      
        res.status(200).send(randomhaircut.title);
    },
    posthaircut: (req, res)=>{
        const {title} = req.body;
    let newhaircut = {
        id: globalID,
        title
    }
    haircuts.push(newhaircut);
    globalID++;
    res.status(200).send(haircuts.length);
        
    },
    rate: (req,res) =>{
        const rating = ['5*',"4*","3*"]
        let randomIndex = Math.floor(Math.random() * rating.length);
        let randomrating = rating[randomIndex];
      
        res.status(200).send(randomrating);

    }
};