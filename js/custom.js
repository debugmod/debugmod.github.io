
 /* jQuery Pre loader
  -----------------------------------------------*/
$(window).load(function(){
    $('.preloader').fadeOut(1000); // set duration in brackets    原1000
});



$(document).ready(function() {

  /* Home Slideshow Vegas
  -----------------------------------------------*/
 
 $(function() {
    $('body').vegas({
        slides: [
            { src: 'images/love/love0.jpg' },
			{ src: 'images/love/love.jpg' },
			{ src: 'images/love/love1.jpg' },
			{ src: 'images/love/love2.jpg' },
			{ src: 'images/love/love3.jpg' },
			{ src: 'images/love/love4.jpg' },
			{ src: 'images/love/love5.jpg' },
			{ src: 'images/love/love6.jpg' },
			{ src: 'images/love/love7.jpg' },
			{ src: 'images/love/love8.jpg' },
			{ src: 'images/love/love9.jpg' },
			{ src: 'images/love/love10.jpg' },
			{ src: 'images/love/love11.jpg' },
			{ src: 'images/love/love12.jpg' },
			{ src: 'images/love/love13.jpg' },
			{ src: 'images/love/love14.jpg' },
			{ src: 'images/love/love15.jpg' },
			{ src: 'images/love/love16.jpg' },
			{ src: 'images/love/love17.jpg' },
			{ src: 'images/love/love18.jpg' },
			{ src: 'images/love/love19.jpg' },
			{ src: 'images/love/love20.jpg' },
			{ src: 'images/love/love21.jpg' },
			{ src: 'images/love/love22.jpg' },
			{ src: 'images/love/love23.jpg' },
			{ src: 'images/love/love24.jpg' },
			{ src: 'images/love/love25.jpg' },
			{ src: 'images/love/love26.jpg' },
			{ src: 'images/love/love27.jpg' },
			{ src: 'images/love/love28.jpg' },
			{ src: 'images/love/love29.jpg' },
			{ src: 'images/love/love30.jpg' },
			{ src: 'images/love/love31.jpg' },
			{ src: 'images/love/love32.jpg' },
			{ src: 'images/love/love33.jpg' },
			{ src: 'images/love/love34.jpg' },
			{ src: 'images/love/love35.jpg' },
			{ src: 'images/love/love36.jpg' },
			{ src: 'images/love/love37.jpg' },
			{ src: 'images/love/love38.jpg' },
			{ src: 'images/love/love39.jpg' },
			{ src: 'images/love/love40.jpg' },
			{ src: 'images/love/love41.jpg' },
			{ src: 'images/love/love42.jpg' },
			{ src: 'images/love/love43.jpg' },
			{ src: 'images/love/love44.jpg' },
			{ src: 'images/love/love45.jpg' },
			{ src: 'images/love/love46.jpg' },
			{ src: 'images/love/love47.jpg' },
			{ src: 'images/love/love48.jpg' },
			{ src: 'images/love/love49.jpg' },
			{ src: 'images/love/love50.jpg' },
			{ src: 'images/love/love51.jpg' },
			{ src: 'images/love/love52.jpg' }
        ],
		animation: 'random',
        transition: [ 'fade','blur','flash', ]
    });
  });

   /* Back top
  -----------------------------------------------*/
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
        $('.go-top').fadeIn(200);
        } else {
          $('.go-top').fadeOut(200);
        }
        });   
        // Animate the scroll to top
      $('.go-top').click(function(event) {
        event.preventDefault();
      $('html, body').animate({scrollTop: 0}, 300);
      })
      

  /* wow
  -------------------------------*/
  new WOW({ mobile: false }).init();

  });

