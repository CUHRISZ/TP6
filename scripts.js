

window.onload = function() {
    
  document.querySelector("body").innerHTML += "<h4>Terrific red velvet cupcakes in 40 minutes!</h4>";
  
  document.querySelector("#heading").classList.add("tp");
  // java uses css queryselector to find thing, and find classes attached, and add tp
  
  document.querySelector("#heading").onclick = function() {
    this .classList.toggle("red");
  }
  // java uses css queryselector to find thing and adds an onclick event which toggles the .red class
  
  
  // had to format like this due to HTML
  document.querySelector("#cakeingredients").onclick = function() {
    this .classList.toggle("show");
  }
  document.querySelector("#frostingingredients").onclick = function() {
    this .classList.toggle("show");
  }
  document.querySelector("#directions").onclick = function() {
    this .classList.toggle("show");
  }  

  
}

// classlist.toggle -> toggles class