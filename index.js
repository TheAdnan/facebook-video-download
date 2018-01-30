browser.browserAction.onClicked.addListener(function(tab){
	var executing = browser.tabs.executeScript({
	  file: "downloader.js"
	});
	executing.then(dl, onError);
});


function dl(result) {
  var downloading = browser.downloads.download({
      url : result[0] + "",
      saveAs : true
    });
    downloading.then(null, onError);
}

function onError(error) {
  return false;
}


