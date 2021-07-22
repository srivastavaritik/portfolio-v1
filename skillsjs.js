$(function(){

	$('.skills-list').find('li span').each(function(){

		$(this).css('width',$(this).data('skill-level')+"%");

	})

});