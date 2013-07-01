/* jQuery.Categories (https://github.com/Imdsm/jQuery.Categories)
 * Adam K Dean (Imdsm)
 * 01/07/2013 10:27
 */

 $(function() {

 	var $container = $('.items');

 	$container.isotope({
 		itemSelector: '.item'
 	});

	$('.categories li a').click(function() {
		var category = $(this).data('category');
		category = (category == '*') ? category : '.' + category;
		$container.isotope({ filter: category });

		$('.categories li a').parent().removeClass('selected');
		$(this).parent().addClass('selected');		
	});
		
 });