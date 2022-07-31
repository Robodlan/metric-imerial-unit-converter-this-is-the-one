

document.getElementById('output').style.visibility = 'hidden'
let input = document.getElementById("inputMeter")
let meterFeet = document.getElementById('meter-feet')
let feetMeter = document.getElementById('feet-meter')



input.addEventListener('input', function(e) {
    document.getElementById('output').style.visibility = 'visible'
    let num = e.target.value
    let numFeet = num *  3.2808;
    let numMeter = num / 3.2808
     document.getElementById('feet').textContent = num
     document.getElementById('gallons').textContent = num
     document.getElementById('pounds').textContent = num
     document.getElementById('meters').textContent = num
     document.getElementById('liters').textContent = num
     document.getElementById('kilos').textContent = num
     meterFeet.textContent = numFeet.toFixed(2);
     feetMeter.textContent = numMeter.toFixed(2)
     document.getElementById('liter-gallon').textContent = num * Math.round(3.78541);
     document.getElementById('gallon-liter').textContent = num / Math.round(3.78541);
     document.getElementById('kilos-pounds').textContent = num * Math.round(2.2046);
     document.getElementById('pounds-kilos').textContent = num / Math.round(2.2046);
     
})

setInterval(myTimer, 1000);

function myTimer() {
    const date = new Date();
    document.getElementById('clock').innerHTML = date.toLocaleTimeString();
}














 