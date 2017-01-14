function call_api (route){
  var url = config.api_base + route;
  $( "#endpoint" ).html (url);
  $( "#response" ).html ('');
  $.ajax({
      url: url,
      data: {
         format: 'json'
      },
      error: function() {
         $('#response').html('<p>An error has occurred</p>');
      },
      success: function(data) {
         $( "#response" ).html (JSON.stringify(data, undefined, 2));

         console.log (data);
      },
      type: 'GET'
   });
}
