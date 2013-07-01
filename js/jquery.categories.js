/* jQuery.Categories (https://github.com/Imdsm/jQuery.Categories)
 * Adam K Dean (Imdsm)
 * 01/07/2013 10:27
 */

 $(function() {

 	var $container = $('.items');

 	// we use imagesLoaded here so that all images are downloaded 
 	// before isotope makes any width/height calculations.
 	$container.imagesLoaded( function(){
	 	$container.isotope({
	 		itemSelector: '.item'
	 	});
	});

	$('.categories li a').click(function() {
		var category = $(this).data('category');
		category = (category == '*') ? category : '.' + category;
		$container.isotope({ filter: category });

		$('.categories li a').parent().removeClass('selected');
		$(this).parent().addClass('selected');		
	});
 });