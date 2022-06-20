const complimentBtn = document.getElementById("complimentButton")
const fortunebtn = document.getElementById("fortunebutton")
const haircutbtn= document.getElementById("gethaircut")
const addmovie1 = document.getElementById('movieinput')
const randomrating = document.getElementById('stuff')






const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
function getfortune(){
    axios.get("http://localhost:4000/api/fortune/")
          .then (res => {
            const data = res.data;
            alert(data);
          })

};
function gethaircut(){
    axios.get("http://localhost:4000/api/haircut/")
          .then(res => {
        const data = res.data;
        alert(data);} )
};
function posthaircut(){
    axios.post("http://localhost:4000/api/haircut/")
    .then(res => {
        const data = res.data;
        alert(data);} )
};
function rate (){
    axios.get("http://localhost:4000/api/holidays/")
.then(res => {
const data = res.data;
alert(data);} )

}
complimentBtn.addEventListener('click', getCompliment);
fortunebtn.addEventListener('click', getfortune);
haircutbtn.addEventListener('click',gethaircut);
addmovie1.addEventListener('submit',posthaircut);
randomrating.addEventListener('click',rate);

