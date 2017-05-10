$( document ).ready(function() {
    
    smoothScroll(800);
    
    var widthwork = (document.getElementById('liwork0').clientWidth) / 1.5;
    widthwork += "px";
    
    for (i = 0; i < 9; i++) { 
        var s = "liwork" + i;
        document.getElementById(s).style.height = widthwork;
    }  
    
});
window.onresize = function() {
    var widthwork = (document.getElementById('liwork0').clientWidth) / 1.5;
    widthwork += "px";
    
    for (i = 0; i < 9; i++) { 
        var s = "liwork" + i;
        document.getElementById(s).style.height = widthwork;
    }
}

function smoothScroll (duration) {
    //ogni a contenente un href trovato che contiene un #, quando lo si clicca fai partire la funzione
	$('a[href^="#"]').on('click', function(event) {

        //target è settato come argomento href dell'a
	    var target = $( $(this).attr('href') );

        //crea un animazione di durata settata nella funzione document ready che porti la visuale all'altezza del bersaglio
	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').animate({
	            scrollTop: target.offset().top
	        }, duration);
	    }
	});
}

$(window).scroll(function(){

  //Questa variabile indica la posizione dal top del documento
  var wScroll = $(this).scrollTop();
  
    //Parallax tra le varie palline dell'header
  $('.title').css({ 'transform' : 'translate(0px, '+ wScroll/3 +'%)' });
   
    if(wScroll > $('#work').offset().top - ($(window).height()) + 400) {

    //dai agli li della lista work ogni 150 una classe is-showing
    $('.workelement').each(function(i){

      setTimeout(function(){
        $('.workelement').eq(i).addClass('is-showing');
      }, 200 * (i+1));
    });

  }
    
  if(wScroll > $('#contact').offset().top - ($(window).height())) {
        $('.conainercontact').addClass('is-showing');
  }

    
});

var sh1 = 0;
var sh2 = 0;
var sh3 = 0;
var sh = 0;

function shopbtn(obj){
    if (obj == 1)
        {
            sh1 += 1;
        }
    if (obj == 2)
        {
            sh2 += 1;
        }
    if (obj == 3)
        {
            sh3 += 1;
        }
    
    sh = sh1 + sh2 + sh3;
    
    document.getElementById('carrello').style.display = "block";
    document.getElementById('carrellopointer').innerHTML = sh;
}

function goshop(){
    var s = "shop.html";
    s += "?sh1=" + sh1 + "&sh2=" + sh2 + "&sh3=" + sh3;
    console.log(s);
    window.open(s, "Shop", "width=750,height=400");
    
    sh1 = 0;
    sh2 = 0;
    sh3 = 0;
    sh = sh1 + sh2 + sh3;
    
    if (sh == 0)
        {
            document.getElementById('carrello').style.display = "none";
            document.getElementById('carrellopointer').innerHTML = sh;
        }
}