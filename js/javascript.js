

$(document).ready(function(){
  var url_root = 'http://192.168.7.102/services/regpersonas.php';
  $("#bot").click(function(){
    $("input").each(function(){
      if ($(this).val().length == 0){
        alert("Rellene todos los campos")
        return false
      } else {
        return true
      };            
    });
    var user ={ datos: {
    "nombres": $("#nombres").val(),
    "apellidos": $("#apellidos").val(),
    "correo": $("#correo").val(),
    "cedula": $("#cedula").val(),
    "tel": $("#tel").val(),
    "dir": $("#dir").val(),
    }};
    // alert(user);
    newUser(user);
  });
  function newUser(user) {
    datos = user;
    $.ajax({
      url: url_root,
      type: 'post',
      data: user,

      success: function(response) {
        ("True").dialog({
          modal: true,
        });
      },
      error: function(response){
        ("False").dialog({
          modal: true,
        });
      }
    });
  }
    
});