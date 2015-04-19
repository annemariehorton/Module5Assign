function MenuChoice()
{
    if (document.getElementById("menu").value =="Show Section 1")
    {
        document.getElementById("section1").style.visibility = "visible";
        document.getElementById("section2").style.visibility = "hidden";
        document.getElementById("section3").style.visibility = "hidden";
    }
    else if (document.getElementById("menu").value == "Show Section 2")
    {
        document.getElementById("section1").style.visibility = "hidden";
        document.getElementById("section2").style.visibility = "visible";
        document.getElementById("section3").style.visibility = "hidden";
    }
    else if (document.getElementById("menu").value == "Show Section 3")
    {
        document.getElementById("section1").style.visibility = "hidden";
        document.getElementById("section2").style.visibility = "hidden";
        document.getElementById("section3").style.visibility = "visible";
    }
    else
    {
        document.getElementById("section1").style.visibility = "hidden";
        document.getElementById("section2").style.visibility = "hidden";
        document.getElementById("section3").style.visibility = "hidden";
    }
}

function GetAllCustomers()
{
 var objAllresults = new XMLHttpRequest(); 

 var weburl = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/getAllCustomers";

objAllresults.onreadystatechange = function()
 {
 if (objAllresults.readyState == 4 && objAllresults.status == 200)
 {
 var allcustomers = JSON.parse(objAllresults.responseText);
 GenerateCustomers(allcustomers);
 }
 }
 objAllresults.open("GET", weburl, true);
  objAllresults.send();
}
function GenerateCustomers(allcustomers)
{
 var total = 0;
 var displaycustomers = "<table><tr><th>Customer ID</th><th>Customer Name</th><th>City</th></tr>";

 for (total = 0; total < allcustomers.GetAllCustomersResult.length; total++)
 {
 displaycustomers += "<tr><td>" + allcustomers.GetAllCustomersResult[total].CustomerID + "</td><td>" +
 allcustomers.GetAllCustomersResult[total].CompanyName + "</td><td>" + allcustomers.GetAllCustomersResult[total].City + "</td></tr>";
 }
    
 displaycustomers += "</table>";
 document.getElementById("allcustomerdisplay").innerHTML = displaycustomers;
}

function GetOrderHistory()
{
 var objQuery = new XMLHttpRequest(); 

 var link = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/getCustomerOrderHistory/";
 link += document.getElementById("customerid").value;

 objQuery.onreadystatechange = function()
 {
 if (objQuery.readyState == 4 && objQuery.status == 200)
 {
 var customeroutput = JSON.parse(objQuery.responseText);
 GenerateHistory(customeroutput);
 }
 }
 objQuery.open("GET", link, true);
 objQuery.send();
}
function GenerateHistory(order)
{
 var ordercount = 0;
 var displayhistory = "<table><tr><th>Product Name</th><th>Quantity Ordered</th></tr>";

 for (ordercount = 0; ordercount < order.length; ordercount++)
 {
 displayhistory += "<tr><td>" + order[ordercount].ProductName + "</td><td>" + order[ordercount].Total + "</td></tr>";
 }
    
 displayhistory += "</table>";
 document.getElementById("orderhistorydisplay").innerHTML = displayhistory;
}



function GetOrders()
{
 var objRequest = new XMLHttpRequest(); 

 var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/getOrdersForCustomer/";
 url += document.getElementById("custid").value;

 objRequest.onreadystatechange = function()
 {
 if (objRequest.readyState == 4 && objRequest.status == 200)
 {
 var output = JSON.parse(objRequest.responseText);
 GenerateResults(output);
 }
 }
 objRequest.open("GET", url, true);
 objRequest.send();
}
function GenerateResults(result)
{
var count = 0;
 var displaytext = "<table><tr><th>Order Date</th><th>Order ID</th><th>Ship Address</th><th>Ship City</th><th>Ship Name</th><th>Ship Post Code</th><th>Shipped Date</th></tr>";

 for (count = 0; count < result.GetOrdersForCustomerResult.length; count++)
 {
 displaytext += "<tr><td>" + result.GetOrdersForCustomerResult[count].OrderDate + "</td><td>" + result.GetOrdersForCustomerResult[count].OrderID +  "</td><td>" + result.GetOrdersForCustomerResult[count].ShipAddress
 + "</td><td>" + result.GetOrdersForCustomerResult[count].ShipCity + 
 "</td><td>" + result.GetOrdersForCustomerResult[count].ShipName + "</td><td>" + result.GetOrdersForCustomerResult[count].ShipPostCode + "</td><td>" +
result.GetOrdersForCustomerResult[count].ShippedDate + "</td></tr>";
 }
    
 displaytext += "</table>";
 document.getElementById("orderdisplay").innerHTML = displaytext;
}
