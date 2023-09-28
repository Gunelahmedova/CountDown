

// var clock = document.querySelector(".clock");
// function Countdown() {
//   let userDays = prompt("Please enter the date (YYYY-MM-DD)");
//   let futureDate = new Date(userDays); 
//   if (userDays=="" || userDays===null) {
//     alert("Invalid date format. Please enter a valid date (YYYY-MM-DD).")
//     // console.log("Invalid date format. Please enter a valid date (YYYY-MM-DD).");
//     return;
//   }
//   else{
// let currentTime = new Date();
//     let differentTime = futureDate.getTime() - currentTime.getTime();
//     let days = Math.floor(differentTime / (1000 * 60 * 60 * 24)); //  days
//     let hours = Math.floor((differentTime / (1000 * 60 * 60)) % 24); //  hours
//     let minutes = Math.floor((differentTime / (1000 * 60)) % 60); //  minutes
//     let seconds = Math.floor((differentTime / 1000) % 60); //  seconds

//     // console.log(" days:", days);
//     // console.log(" hours:", hours);
//     // console.log(" minutes:", minutes);
//     // console.log(" seconds:", seconds);
//     clock.innerHTML = `<span class="days">${days}day</span> <span class="hours">${hours<10?"0"+hours:hours}</span>
//     <span>:</span>
//     <span class="min">${minutes<10 ?"0"+minutes: minutes}</span>
//     <span>:</span>
//     <span class="sec">${seconds<10?"0"+seconds:seconds}</span>`;
// }
// }

var clock = document.querySelector(".clock");
function Countdown() {
  let userDays = prompt("Please enter the date (YYYY-MM-DD)");
  let futureDate = new Date(userDays); 
  if (userDays=="" || userDays===null) {
    alert("Invalid date format. Please enter a valid date (YYYY-MM-DD).")
    // console.log("Invalid date format. Please enter a valid date (YYYY-MM-DD).");
    return;
  }


  setInterval(function () {let currentTime = new Date();
    let differentTime = futureDate.getTime() - currentTime.getTime();
    let days = Math.floor(differentTime / (1000 * 60 * 60 * 24)); //  days
    let hours = Math.floor((differentTime / (1000 * 60 * 60)) % 24); //  hours
    let minutes = Math.floor((differentTime / (1000 * 60)) % 60); //  minutes
    let seconds = Math.floor((differentTime / 1000) % 60); //  seconds


    clock.innerHTML = `<span class="days">${days}day</span> <span class="hours">${hours<10?"0"+hours:hours}</span>
    <span>:</span>
    <span class="min">${minutes<10 ?"0"+minutes: minutes}</span>
    <span>:</span>
    <span class="sec">${seconds<10?"0"+seconds:seconds}</span>`;}, 1000)

}

 


Countdown();
