//Quando il documento è caricato totalmente
$( document ).ready(function() {
    
    smoothScroll(800);
    
    //dai agli li della lista social ogni 150 una classe is-showing
    $('.lenguage li').each(function(i){
      setTimeout(function(){
        $('.lenguage li').eq(i).addClass('is-showing');
      }, 150 * (i+1));
    });
    
    //dai agli li della lista social ogni 150 una classe is-showing
    $('.link li').each(function(i){
      setTimeout(function(){
        $('.link li').eq(i).addClass('is-showing');
      }, 150 * (i+1));
    });
    
    //Fai comparire l'avatar aggiungenddo la classe is showing
     $('.avatar').addClass('is-showing');
    //Fai comparire il video aggiungenddo la classe is showing
     $('.video').addClass('is-showing');
});
                 
//Ogni volta che avviene uno scroll
$(window).scroll(function(){

  //Questa variabile indica la posizione dal top del documento
  var wScroll = $(this).scrollTop();
  
    //Parallax tra le varie palline dell'header
  $('.title').css({ 'transform' : 'translate(0px, '+ wScroll/3 +'%)' });
  $('.ball').css({ 'transform' : 'translate(0px, '+ wScroll/1 +'%)' });
  $('.back').css({ 'transform' : 'translate(0px, '+ wScroll/1 +'%)' });
    

//fai comparire gli work soltanto quando si arriva ad un certo punto della pagina
if(wScroll > $('.containerwork').offset().top - ($(window).height()) / 1.3) {

    //dai agli li della lista work ogni 150 una classe is-showing
    $('.work').each(function(i){

      setTimeout(function(){
        $('.work').eq(i).addClass('is-showing');
      }, 200 * (i+1));
    });

  }
    
    //fai comparire gli work soltanto quando si arriva ad un certo punto della pagina
    if(wScroll > $('.conainercontact ').offset().top - ($(window).height()) / 1.3) {
        $('.conainercontact ').addClass('is-showing');
  }
    if(wScroll < $('.works').offset().top - 100) {
        $('.homeul').addClass('active');
        $('.worksul').removeClass('active');
        $('.contactul').removeClass('active');
        $('.projectul').removeClass('active');
    }
    if(wScroll > $('.works').offset().top - 100) {
        $('.worksul').addClass('active');
        $('.homeul').removeClass('active');
        $('.contactul').removeClass('active');
        $('.projectul').removeClass('active');
    }
    if(wScroll > $('#contact').offset().top - 100) {
        $('.contactul').addClass('active');
        $('.homeul').removeClass('active');
        $('.worksul').removeClass('active');
        $('.projectul').removeClass('active');
    }
    if(wScroll > $('#project').offset().top - 100) {
        $('.projectul').addClass('active');
        $('.homeul').removeClass('active');
        $('.worksul').removeClass('active');
        $('.contactul').removeClass('active');
    }
    
    if(wScroll > $('.menu').offset().top){
       $('.menu').addClass('fixed');
    }
    if(wScroll < $('.menupos').offset().top){
       $('.menu').removeClass('fixed');
    }
});

//project converti la textarea nell'html contenuto nel div e fai un display se la textarea è coretta
function runHtml() {
    var textForCode = "Ciao";
  var textToWrite = document.getElementById('codeuser').value;
  document.getElementById("pagina").innerHTML = textToWrite;
    if (textToWrite == textForCode){
        document.getElementById('codiceSconto').innerHTML = "HS6SGFS87HGS";
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

var shopnumer;
var shopnumer1 = 0;
var shopnumer2 = 0;
var shopnumer3 = 0;
var shopnumer4 = 0;
var shopnumer5 = 0;

function Shopfunction(object) {

    if (object == 1)
        {
            if (shopnumer1 == 0)
                {
                    shopnumer1++;
                }
        }
    else if (object == 2)
        {
            if (shopnumer2 == 0)
                {
                    shopnumer2++;
                }
        }
    else if (object == 3)
        {
            if (shopnumer3 == 0)
                {
                    shopnumer3++;
                }
        }
    else if (object == 4)
        {
            if (shopnumer4 == 0)
                {
                    shopnumer4++;
                }
        }
    else if (object == 5)
        {
            if (shopnumer5 == 0)
                {
                    shopnumer5++;
                }
        }
    
    shopnumer = shopnumer1 + shopnumer2 + shopnumer3 + shopnumer4 + shopnumer5;
    
    if (shopnumer > 0)
        {
            document.getElementById('shopnumber').innerHTML = shopnumer;
            document.getElementById('shopnumber').style.opacity = '1';
        }
    Console.log(shopnumer);
}
$('shop.html').ready(function() {
    document.getElementById('SHOP1').innerHTML = shopnumer1;
    document.getElementById('SHOP2').innerHTML = shopnumer2;
    document.getElementById('SHOP3').innerHTML = shopnumer3;
    document.getElementById('SHOP4').innerHTML = shopnumer4;
    document.getElementById('SHOP5').innerHTML = shopnumer5;
    document.getElementById('SHOP').innerHTML = shopnumer;
});