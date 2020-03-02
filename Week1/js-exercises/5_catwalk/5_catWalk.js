/*Start with this webpage, which has a single img tag of an animated GIF of a cat walking.
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Cat Walk</title>
  </head>
  <body>
    <img style="position:absolute;" src="http://www.anniemation.com/clip_art/images/cat-walk.gif" />
  </body>
</html>
```
1. Add a script tag at the bottom of the page, where you'll put all your code.
2. Create a variable to store a reference to the img.
3. Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.
4. Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.
5. Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah!
6. When the cat reaches the right-hand of the screen, restart them at the left hand side ("0px"). So they should keep walking from left to right across the screen, forever and ever.
7. When the cat reaches the middle of the screen, replace the img with an image of a cat dancing (use this URL: https://tenor.com/StFI.gif), 
keep it dancing for 5 seconds,and then replace the img with the original image and have it continue the walk.*/

const images=[
  {
  walk:"http://www.anniemation.com/clip_art/images/cat-walk.gif",
  dance:'https://media.giphy.com/media/4GcCOrFAJoRfW/giphy.gif'
    }
]

let img = document.getElementsByTagName('img')[0];
img.style.left = '0px';
let walkForwards = true;
function catWalk() {
  let currentLeft = parseInt(img.style.left);
  
  if (walkForwards && (currentLeft > (window.innerWidth-img.width))) {
    walkForwards = false;
  }
  if (!walkForwards && (currentLeft <= 0)) {
    walkForwards = true;
  }

  if(currentLeft==600){
    for (let i = 0; i < images.length; i++) {
     img.src=images[i].dance
    setTimeout(currentLeft=600,5000)
  }
}


  else if (currentLeft==610) {
    for (let i = 0; i < images.length; i++){
      img.src=images[i].walk;
    }
}
  
  if (walkForwards) {
    img.style.left = (currentLeft + 10) + 'px';
  } else {
    img.style.left = (currentLeft - 10) + 'px';
  }
}
let loop=window.setInterval(catWalk, 50);
 