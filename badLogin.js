document.getElementById('newAccountButton1').onclick = function() {
    var URLNewAccount = "https://app.dbmms.io/pricing";
    chrome.tabs.create({ url: URLNewAccount });
}