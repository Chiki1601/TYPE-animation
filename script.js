var done = true;

function type(outputHTML,delay) {
  var text = document.getElementById("textfield").value;
  outputHTML.innerHTML = "";
  setTimeout(function() {
    typeRec(text, outputHTML, 0, delay);
  }, delay);
}

function typeRec(text, outputHTML, i, delay) {
  if (i == text.length) {//end condition for recursive function
    setTimeout(function() {
      typeReverseRec(outputHTML,delay/2);//start the recursive reverse typing
    },delay*10);
    return 0;
  }
  outputHTML.innerHTML += text[i++];
  
  setTimeout(function() {
    typeRec(text, outputHTML, i, delay); 
  }, (delay/2)*Math.random()+delay);//Add a random element to the delay so it doesn't seem to linear.
}

function typeReverseRec(outputHTML,delay){
  outputHTML.innerHTML = outputHTML.innerHTML.slice(0, -1);

   if (outputHTML.innerHTML.length == 0) {
     done = true;
     return 0;
  }
  
  setTimeout(function() {
    typeReverseRec(outputHTML, delay);
  }, delay);

}

function writeText() {
  if(done){
    document.getElementById("text").innerHTML = "";
    done = false;
    type(document.getElementById("text"),75);
  }
}

document.getElementById("textfield").addEventListener("keyup",function(event){
  if (event.keyCode == 13) {
   writeText();
  }
});
                                                      
writeText();


var TypeText = function(elt,textArr,delay) {
  this.textArr = textArr;
  this.elt = elt;
  this.delay = delay;
  
  this.type = function(){
    var text = textArr[0];
    elt.innerHTML = "";
    setTimeout(function() {
      typeRec(text, elt, 0, delay);
    }, delay);
  };

  function typeRec(text, outputHTML, i, delay) {
  if (i == text.length) {//end condition for recursive function
    setTimeout(function() {
      typeReverseRec(outputHTML,delay/2);//start the recursive reverse typing
    },delay*10);
    return 0;
  }
  outputHTML.innerHTML += text[i++];
  
  setTimeout(function() {
    typeRec(text, outputHTML, i, delay); 
  }, (delay/2)*Math.random()+delay);//Add a random element to the delay so it doesn't seem too linear.
}

var typeReverseRec = function typeReverseRec(outputHTML,delay){
  outputHTML.innerHTML = outputHTML.innerHTML.slice(0, -1);

   if (outputHTML.innerHTML.length == 0) {
     done = true;
     return 0;
  }
  
  setTimeout(function() {
    typeReverseRec(outputHTML, delay);
  }, delay);

};

};