const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const formElement = document.getElementById("powerForm")
const nameInput = document.getElementById("name")
const plInput = document.getElementById("pl")
const formIncElement = document.getElementById("incForm")
const nameIncInput = document.getElementById("nameInc")
const formDelElement = document.getElementById("delForm")
const nameDelInput = document.getElementById("nameDel")
const playercontainer = document.querySelector('#playercollection')

const baseURL = "http://localhost:4000"

const playercallback = ({data: database })=>displayplayer(database)
const errCallback = err => console.log(err,"yo2")

const getplayer = () => axios.get(baseURL+"/api/player").then(playercallback).catch(errCallback)
const getComplimentYowza = () => {
    axios.get(baseURL + "/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get(baseURL + "/api/fortune/")
        .then((res) => {
            alert(res.data)
        }).catch((error) => {
            alert('backend broken!')
        })
}

const submitPerson = (event) => {
    event.preventDefault()

    const name = nameInput.value
    const pl = plInput.value

    const theBody = {
        name: name,
        power_level: +pl,
    }

    axios.post(baseURL + '/api/createUser', theBody)
    .then((response) => {
        if (response.data.success) {
            console.log('new database looks like:')
            console.log(response.data.info)
        } else {
            alert('failure')
        }
    })

    nameInput.value = ''
    plInput.value = ''
    

}

const incPower = (event) => {
    event.preventDefault()

    const name = nameIncInput.value

    axios.put('http://localhost:4000/api/incUser/' + name)
    .then((response) => {
        if (response.data.success) {
            console.log('new database looks like:')
            console.log(response.data.info)
        } else {
            alert('failure')
        }
    })
  
}

const delUser = (event) => {
    event.preventDefault()

    const name = nameDelInput.value

    axios.put('http://localhost:4000/api/delUser/' + name)
    .then((response) => {
        if (response.data.success) {
            console.log('new database looks like:')
            console.log(response.data.info)
        } else {
            alert('failure')
        }
    })
  
}

function createplayercard(database) {
    const playercard = document.createElement('div')
    playercard.classList.add('player-card')

    playercard.innerHTML = `
    <p class="name1">${database.name}</p>
    <p class="power level">$${database.power_level}</p>
     
    `;


    playercontainer.appendChild(playercard)
}


function displayplayer(arr) {
    playercontainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createplayercard(arr[i])
    }
}

complimentBtn.addEventListener('click', getComplimentYowza)
fortuneBtn.addEventListener('click', getFortune)
formElement.addEventListener('submit', submitPerson)
formIncElement.addEventListener('submit', incPower)
formDelElement.addEventListener('submit', delUser)
getplayer()