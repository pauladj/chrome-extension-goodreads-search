/*
*
* Cuando se selecciona un texto y boton derecho
*
*/
function getword(info,activeTab) {
  //console.log("Word " + info.selectionText + " was clicked.");
  var selectedText = info.selectionText
  selectedText = selectedText.replace(/ /g,"+");
  chrome.tabs.create({  
    url: "https://www.goodreads.com/search?q=" + selectedText,
  });           
}
chrome.contextMenus.create({
  title: "Goodreads Search", 
  contexts:["selection"], 
  onclick: getword,
});

/*
*
* Cuando se clicka en el icono
*
*/
chrome.browserAction.onClicked.addListener(function(activeTab){
  alert("hey");
  var myElement = document.getElementById("region-main-box").text;
  alert(myElement);
  var pageTitle = activeTab.title;
  bookTitle = pageTitle.split("Amazon.com:")[1].split("Kindle Store")[0];
  var newURL = "https://www.goodreads.com/search?q=" + bookTitle;
  chrome.tabs.create({ url: newURL });
});