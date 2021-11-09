let nav = $("#navbar")
let main = $("#main");
let mainH;
let scrollPos = $(window).scrollTop();

$(window).on("scroll load resize", function(){
  mainH = main.innerHeight();
  scrollPos = $(this).scrollTop();


  if (scrollPos > mainH) {
    navbar.classList.add("sticky");
    document.getElementById("myBtn").style.display = "block";
  } else {
    navbar.classList.remove("sticky");
    document.getElementById("myBtn").style.display = "none";
  }
});

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0;
}

$("[data-scroll]").on("click", function(event){
  event.preventDefault();

  let elemID = $(this).data('scroll');
  let elemOffset = $(elemID).offset().top;

  $("html, body").animate({
    scrollTop: elemOffset
  }, 100);
});


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
