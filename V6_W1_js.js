var platform_data = json_data.rows;
  
/////////////////////////////////////////////////////
//Datorama query must be
  //Plan Total Budget, Spend, Comm Total Budget + Comm Heading, Comm Brand Logo, Comm Start Date, Comm End Date, METRIC TEMP NAME, IO Rate Currency
  
/////////////////////////////////////////////////////  
//Campaign name parsing 
campaign_name = platform_data[0][0]  

/////////////////////////////////////////////////////  
//Product logo parsing 
product_logo = platform_data[0][1];

/////////////////////////////////////////////////////  
//Budget parsing   
budget = platform_data[1][6].toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  
/////////////////////////////////////////////////////  
//Spend parsing   
pacing = platform_data[1][7].toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
/*
var pacing = 0;
for (var i in platform_data)
{
	if(platform_data[i][0] = "null")
  {
  	pacing += platform_data[i][7];
  }
}
*/
  
/////////////////////////////////////////////////////  
//Metric label parsing   
metric_name = platform_data[1][4];  
  
/////////////////////////////////////////////////////  
//Format of the month
var month = new Array();
month[0] = "Jan";
month[1] = "Feb";
month[2] = "Mar";
month[3] = "Apr";
month[4] = "May";
month[5] = "Jun";
month[6] = "Jul";
month[7] = "Aug";
month[8] = "Sep";
month[9] = "Oct";
month[10] = "Nov";
month[11] = "Dec";

//Final format of the Start Date
var startDate = new Date(platform_data[0][2]);
var dd = startDate.getDate();

var mm = startDate.getMonth()+1; 
var yyyy = startDate.getFullYear();
if(dd<10) 
{
    dd='0'+dd;
} 

var mm = month[startDate.getMonth()];
startDate = dd+' '+mm+' '+yyyy;

//Final format of the End Date
var endDate = new Date(platform_data[0][3]);
var dd = endDate.getDate();

var mm = endDate.getMonth()+1; 
var yyyy = endDate.getFullYear();
if(dd<10) 
{
    dd='0'+dd;
} 

var mm = month[endDate.getMonth()];
endDate = dd+' '+mm+' '+yyyy;

/////////////////////////////////////////////////////
//Currency Parsing
if (platform_data[1][5] == "EUR") 
{
	currency = "&euro;";
}
else if (platform_data[1][5] == "GBP") 
{
	currency = "&pound;";
}   
else if (platform_data[1][5] == "USD") 
{
	currency = "&dollar;";
}  


/////////////////////////////////////////////////////
//Assign values to specific divs (ids)
document.getElementById("Comm_Heading").innerHTML = campaign_name;
document.getElementById("productLogo").src= product_logo;
document.getElementById("Start_Date").innerHTML = startDate;
document.getElementById("End_Date").innerHTML = endDate;
document.getElementById("total_budget").innerHTML = currency + budget;
document.getElementById("total_pacing").innerHTML = currency + pacing;
document.getElementById("metric_name").innerHTML = metric_name;  
