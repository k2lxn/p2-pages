/* * * ON READY * * */
$(document).ready(function(){
	var src = "";
 	$('.bookmark-img').hover(
 		function(){
 			src = $(this).attr('src');
 			var back = src.replace(/1(?=\.)/, '2');
 			$(this).attr('src',back);
 		},
 		function(){
 			$(this).attr('src',src);
 		}
 	);
});