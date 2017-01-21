function get_url_vars() {
	try {
	    var vars = {};
	    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
	        vars[key] = value;
	    });
	    return vars;
    }catch (err){
		concole.log ( '_get_url_vars\n\n'+err);
	}
}
function get_this_url (){
	try {
		this_url = window.location.href;
		return this_url;
	}catch (err){
		concole.log ( '_get_this_url\n\n'+err);
	}
}
