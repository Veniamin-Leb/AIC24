window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    document.getElementById("myBtn").style.display = "block";
  } else {
    navbar.classList.remove("sticky");
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

$(document).ready(function(){
    $(":input").inputmask();
    
    $("#exampleInputPassword2").inputmask({
    mask: '+7 (999) 999-99-99',
    placeholder: '+7 (___) ___-__-__',
    showMaskOnHover: false,
    showMaskOnFocus: false,
    onBeforePaste: function (pastedValue, opts) {
    var processedValue = pastedValue;
    
    //do something with it
    
    return processedValue;
    }
    });
    });


