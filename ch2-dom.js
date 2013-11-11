$(function() {

	$('#comment-form').submit(function(evt) {
		evt.preventDefault();
		var comment = $('textarea[name=comment]').val();
		$('#comment-container').prepend('<div class="general">' + comment + '</div>');
		$('#comment-container div:first-child').addClass('highlight');
		
		setTimeout(function() {
			var el = $('#comment-container div.highlight');
			$(el[0]).removeClass('highlight');
		}, 2000)
	});
	
	
	
	

});
