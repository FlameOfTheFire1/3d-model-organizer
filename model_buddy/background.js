
chrome.downloads.onChanged.addListener((delta) => {
    if (delta.state && delta.state.current == 'complete') { //downloaded file is completed
        //get the download item associated with the delta object
        chrome.downloads.search({id: delta.id}, (results) => {
            if (results.length == 1){
                const itemExtension = results[0].filename.slice(downloadedItem.filename.lastIndexOf('.'))

                //single file case
                const modelExtensions = ['.3mf', '.obj', '.stl'];
                if (itemExtension in modelExtensions)
                    {
                        //prompt user for permission to send file to Model Scout app
                        //'3d printing model detected, send to Model Scout?'
                    }

                //zip file case
                if (itemExtension == '.zip')
                    {
                        //prompt user 'zip file may contain 3d model, send to Model Scout?'
                    }
            }
        })

    }
})

function sendToModelScout(file) {
    //to be implemented later - logic that sends the file to Model Scout App
}