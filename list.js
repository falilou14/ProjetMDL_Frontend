function generateTabClient(){
    
 var clients = "";
 


 $.get("http://localhost:3001/api/customers",{ "page":  3,"number":30},function(data){
    data.result.array.forEach(user => {

    var client= `<tr>
    <td></td>
    <th scope = "row" > `+ user.id + `</th>
    <td>`+ user.first +" "+ user.last + `</td>
    <td>`+ user.company + `</td>
    <td>`+ user.country + `</td>
    <td>` + user.email + `</td>
    <td>` + user.creer_le + `</td>
    
    </tr>`;

    clients = clients + client;


        
    });
    $("#listeClients").html(clients);
 })

}

generateTabClient();