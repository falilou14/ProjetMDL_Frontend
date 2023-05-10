
document.addEventListener("DOMContentLoaded",function(){


var urlMod =new URL("http://localhost:3001/api/modclient");

var url = new URL ("http://localhost:3001/api/addclient");

var urlRemove = new URL ("http://localhost:3001/api/delClient");



$(document).on("submit", "#ajoutClient", function(event){
    

  event.preventDefault();



    // recuperer les données du formulaire 

   // $('#nom').val();

    var first =$("#first").val();
    var last = $("#last").val();
    var email = $("#email").val();
    var company = $("#company").val();
    var country = $("#country").val();

    // vérification 
    console.log(first,last,email,company,country);


    // création du client

    var client = {
        "id":null,
        "email": email,
        "first": first,
        "last" : last,
        "company": company,
        "created_at" : null,
        "country": country,
    };

    // vérification 
    console.log("client" , client);

    createClient(client);


});

function createClient(client){
    $.ajax({
        url : url,
        method : "POST",
        contentType : "application/json",
        data : JSON.stringify(client),

        success: function(){
            $("#alert-message").attr('class','alert alert-success');
            $("alert-message").html("client ajouté");

        },

        error: function(xhr){
            $("#alert-message").attr('class','alert alert-danger');
            $("alert-message").html(xhr.responseText);
        }
    });



    
}

$(document).on("submit", "#modifClient", function(event){
    

    event.preventDefault();
  
  
  
      // recuperer les données du formulaire 
  
     // $('#nom').val();
        var id=$("#id").val();
      var first =$("#first").val();
      var last = $("#last").val();
      var email = $("#email").val();
      var company = $("#company").val();
      var country = $("#country").val();
  
      // vérification 
      console.log(id,first,last,email,company,country);
  
  
      // création du client
  
      var client = {
          "id":id,
          "email": email,
          "first": first,
          "last" : last,
          "company": company,
          "created_at" : null,
          "country": country,
      };
  
      // vérification 
      console.log("client" , client);
  
      modClient(client);
  
  
  });


function modClient(client){
    $.ajax({
        url : urlMod,
        method : "POST",
        contentType : "application/json",
        data : JSON.stringify(client),

        success: function(){
            $("#alert-message").attr('class','alert alert-success');
            $("alert-message").html("client ajouté");

        },

        error: function(xhr){
            $("#alert-message").attr('class','alert alert-danger');
            $("alert-message").html(xhr.responseText);
        }
    });



    
}

$(document).on("submit", "#removeClient", function(event){
    

    event.preventDefault();
  
  
  
      // recuperer les données du formulaire 
  
     // $('#nom').val();
        var id=$("#id").val();
      
  
      // vérification 
      
  
      // création du client
  
      var client = {
          "id":id,
          
      };
  
      // vérification 
      console.log("client" , client);
  
      removeClient(client);
  
  
  });


function removeClient(client){
    $.ajax({
        url : urlRemove,
        method : "POST",
        contentType : "application/json",
        data : JSON.stringify(client),

        success: function(){
            $("#alert-message").attr('class','alert alert-success');
            $("alert-message").html("client ajouté");

        },

        error: function(xhr){
            $("#alert-message").attr('class','alert alert-danger');
            $("alert-message").html(xhr.responseText);
        }
    });
}




})