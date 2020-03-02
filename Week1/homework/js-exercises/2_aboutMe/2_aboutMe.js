/*Start with this HTML and save it as "about_me.html":
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>About Me</title>
  </head>
  <body>
    <h1>About Me</h1>

    <ul>
      <li>Nickname: <span id="nickname"></span></li>
      <li>Favorite food: <span id="fav-food"></span></li>
      <li>Hometown: <span id="hometown"></span></li>
    </ul>
  </body>
</html>*/

//1. Add a script tag to the bottom of the HTML body.
//2. (In the JavaScript) Change the body tag's style so it has a font-family of "Arial, sans-serif".
    let fontStyle=document.querySelector("body");
    fontStyle.style.fontFamily="Arial";

//3. (In the JavaScript) Replace each of the spans (nickname, fav-food, hometown) with your own information.
    let nickName=document.querySelector("#nickname");
    nickName.innerHTML="Kiriakos Mouzakis";
    let favFood=document.querySelector("#fav-food");
    favFood.innerHTML="Meat balls";
    let homeTown=document.querySelector("#hometown");
    homeTown.innerHTML="Athens";
//4. Iterate through each li and change the class to "list-item".
    let listItem=document.getElementsByTagName("li");
    for(let i=0; i<listItem.length; i++ ){
    listItem[i].className="list-item";
  }
// 5. (In the HTML head) Add a style tag that sets a rule for .list-item to make the color red.
    let styLe=document.createElement("style");
    styLe.innerHTML=".list-item{color:red;}";
    document.head.appendChild(styLe);
    
//6. Create a new img element and set its src attribute to a picture of you. Append that element to the page.
    let imAge=document.createElement("img");
    document.body.appendChild(imAge);
    imAge.src="https://c8.alamy.com/comp/W41CRK/emoticon-face-pixel-art-8-bit-video-game-icon-W41CRK.jpg";
    imAge.style="width:200px"; //picture was too large
   