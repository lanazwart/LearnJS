$(function() {

	$('#user-form').submit(function(evt) {
		evt.preventDefault();
		
		//$(this).hide();
		
		var inputs = $('input[name], select[name]', this);
		for (var i = 0; i < inputs.length; i++)
		{
			console.log(inputs[i].val());
		}
		
		//could use this in future to post to server
		//var post_data = $(this).serialize();
		//console.log(post_data);
		
	});

});
