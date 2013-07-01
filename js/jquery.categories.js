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

		/*$current_items = $('.masonry .item');
		$container.masonry('remove', $current_items);

		$new_items = $('.masonry ' + category);
		$container.append($new_items).masonry('appended', $new_items).masonry();*/
	});







/*	$container.masonry({
		columnWidth: 156,
		itemSelector: '.item',
		isAnimated: true
	})
	.imagesLoaded(function() {
		$container.masonry('reloadItems');		
	});

	$masonry_items = $('.masonry_items .item');
	$container.append($masonry_items).masonry('appended', $masonry_items).masonry();

	$('.categories li a').click(function() {
	 	var category = $(this).data('category');
	 	category = (category == '*') ? category : '.' + category;
	 	
	 	$current_items = $('.masonry .item');
	 	$container.masonry('remove', $current_items);

	 	$new_items = $('.masonry ' + category);
	 	$container.append($new_items).masonry('appended', $new_items).masonry();
	 });
	*/
 });