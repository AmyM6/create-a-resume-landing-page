let myRequest = new XMLHttpRequest();
myRequest.open('GET',  "https://api.adviceslip.com/advice", true);
myRequest.send();

myRequest.onreadystatechange = function() {
    if (this.readyState == 4) {
        if (this.status == 200) {
            let getAdvice = JSON.parse(this.responseText);
            console.log(getAdvice)

            let newAdvice = document.getElementById("advice");
            newAdvice.innerHTML = getAdvice.slip.advice;
        }
    }
    
}
