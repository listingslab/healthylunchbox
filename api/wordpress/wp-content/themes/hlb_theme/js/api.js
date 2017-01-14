function call_api (route){
  var url = config.api_base + route;
  $( "#endpoint" ).html ('<a href="' + url + '" target="_blank">' + url + '</a>');
  $( "#response" ).html ('');
  $.ajax({
      url: url,
      data: {
         format: 'json'
      },
      error: function(xhr, status, text) {
        var response = $.parseJSON(xhr.responseText);
        if (response) {
          $('#response').html(response.message);
        } else {
          $('#response').html('This would mean an invalid response from the server - maybe the site went down or whatever...');
        }
      },
      success: function(data) {
         $( "#response" ).html (JSON.stringify(data, undefined, 2));
      },
      type: 'GET'
   });
}
