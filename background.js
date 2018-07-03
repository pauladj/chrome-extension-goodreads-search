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
