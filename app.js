var myVideo = document.getElementById("video"); 
      
function playPause() { 
  if (myVideo.paused) 
    myVideo.play(); 
  else 
    myVideo.pause(); 
} 

function makeBig() { 
    myVideo.width = 1880; 
} 

function makeSmall() { 
    myVideo.width = 500; 
} 

function makeNormal() { 
    myVideo.width = 1000; 
}