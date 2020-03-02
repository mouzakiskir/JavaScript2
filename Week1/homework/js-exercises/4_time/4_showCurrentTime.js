/*Why wear a watch when you can check the time, live in your webpage?

1. Create an empty HTML file, called `time.html`
2. Create a JavaScript file called `showCurrentTime.js` and include it in the HTML file
3. Inside the JS file, write a function that adds the current time to the webpage. Make sure it's written in the HH:MM:SS notation (hour, minute, second). Hint: use `setInterval()` to make sure the time stays current
4. Have the function execute when it's loading in the browser*/


function showTimer() {
    let p=document.createElement("p");
    let d = new Date();
    let time= d.toLocaleTimeString('en-GB');// 'en-GB' is an locale option to show time in 24hour format, without it the default is 12hour.
    document.body.appendChild(p);
    let timer=document.querySelector("p");
    timer.innerHTML=time;
}
    setInterval(showTimer,500);