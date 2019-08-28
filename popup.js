// var user;
// function choose(choice){
//     user = choice;
// }

// function test(click){
//     alert("You chossed " + user);
// }
// key = AIzaSyCTzJlSXkG6MhYu1n7otsK9WcxkVTIs9_c;
// var nameValue = document.getElementById("content").value;
var title = '';
var url = '';
var dataSend;
var googleDoc;
var edit;
var websiteName;

//document.getElementById("button1").onclick = webName;








//dataSend = document.getElementById("nameDocument").value;
document.getElementById('button').onclick = function() {
  console.log("clicked");
  dataSend = document.getElementById("nameDocument").value;
  console.log(dataSend);
  alert('button clicked');
  alert(dataSend);
  if(document.getElementById("radio4").checked == true)
  {
    googleDoc= true;
    alert(googleDoc);
  }else{
    googleDoc= false;
    alert(googleDoc);
  }
  if(document.getElementById("radio6").checked == true)
  {
    edit= true;
    alert(edit);
  }else{
    edit = false;
    alert(edit);
  }

  chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},
    function(tabs){
      
      websiteName = tabs[0].url;
      alert(websiteName);
    }
  );

// document.addEventListener("DOMContentLoaded", function (){
    // Send a message to the active tab
    //console.log("hello");
    
    chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
      url = tabs[0].url;
      title = tabs[0].title;
      
  
    
    
    });
    
  
    
    const request = new XMLHttpRequest();
    request.open('POST', 'https://app.dbmms.io/links'); // Per earlier message
    request.setRequestHeader('content-type', 'application/json');
  
    request.onreadystatechange = () => { // Call a function when the state changes.
      if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
      // Replace with a signal to the user
        console.log('Request succeeded, response: ', request.response)
      } else {
        console.log("failed")
      }
    }
    const postdata = JSON.stringify({
      title: dataSend, 
      url: websiteName
    }); //Replace with your object
    request.send(postdata); // Nothing happens until this is called.
        
  }