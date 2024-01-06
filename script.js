// Set the countdown time (replace with your desired time)
const bgv = document.getElementById("background-video");
const countDownDate = new Date('Jan 7, 2024 00:00:00').getTime();
let ccount = 0;
// Update the countdown every second
const x = setInterval(() => {
  const now = new Date().getTime();
  const distance = countDownDate - now;
  // Calculate the days, hours, minutes, seconds here
  // When countdown ends
  const button = document.getElementById('button');
  const canvas = document.querySelector('#confetti');
  const jsConfetti = new JSConfetti();
  const audio = new Audio("https://dl.dropbox.com/scl/fi/3o9by8n36og7r2239sv7a/party-popper.mp3?rlkey=vrpgzbipvk8j7cq9waoesc9iw&dl=0");
  const music = new Audio("https://dl.dropbox.com/scl/fi/1pna8px34gn7ybog7q26o/happy-birthday-155461.mp3?rlkey=77wyopo3q8xbzsy493t49d1e0&dl=0");
  if (distance < 0) {
    clearInterval(x);
    bgv.innerHTML = "<source src='assests/videos/fireworksback.mp4' type='video/mp4'>";
    document.getElementById('countdown').style.display = "none";
    // document.getElementById('countdown2').style.display = "none";
    setTimeout(()=>{
      audio.play().then(()=>{
        
        jsConfetti.addConfetti({
          confettiRadius: 4,
          confettiNumber: 2000,
          confettiSpeed:200,
          // emojis:['🎂','🎉','💖'],
          // emojiSize: 10,
        });
        
        music.play();
         let popperr = setInterval(() => {
          audio.play().then(()=>{
            ccount++;
            jsConfetti.addConfetti({
              confettiRadius: 4,
              confettiNumber: 2000,
              confettiSpeed:200,
              // emojis:['🎂','🎉','💖'],
              // emojiSize: 10,
            });
            if(ccount >= 9){
              clearInterval(popperr);
            }
          })
        }, 10000);
      })
      document.getElementById('revealContent').style.display = 'block'; // Revealing hidden content

    },5000);
  }
}, 1000);


const countDownDate2 = new Date('Jan 7, 2024 22:00:00').getTime();

// Update the countdown every second
const x2 = setInterval(() => {
  const now2 = new Date().getTime();
  const distance2 = countDownDate2 - now2;
  // Calculate the days, hours, minutes, seconds here
  if (distance2 < 0) {
    clearInterval(x2);
    document.getElementById('countdown2').style.display = "none";
    document.getElementById('revealContent2').style.display = 'block';
  }
}, 1000);














































const text = document.getElementById('head');
  const letters = text.textContent.split('');
  text.textContent = '';

  for (let i = 0; i < letters.length; i++) {
    const span = document.createElement('span');
    span.textContent = letters[i];
    text.appendChild(span);
  }

  let currentIndex = 0;
  const colors = ['red', 'white', 'white', 'white']; // Add colors of your choice
  setInterval(() => {
    const spans = text.getElementsByTagName('span');
    for (let i = 0; i < spans.length; i++) {
      spans[i].style.color = colors[currentIndex % colors.length];
      currentIndex++;
    }
  }, 500);
const text2 = document.getElementById('head2');
  const letters2 = text2.textContent.split('');
  text2.textContent = '';

  for (let i = 0; i < letters2.length; i++) {
    const span2 = document.createElement('span');
    span2.textContent = letters2[i];
    text2.appendChild(span2);
  }

  let currentIndex2 = 0;
  const colors2 = ['red', 'white', 'white', 'white']; // Add colors of your choice
  setInterval(() => {
    const spans2 = text.getElementsByTagName('span');
    for (let i = 0; i < spans2.length; i++) {
      spans2[i].style.color = colors2[currentIndex2 % colors2.length];
      currentIndex2++;
    }
  }, 500);