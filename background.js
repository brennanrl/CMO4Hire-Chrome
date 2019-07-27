var title = '';
var url = '';

chrome.browserAction.onClicked.addListener(function(tab) {
  // Send a message to the active tab
  //console.log("hello");
  
  chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    url = tabs[0].url;
    title = tabs[0].title;
    

  
  
  });
  console.log(url);
  console.log(title);


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
    title: title, 
    url: url
  }); //Replace with your object
  request.send(postdata); // Nothing happens until this is called.
      
});






// // Called when the user clicks on the browser action.
// chrome.browserAction.onClicked.addListener(function(tab) {
//   // Send a message to the active tab
//   chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//     var activeTab = tabs[0];
//     chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
//   });
// });

// chrome.runtime.onMessage.addListener(
//   function(request, sender, sendResponse) {
//     if( request.message === "open_new_tab" ) {
//       const request = new XMLHttpRequest();
//       request.open('POST', 'https://app.dbmms.io/links'); // Per earlier message
//       request.setRequestHeader('content-type', 'application/json');
//       request.onreadystatechange = () => { // Call a function when the state changes.
//         if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
//         // Replace with a signal to the user
//           console.log('Request succeeded, response: ', request.response)
//         }
//       }
//       const postdata = JSON.stringify({
//         title: request.title, 
//         url: request.url
//       }); //Replace with your object
//       request.send(postdata); // Nothing happens until this is called.
            
            
//     }
//   }
// );


