activationButton = getElementById("activation");

activationButton.addEventListener("click", function() {
    chrome.runtime.sendMessage({action: "toggleExtensionState"}, (response) => {
        if (response.status == "success"){
            activationButton.textContent = response.isExtensionEnabled ? "Disable" : "Enable";
        }
    })
  });


cleanUpButton = getElementById("cleanUp");

cleanUpButton.addEventListener("click", function() {
    chrome.runtime.sendMessage({action: "toggleCleanUp"}, (response) => {
        if (response.status == "success"){
            cleanUpButton.textContent = response.isCleanUpEnabled ? "Don't Clean Up Sent Files" : "Clean Up Sent Files";
        }
    })
});