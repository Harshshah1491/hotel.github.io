$(document).ready(function(){
    $("#submit").click(function(){
     var name = ("#name").value();
     var email = ("#email").value();
     var address = ("#address").value();
      
     if(name == "" || email == "" || address == "")
     {
         alert("plzz correct field");
     }
 })
})  