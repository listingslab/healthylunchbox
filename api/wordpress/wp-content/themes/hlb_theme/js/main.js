$(document).ready(function () {
	try {
		config = {};
		config.url_vars = get_url_vars();
		config.api_base = 'http://localhost/wp-json/hlbapi/';

		if (config.url_vars.route){
			call_api (config.url_vars.route);
		}else{
			call_api ('hello');
		}

		//$('#call_endpoints li a').click(function() {
		//	call_api ($(this).attr('data-val'));
		//	return false;
		//});

	} catch (err){
		console.log ('Ready Error \n\n ' + err);
	}
});
