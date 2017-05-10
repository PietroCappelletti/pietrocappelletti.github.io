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
    
});

function openwebsite(url)
{
    window.open(url);
}