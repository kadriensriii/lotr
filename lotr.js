//#202222
var cb = document.querySelectorAll(".card-body");
var navbar = document.getElementById("navbar");
var iletbilgi = document.getElementById("ilet-bilgi");
var lotricon = document.getElementById("lotricon");
function dark(){
    var darktema = document.getElementById("dark")
    if(darktema.checked == true){
        document.body.style.background = "black";
        document.body.style.color = "#DAA520"
        navbar.style.background = "black"
        iletbilgi.style.color='#DAA520'
        for(var i = 0; i <cb.length; i++){
            cb[i].style.background = "black";
        }
    } 
    else{
        document.body.style.background = "white";
        document.body.style.color = "black"
        for(var i = 0; i <cb.length; i++){
            cb[i].style.background = "white";
        }
        navbar.style.background = "white"
        iletbilgi.style.color='lightgray'
    }
    }

    var mybutton = document.getElementById("myBtn");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};
    
    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }
    
    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }

    