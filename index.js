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
    // console.log(dob);
    let year, month, day;
    day = (function () {
        if (today.getDate() > dob.getDate()) {
            return today.getDate() - dob.getDate() - 1   
        }
        else if (today.getDate() == dob.getDate()) {
            return today.getDate() - dob.getDate()
        }
        else{
            let calDate = new Date(dob.getFullYear(), dob.getMonth() + 1, 0);
            return (today.getDate() + calDate.getDate()) - dob.getDate() - 1
        }
        
        
    }());
   month = (function () {
     if (today.getMonth() >= dob.getMonth()) {
        if (today.getMonth() >= dob.getDate()) {
            return today.getMonth() - dob.getDate();
        }
        else{
            if ((today.getDate() - 1) >= dob.getMonth()) {
               return (today.getMonth() -1) - dob.getMonth();
            }
            else{
                return ((today.getMonth() - 1) + 12) - dob.getMonth();
            }
        }
     }
     else{
        if (today.getDate() >= dob.getDate()) {
            
            return (today.getMonth() + 12) - dob.getMonth();
        }
        else{
            return ((today.getMonth() - 1) + 12) - dob.getMonth();
        }
     }
       
        
        
   } ());
    age.innerHTML = "you are <br>" + year + " Years," + month +   "Months," + day + "  Days"
}
    calcBtn.onclick = calculate;