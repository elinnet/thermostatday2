
thermostat = new Thermostat();

var temp = document.getElementById("temp");

temp.innerHTML = thermostat.temperature;


document.getElementById("up-button").onclick = function(){
 thermostat.increase();
 console.log("up");

  if (thermostat.temperature === 25 && thermostat._powerSave === true){
    alert("You have reached the max temp")
  // };
  } else if (thermostat.temperature === 32 && thermostat._powerSave === false) {
    alert("You have reached the max temp")
  } else {
    document.getElementById("temp").innerHTML = thermostat.temperature;
    refresh_display();
  };
};

document.getElementById("down-button").onclick = function(){
  thermostat.decrease();
  document.getElementById("temp").innerHTML = thermostat.temperature;
  console.log("down");
  refresh_display();
};


function refresh_display(){
  if (thermostat.temperature > 25){
    document.getElementById("body").style.background = "red";
  } else if (thermostat.temperature > 18 && thermostat.temperature < 25) {
    document.getElementById("body").style.background = "green";
  } else {
    document.getElementById("body").style.background = "yellow";
  };
};


document.getElementById("power-save").onclick = function(){
  if (document.getElementById("power-save").classList == "ON"){
        
        document.getElementById("power-save").classList.remove("ON");
        document.getElementById("power-save").classList.add("OFF");
        thermostat._powerSave = false;
  
  } else {
        document.getElementById("power-save").classList.remove("OFF");
        document.getElementById("power-save").classList.add("ON");
        thermostat._powerSave = true;

  }
};




