// script.js
console.log("This is a JavaScript file");
const popper = document.getElementById("button");
const popperdiv = document.getElementById("btn");
let unwrapcount = 0;
popperdiv.style.visibility = "hidden";
function unwrap() {
  unwrapcount = unwrapcount + 1;
  // alert("Gift unwrapped!!!!");
//    document.getElementsByTagName("h1")[0].style.color = "green";
document.getElementsByTagName("button")[0].style.display = "none";
document.getElementsByTagName("button")[0].innerHTML = "Next";
let box = document.getElementById("gift-box");
// box.classList.add("rotate")
if (unwrapcount == 1) {
  popper.click();
  popperdiv.style.visibility = "visible";
  box.classList.add("rotate")
  box.setAttribute('src','assests/images/hbd.jpg');
  let path = box.getAttribute('src');
  console.log("The path is = " + path);
  console.log("The count is = "+unwrapcount);
}
else if(unwrapcount == 2){
    box.classList.add("rotate")
    box.setAttribute('src','assests/images/img 3.jpg');
    let path = box.getAttribute('src');
    console.log("The path is = " + path);
    console.log("The count is = "+unwrapcount);
    
  }
  else if(unwrapcount == 3){
    box.classList.add("rotate")
    document.getElementsByTagName("button")[0].innerHTML = "OPEN!!!";
    document.getElementsByTagName("button")[0].disabled=true;
    let countdown = 10;
    
  var timerID = setInterval(function () {
    document.getElementById('media').innerHTML = countdown;
    countdown--;
    if (countdown < 0) {
      clearTimeout(timerID);
      document.getElementsByTagName("button")[0].disabled = false;
      document.getElementById('media').innerHTML = "";
      
    };
  },1000)
}
else if(unwrapcount == 4){
  
  document.getElementById("media").innerHTML = '<video src="assests/videos/hbd.mp4" id="vid" alt="birthday video" width="400px" height="350px" controls autoplay loop></video>';
  // document.getElementById("vid").classList.add("rotate");
  const video = document.getElementById('vid');
  // Function to request fullscreen
  video.addEventListener('play', () => {

      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.webkitRequestFullscreen) { /* Safari */
        video.webkitRequestFullscreen();
      } else if (video.msRequestFullscreen) { /* IE11 */
        video.msRequestFullscreen();
      }
  });
      // Call the function to request fullscreen when the video loads
      video.addEventListener('loadedmetadata', requestFullscreen);

}
setTimeout(function() {
    // window.location.href="https://www.google.com/";
    document.getElementsByTagName("button")[0].style.display = "inline-block";
    //    setTimeout(()=>{
        if(unwrapcount!=4){
        box.classList.remove("rotate");
        }
        else
        document.getElementById("vid").classList.remove("rotate");
        //    },2000);
        
    }, 1000);
}
function password(){
  const pass = "3107";
  let passentered = document.getElementById("pass").value;
  let passfield = document.getElementById("pass");
  let unwrapgift = document.getElementById("unwrap");
  let unlock = document.getElementById("ungift");
  let timer = 10;
  let instruct1 = document.getElementById("instruction1");
if(pass == passentered){
  unwrapgift.disabled = false;
  unlock.style.display = "none"; 
  passfield.style.display = "none";
  instruct1.style.display = "none";
}
else if(passentered == ""){
  
  // setTimeout(function(){
    alert("Please enter your password!");
  // },1000);
  const Interval = setInterval(() => {
    
    console.log(timer);
    timer = timer-1;
    if (timer < 0) {
      clearInterval(Interval);
      };
  }, 1000);
  passfield.style.border = "1px solid red";
}
else{
  alert("Wrong Password! Try Again.");
}
}
const button = document.getElementById('button');
const canvas = document.querySelector('#confetti');
const jsConfetti = new JSConfetti();

// Assuming 'party popper.mp3' is in the 'assets/SFX' directory relative to your HTML file
const audio = new Audio("https://dl.dropbox.com/scl/fi/3o9by8n36og7r2239sv7a/party-popper.mp3?rlkey=vrpgzbipvk8j7cq9waoesc9iw&dl=0");
button.addEventListener('click', () => {
  audio.play().then(()=>{

    jsConfetti.addConfetti({
      confettiRadius: 4,
      confettiNumber: 2000,
      confettiSpeed:200,
      // emojis:['🎂','🎉','💖'],
      // emojiSize: 10,
    });
    button.disabled=true;
    setTimeout(() => {
      button.disabled = false;
    }, 2000);
  })

});