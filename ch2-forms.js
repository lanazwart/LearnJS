$(function() {

	$('#user-form').submit(function(evt) {
		evt.preventDefault();
		
		//$(this).hide();
		
		var inputs = $('input[name], select[name]', this);
		for (var i = 0; i < inputs.length; i++)
		{
			var tmp = $(inputs[i]).val();
			console.log(tmp);
		}
		
		//could use this in future to post to server
		//var post_data = $(this).serialize();
		//console.log(post_data);
		
	});

});
