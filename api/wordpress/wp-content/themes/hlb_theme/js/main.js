$(document).ready(function () {
	try {
		config = {};
		config.api_base = 'http://localhost/wp-json/hlbapi/';

		$('#call_endpoints li a').click(function() {
			call_api ($(this).attr('data-val'));
			return false;
		});

		call_api ('');
	} catch (err){
		console.log ('Ready Error \n\n ' + err);
	}
});
