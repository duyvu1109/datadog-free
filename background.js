chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    console.log(changeInfo)
    if (!!changeInfo && !!tab && changeInfo.status === 'complete' && !!tab.url && tab.url.startsWith('https://app.datadoghq.com')) {
        if (!!chrome.tabs.executeScript) {
            chrome.tabs.executeScript(tabId, { file: 'content.js' });
        }
    }
});
