chrome.download.onDeterminingFilename.addListener((downloadedItem, suggest) =>{
    const validModelExtensions = ['.3mf', '.stl'];

    const itemExtension = downloadedItem.filename.slice(downloadedItem.filename.lastIndexOf('.'));

    if('.zip' == itemExtension){
        //zip file, need to determine if relevant . . .
    }
    if(validModelExtensions){
        //intercept download and send to Model Scout
    }
})