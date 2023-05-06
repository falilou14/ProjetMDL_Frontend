var url = new URL ("https/localhost:3001/api/addcustomers");
$(document).on("submit", "#addCustomersForm", function(event){
    

    event.preventDefault();



    // recuperer les données du formulaire 

    var first =document.getElementById("first").value;
    var last = document.getElementById("last").value;
    var email = document.getElementById("email").value;
    var company = document.getElementById("company").value;
    var country = document.getElementById("country").value;

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