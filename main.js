let x = 0
document.getElementById('result').innerHTML="<h2 id='red'>Muss auf jeden Fall nochmal!</h2>"
function minusOne(){
    x--
    document.getElementById("num").innerHTML = "<h3>" + x + "</h3>"
    if (x < 4) {
        document.getElementById('result').innerHTML="<h2 id='red'>Muss auf jeden Fall nochmal!</h2>"
    } else if (x < 6) {
        document.getElementById('result').innerHTML="<h2 id='blue'>Könnte noch was kommen!</h2>"
    } else {
        document.getElementById('result').innerHTML="<h2 id='green'>Bootsy ist leer!</h2>"
    }
}
function plusOne() {
    x++
    document.getElementById("num").innerHTML = "<h3>" + x + "</h3>"
    if (x < 4) {
        document.getElementById('result').innerHTML="<h2 id='red'>Muss auf jeden Fall nochmal!</h2>"
    } else if (x < 6) {
        document.getElementById('result').innerHTML="<h2 id='blue'>Könnte noch was kommen!</h2>"
    } else {
        document.getElementById('result').innerHTML="<h2 id='green'>Bootsy ist leer!</h2>"
    }
}