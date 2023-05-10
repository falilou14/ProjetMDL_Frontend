var page = 1;
var number = 10;
var premierpage= 1;


function incrementPage() {
   page++;
   generateTabClient();
}

function decrementPage() {
   if (page > 1) {
      page--;
      generateTabClient();
   }
}
function dernierpage()
{
   page=totpages;
   generateTabClient();
}

function premierpage()
{
   page= 2;
   generateTabClient();
}

function getNumber(){
   var choosenNumber = document.getElementById("number");
   var valueNumber = choosenNumber.options[choosenNumber.selectedIndex].value;
   number = valueNumber;
   generateTabClient();
   
}



function generateTabClient() {

   var clients = "";




   $.get("http://localhost:3001/api/customers", { "page": page, "number": number }, function (data) {
      
      data.result.forEach(user => {

         var client = `<tr>
    <th scope = "row" > `+ user.id + `</th>
    <td>`+ user.first + " " + user.last + `</td>
    <td>`+ user.company + `</td>
    <td>`+ user.country + `</td>
    <td>` + user.email + `</td>
    <td>` + user.created_at + `</td>
    
    </tr>`;

         clients = clients + client;

         totpages=data.totalPages;

      });
      $("#listeClients").html(clients);
   })

}

generateTabClient();

