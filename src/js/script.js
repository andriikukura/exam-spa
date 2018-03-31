//=require jquery.min.js

// to inlude plugins add "=" sign below
//=require bootstrap.min.js
//=require slick.min.js 
//=require isotope.pkgd.min.js
//=require parallax.min.js

;(function($){

	$(document).ready(function(){
	

			var $gallery = $('.gallery-grid').isotope({
				// set itemSelector so .grid-sizer is not used in layout
				itemSelector: '.gallery__item',
				percentPosition: true,
				masonry: {
				  // use element for option
				  columnWidth: '.gallery__sizer'
				}
			  });
			  
				$('.gallery__filter').on('click', 'a', function(evt){
				  evt.preventDefault();
				  var filterValue = $(this).data('filter');
			  
				  $gallery.isotope({filter: filterValue});
				  $(this).addClass('active').siblings().removeClass('active');
				});

	});

	$('.parallax').parallax({imageSrc: '../img/paralax.jpg'});

})(jQuery);

