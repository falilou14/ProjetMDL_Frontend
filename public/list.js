var page = 1;
var number = 10;




function generateTabClient(){
    
 var clients = "";

 


 $.get("http://localhost:3001/api/customers",{ "page":  page,"number": number}, function(data){
    data.result.forEach(user => {

    var client= `<tr>
    <th scope = "row" > `+ user.id + `</th>
    <td>`+ user.first +" "+ user.last + `</td>
    <td>`+ user.company + `</td>
    <td>`+ user.country + `</td>
    <td>` + user.email + `</td>
    <td>` + user.created_at + `</td>
    
    </tr>`;

    clients = clients + client;


        
    });
    $("#listeClients").html(clients);
 })

}

generateTabClient();