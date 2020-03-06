
/*1. Add a script tag at the bottom of the page, where you'll put all your code.
2. Create a variable to store a reference to the img.
3. Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.
4. Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.
5. Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah!
6. When the cat reaches the right-hand of the screen, restart them at the left hand side ("0px"). So they should keep walking from left to right across the screen, forever and ever.
7. When the cat reaches the middle of the screen, replace the img with an image of a cat dancing (use this URL: https://tenor.com/StFI.gif), 
keep it dancing for 5 seconds,and then replace the img with the original image and have it continue the walk.*/


let img = document.getElementsByTagName('img')[0];
img.style.left = '0px';
let currentLeft = parseInt(img.style.left);

function catWalk(){
  currentLeft += 10;
  img.style.left = (currentLeft+0) + 'px'; 

  if (currentLeft == 640){
    clearInterval(walk);
    img.src='https://media.giphy.com/media/4GcCOrFAJoRfW/giphy.gif';
    setTimeout(walkAgain,5000);
  }
}

  function walkAgain(){
    img.src="http://www.anniemation.com/clip_art/images/cat-walk.gif";
    setInterval(() => {
      currentLeft += 10;
    img.style.left=(currentLeft+0) + 'px';
    reSet()
    }, 50); 
  }

let walk=setInterval(catWalk,50);

function reSet(){ 
  if(currentLeft >= 1280){
    location.reload();
  }
  }