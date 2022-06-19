// // disable right click 
// document.addEventListener("contextmenu" , function (e)  {

//     "use strict";
  
//     e.preventDefault();
  
//   });

// // end  disable right click



   
// start of frontEnd
window.onload = function () {

    "use strict " 

var frontEnd = document.getElementById("front-end"),   // the place of text.
    myText = "Front-End Designer",                     //the text will appear. 
    i = 0 ;                                            // to start with the index zero and increament.

var myInterval = setInterval (function() {
 
frontEnd.textContent += myText [i];                    // the myText and the index starts with zero.
    i++                                                // to increase zero by one every 100 millisecond.
    if (i > myText.length-1){                          // to stop the function itself.
        clearInterval(myInterval);
    }
} , 100)                                               // make the function repets every 100 milliseconds.
}; 


// span count the charcter beside the text area & value after press send button
var  $textArea   =  document.getElementById ("text"),
     $phoneInput =  document.getElementById ("phone"),
     $emailInput =  document.getElementById ("email"),
     $maxLength  =  $textArea.getAttribute("maxlength"),
     sendButton  =  document.getElementById("sendButton"),
     warning     =  document.getElementById("warning-message"),
     closeIcon       =  document.getElementById("close-icon");


// cahnging the color of inputs on focus and blur
$phoneInput.onfocus = () => $phoneInput.style.color= "white";

$phoneInput.onblur = () => $phoneInput.style.color= "rgb(126, 123, 123) ";

$emailInput.onfocus = () => $emailInput.style.color= "white";

$emailInput.onblur = () => $emailInput.style.color= "rgb(126, 123, 123)";

$textArea.onfocus = () => $textArea.style.color= "white";

$textArea.onblur = () => $textArea.style.color= "rgb(126, 123, 123) ";


// start of counter span
$textArea.onkeydown =  function () {

    $count.innerHTML = $maxLength - this.value.length;

    if  ( $count.innerHTML == 0){
        $count.innerHTML = "  Limit Exceeded";
    } 
};



// start of when press the send button
sendButton.onclick = function () {
    
if (isNaN ($phoneInput.value)) {
    warning.style.visibility = "visible";
    closeIcon.onclick = function () {
        warning.style.visibility = "hidden";
    }
} else {
    if ($textArea.value === " "|| $textArea.value === "" || $textArea.value == "your request has been sent successfully." ) {
        Swal.fire({
            title: "Notice",
            text: "This input could not be empty.",
            icon : "warning", 
            backdrop: "false", 
            background: "white",
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: true,
            showConfirmButton: true,
            confirmButtonText : "confirm", 
            position : "bottom" ,
            customClass : "sweet",
               
          });
    } else {
    $textArea.value = " ";
    $phoneInput.style.color= "rgb(126, 123, 123 ";
    $emailInput.style.color= "rgb(126, 123, 123) ";
    $textArea.removeAttribute("placeholder");
    $textArea.style.color = "gray";
    $textArea.value = "your request has been sent successfully." ;
    $count.innerHTML = $maxLength;
    Swal.fire({
        title: "success",
        text: "your request has been sent successfully.",
        icon : "success", 
        backdrop: "false", 
        background: "white",  
        allowOutsideClick: false,   
        allowEscapeKey: false,
        allowEnterKey: true,
        confirmButtonText: "confirm", 
        position: "bottom" 
      });
      $textArea.onfocus =  function () {
        if ($textArea.value === "your request has been sent successfully." ) {
        $textArea.value = " "; 
        $count.innerHTML = $maxLength;
        $textArea.style.color = "white";
        }
    
        $textArea.onblur = function () {
            if ($textArea.value === "" || $textArea.value === " ") {
                $textArea.value = "your request has been sent successfully."; 
                $textArea.style.color = "gray";
              } else {
                $textArea.style.color = "gray";
              }
          } 
        $textArea.onfocus = function () { 
            if($textArea.value !== "your request has been sent successfully.") {
                $textArea.style.color = "white";
            } else {
                $textArea.value = " ";
                $textArea.style.color = "white";
        
            }
        }
    };
 }
}
};





// End of function 

// start of button of scroll top 
var scrollTop = document.getElementById("scrollTop");

scrollTop.onclick = function  () {

    window.scrollTo (0 , 0);
} 
// End of button of scroll top 

// start of reviews 


var slide = Array.from (document.querySelectorAll(".reviews div")),
    sliderCount = slide.length,
    currentSlide = 3;
    
//start of pagination 
// crate the ul
var paginationElement = document.createElement ("ul");

paginationElement.setAttribute("id" , "pagination-ul");

var paginationElementCreated = document.getElementById ("pagination-ul");

// create the li

for(  i = 1; i <= sliderCount; i++ ){

    var paginationItem = document.createElement ("li"); // creating the element 
    paginationItem.setAttribute("data-item" , i); //numbers inside attr (this code for make numbers active) 
    paginationElement.appendChild(paginationItem); // insert the li inside the ul 
};

// put the ul and li inside the indicators
document.getElementById("indicators").appendChild (paginationElement);

// make array for pagination 

var paginationClasses = Array.from (document.querySelectorAll("#pagination-ul li")); 

// (to make bullets active)

for(var i = 0; i < paginationClasses.length; i++){

    paginationClasses[i].onclick = function () {
        
        currentSlide = parseInt(this.getAttribute("data-item"));

        checkerFunc(); 
    }
}

// start of functions

function checkerFunc() {

removeActive();

//add active class for  current slide
slide[currentSlide - 1].classList.add("active");

// add active class for current pagination 
paginationClasses[currentSlide- 1].classList.add("active"); 

}
checkerFunc()

function removeActive() {

    slide.forEach (function (img){
        img.classList.remove ("active");
    });

    paginationClasses.forEach (function (bullet){

        bullet.classList.remove ("active");
    });
}