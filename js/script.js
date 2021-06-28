window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
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