async function logout() {
    const response = await fetch('/api/users/logout', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' }
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
}
  
  
document.querySelector('#logout').addEventListener('click', logout);

var timeoutID;
var warningID;

function setup() {
    this.addEventListener("mousemove", resetTimer, false);
    this.addEventListener("mousedown", resetTimer, false);
    this.addEventListener("keypress", resetTimer, false);
    this.addEventListener("DOMMouseScroll", resetTimer, false);
    this.addEventListener("mousewheel", resetTimer, false);
    this.addEventListener("touchmove", resetTimer, false);
    this.addEventListener("MSPointerMove", resetTimer, false);

    startTimer();
}
setup();

function startTimer() {
    // wait 6 seconds before calling goInactive
    timeoutID = window.setTimeout(goInactive, 15 * 60 * 10000);
    warningID = setTimeout(function () { alert("You will be logged out in five minutes due to inactivity") }, 3300000)
}

function resetTimer(e) {
    window.clearTimeout(timeoutID);
    window.clearTimeout(warningID);
    startTimer()
}

function goInactive() {
    logout();
}