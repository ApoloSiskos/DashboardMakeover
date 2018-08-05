  var platform_data = json_data.rows;
  var facebook_element = document.getElementById("facebook");
  var youtube_element = document.getElementById("youtube");
  var twitter_element = document.getElementById("twitter");
  var instagram_element = document.getElementById("instagram");
  var snapchat_element = document.getElementById("snapchat");
  var programmatic_element = document.getElementById("programmatic");
  var search_element = document.getElementById("search");
 
 
  function onlyUnique(value, index, self) {
      return self.indexOf(value) === index;
  }
  function formatNumber (num) {
      return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
  }
  var platforms = [];
  for (var i in platform_data) {
      if (platform_data[i][0] != null){
          platforms[i] = platform_data[i][0].toLowerCase();
      }
  }
 
  var unique_platforms = platforms.filter( onlyUnique );
 
  var target_width = 100/(unique_platforms.length-2);
  var width_str=target_width+"%";
 
  facebook_element.classList.add("hidden");
  youtube_element.classList.add("hidden");
  twitter_element.classList.add("hidden");
  programmatic_element.classList.add("hidden");
  instagram_element.classList.add("hidden");
  snapchat_element.classList.add("hidden");
  search_element.classList.add("hidden");
  
 
  var total_spend = 0;
  var total_budget = 0;
  var budget_numbers = [];
  var spend_numbers = [];
  var facebook_spend_total = 0;
  var facebook_budget_total = 0;
  var instagram_spend_total = 0;
  var instagram_budget_total = 0;
  var youtube_spend_total = 0;
  var youtube_budget_total = 0;
  var twitter_spend_total = 0;
  var twitter_budget_total = 0;
  var snapchat_spend_total = 0;
  var snapchat_budget_total = 0;
  var programmatic_spend_total = 0;
  var programmatic_budget_total = 0;
  var search_spend_total = 0;
  var search_budget_total = 0;
 
  for (var i in unique_platforms) {
          var platform_name = unique_platforms[i];
 
 
      for (var x in platform_data){
          if(platform_data[x][0] == platform_name &&  platform_data[x][0] != null){
                  switch(platform_data[x][0]) {
                      case "facebook & instagram":
                      // Spend
                      facebook_spend_total = facebook_spend_total + platform_data[x][4];
                      // Budget
                      facebook_budget_total = facebook_budget_total + platform_data[x][3];
                      break;
                      case "facebook":
                      // Spend
                      facebook_spend_total = facebook_spend_total + platform_data[x][4];
                      // Budget
                      facebook_budget_total = facebook_budget_total + platform_data[x][5];
                      break;
                      case "instagram":
                      // Spend
                      instagram_spend_total = instagram_spend_total + platform_data[x][4];
                      // Budget
                      instagram_budget_total = instagram_budget_total + platform_data[x][6];
                      break;
                      case "youtube":
                      // Spend
                      youtube_spend_total = youtube_spend_total + platform_data[x][4];
                      // Budget
                      youtube_budget_total = youtube_budget_total + platform_data[x][7];
                      break;
                      case "twitter":
                      // Spend
                      twitter_spend_total = twitter_spend_total + platform_data[x][4];
                      // Budget
                      twitter_budget_total = twitter_budget_total + platform_data[x][8];
                      break;
                      case "programmatic":
                      // Spend
                      programmatic_spend_total = programmatic_spend_total + platform_data[x][4];
                      // Budget
                      programmatic_budget_total = programmatic_budget_total + platform_data[x][3];
                      break;
                      case "search":
                      // Spend
                      search_spend_total = search_spend_total + platform_data[x][4];
                      // Budget
                      search_budget_total = search_budget_total + platform_data[x][11];
                      break;
                      case "snapchat":
                      // Spend
                      snapchat_spend_total = snapchat_spend_total + platform_data[x][4];
                      // Budget
                      snapchat_budget_total = snapchat_budget_total + platform_data[x][10];
                      break;
                      default:
                      doNothing = "";
                  }
          }
          else{
              spend_numbers = platform_data[x];
              budget_numbers = platform_data[x];
          } 
          total_spend = facebook_spend_total + instagram_spend_total + youtube_spend_total + programmatic_spend_total + snapchat_spend_total + search_spend_total;
          total_budget = facebook_budget_total + instagram_budget_total + youtube_budget_total + programmatic_budget_total + snapchat_budget_total + search_budget_total;
      }
  }
 
 
 
if (budget_numbers.length == 0) {budget_numbers = platform_data[0];}
var fl_budget = 0;
var curr_flag_bud = '';
var lement_budget_name = '';
for (var i in platform_data){  
    switch(platform_data[i]) {
          		    case "facebook":
                  element_budget_name = "facebook_budget";
                  fl_budget = parseFloat(budget_numbers[i]).toFixed(0);
                  curr_flag_bud = currency+formatNumber(fl_budget);
                  document.getElementById(element_budget_name).innerHTML = curr_flag_bud;
                  break;
                  case "instagram":
                  element_budget_name = "instagram_budget";
                  fl_budget = parseFloat(budget_numbers[i]).toFixed(0);
                  curr_flag_bud = currency +formatNumber(fl_budget);
                  console.log('instagram_budget');
                  document.getElementById(element_budget_name).innerHTML = curr_flag_bud;
                  break;   
          		  case "youtube":
                  element_budget_name = "youtube_budget";
                  fl_budget = parseFloat(budget_numbers[i]).toFixed(0);
                  curr_flag_bud = currency+formatNumber(fl_budget);
                  document.getElementById(element_budget_name).innerHTML = curr_flag_bud;
                  break;
           		  case "twitter":
                  element_budget_name = "twitter_budget";
                  fl_budget = parseFloat(budget_numbers[i]).toFixed(0);
                  curr_flag_bud = currency+formatNumber(fl_budget);
                  document.getElementById(element_budget_name).innerHTML = curr_flag_bud;
                  break;
                  case "programmatic":
                  element_budget_name = "programmatic_budget";
                  fl_budget = parseFloat(budget_numbers[i]).toFixed(0);
                  curr_flag_bud = currency +formatNumber(fl_budget);
                  document.getElementById(element_budget_name).innerHTML = curr_flag_bud;
                  break;  
                  case "search":
                  element_budget_name = "search_budget";
                  fl_budget = parseFloat(budget_numbers[i]).toFixed(0);
                  curr_flag_bud = currency +formatNumber(fl_budget);
                  document.getElementById(element_budget_name).innerHTML = curr_flag_bud;
                  break;
                  case "snapchat":
                  element_budget_name = "snapchat_budget";
                  fl_budget = parseFloat(budget_numbers[i]).toFixed(0);
                  curr_flag_bud = currency +formatNumber(fl_budget);
                  document.getElementById(element_budget_name).innerHTML = curr_flag_bud;
                  break; 
                  default:
       } 
  }
   
 
 
 
  var statBox = Array.from(document.querySelectorAll('.infobox'));
 
  var element_id;
   
  var parentBoxlist = Array.from(document.querySelectorAll('.parentbox'));
 
 
  statBox.forEach(function(box) {
      switch(unique_platforms.length) {
          		  case 1:
                  // 1 box
                  element_id = box.getAttribute('id');
                  if (unique_platforms.includes(element_id)){
                      box.classList.add('infobox1'); 
                      box.classList.remove('hidden');
                  }
                  break;
                  case 2:
                  // 2 box's
                  element_id = box.getAttribute('id');
                  if (unique_platforms.includes(element_id)){
                      box.classList.add('infobox2'); 
                      box.classList.remove('hidden');
                  }
                  break;
                  case 3:
                  // 3 box's
                   element_id = box.getAttribute('id');
                  if (unique_platforms.includes(element_id)){
                      box.classList.add('infobox3'); 
                      box.classList.remove('hidden');
                  }
                  break;  
                  case 4:
                  // 4 box's
                   element_id = box.getAttribute('id');
                  if (unique_platforms.includes(element_id)){
                      box.classList.add('infobox4'); 
                      box.classList.remove('hidden');
                  }
                  break;
                  case 5:
                  // 5 box's
                  element_id = box.getAttribute('id');
                  if (unique_platforms.includes(element_id)){
                      box.classList.add('infobox5'); 
                      box.classList.remove('hidden');
                  } 
                  break;
                  case 6:
                  // 6 box's
                  element_id = box.getAttribute('id');
                  if (unique_platforms.includes(element_id)){
                      box.classList.add('infobox6'); 
                      box.classList.remove('hidden');
                  } 
                  break;
                  default:
              }
          });
 
 
  var x = document.querySelectorAll("span.metric_name");
  for (z = 0; z < x.length; z++)
  {
   x[z].innerHTML = platform_data[0][1];
     
  }  
 
 
    if (platform_data[0][2] == "EUR") 
    {
        currency = "&euro;";
    }
    else if (platform_data[0][2] == "GBP") 
    {
        currency = "&pound;";
    }   
    else if (platform_data[0][2] == "USD") 
    {
        currency = "&dollar;";
    }
 
 
  var facebook_spend_string = currency + formatNumber(Number(facebook_spend_total).toFixed(0));
  document.getElementById("facebook_spend").innerHTML = facebook_spend_string;
  var instagram_spend_string = currency + formatNumber(Number(instagram_spend_total).toFixed(0));
  document.getElementById("instagram_spend").innerHTML = instagram_spend_string;
  var youtube_spend_string = currency + formatNumber(Number(youtube_spend_total).toFixed(0));
  document.getElementById("youtube_spend").innerHTML = youtube_spend_string;
  var twitter_spend_string = currency + formatNumber(Number(twitter_spend_total).toFixed(0));
  document.getElementById("twitter_spend").innerHTML = twitter_spend_string;
  var snapchat_spend_string = currency + formatNumber(Number(snapchat_spend_total).toFixed(0));
  document.getElementById("snapchat_spend").innerHTML = snapchat_spend_string;
  var search_spend_string = currency + formatNumber(Number(search_spend_total).toFixed(0));
  document.getElementById("search_spend").innerHTML = search_spend_string;
  var programmatic_spend_string = currency + formatNumber(Number(programmatic_spend_total).toFixed(0));
  document.getElementById("programmatic_spend").innerHTML = programmatic_spend_string;
 
 
 
  var facebook_budget_string = currency + formatNumber(Number(facebook_budget_total).toFixed(0));
  document.getElementById("facebook_budget").innerHTML = facebook_budget_string;
  var instagram_budget_string = currency + formatNumber(Number(instagram_budget_total).toFixed(0));
  document.getElementById("instagram_budget").innerHTML = instagram_budget_string;
  var youtube_budget_string = currency + formatNumber(Number(youtube_budget_total).toFixed(0));
  document.getElementById("youtube_budget").innerHTML = youtube_budget_string;
  var twitter_budget_string = currency + formatNumber(Number(twitter_budget_total).toFixed(0));
  document.getElementById("twitter_budget").innerHTML = twitter_budget_string;
  var snapchat_budget_string = currency + formatNumber(Number(snapchat_budget_total).toFixed(0));
  document.getElementById("snapchat_budget").innerHTML = snapchat_budget_string;
  var search_budget_string = currency + formatNumber(Number(search_budget_total).toFixed(0));
  document.getElementById("search_budget").innerHTML = search_budget_string;  
  var programmatic_budget_string = currency + formatNumber(Number(programmatic_budget_total).toFixed(0));
  document.getElementById("programmatic_budget").innerHTML = programmatic_budget_string;

 
 
