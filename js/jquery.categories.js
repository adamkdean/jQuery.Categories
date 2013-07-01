/* jQuery.Categories (https://github.com/Imdsm/jQuery.Categories)
 * Adam K Dean (Imdsm)
 * 01/07/2013 10:27
 */

 $('.categories li a').click(function() {  	
 	var category = $(this).data('category');
 	category = (category == '*') ? category : '.' + category;
	$('.items div').hide();
 	$('.items ' + category).show();
 });