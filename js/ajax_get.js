var url_root = 'http://192.168.7.102/services/listpersonas.php';

$(document).ready(function() {
	function listado() {
    $.ajax({
      url: url_root,
      type: 'get',
      success: function(response) {
        var user = response;
        return user
        //Hay que llamar a una funcion que cree las celdas, itere con cada dato para llenar las tablas
        
      },
      error: function(response){
        console.log("error");
      }
    });
    
	};
	