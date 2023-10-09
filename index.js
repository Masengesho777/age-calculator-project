let disblock = document.getElementById('disblock');
let age = document.getElementById('Age');
let time = document.getElementById('time');
let dobDate = document.getElementById('dobDate');
let calcbtn = document.getElementById('calcBtn');
let resetbtn= document.getElementById('resetbtn');

disblock .style.display = 'none';
let dob = new Date(), today = new Date();   

function calculate() {
    disblock .style.display = 'block'; 
    let dobVal = dobDate.Value;
    console.log(dob);

    
}
calcBtn.onclick = calculate;