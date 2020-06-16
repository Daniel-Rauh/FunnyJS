let x = 0
document.getElementById('result').innerHTML="<h2 id='red'>Rute stinkt!</h2>"
function minusOne(){
    x--
    document.getElementById("num").innerHTML = "<h3>" + x + "</h3>"
    if (x < 3) {
        document.getElementById('result').innerHTML="<h2 id='red'>Rute stinkt!</h2>"
    } else if (x < 5) {
        document.getElementById('result').innerHTML="<h2 id='blue'>Rute stinkt vielleicht!</h2>"
    } else {
        document.getElementById('result').innerHTML="<h2 id='green'>Rute stinkt nicht!</h2>"
    }
}
function plusOne() {
    x++
    document.getElementById("num").innerHTML = "<h3>" + x + "</h3>"
    if (x < 3) {
        document.getElementById('result').innerHTML="<h2 id='red'>Rute stinkt!</h2>"
    } else if (x > 3, x < 5) {
        document.getElementById('result').innerHTML="<h2 id='blue'>Rute stinkt vielleicht!</h2>"
    } else {
        document.getElementById('result').innerHTML="<h2 id='green'>Rute stinkt nicht!</h2>"
    }
}