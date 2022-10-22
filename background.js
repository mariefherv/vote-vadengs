chrome.tabs.onActivated.addListener((tab) => {
  chrome.tabs.get(tab.tabId, (currentTab) => {
    if(currentTab.url === "http://poll-maker.com/frame4536266x43164086-142#https://nylonmanila.com/favorite-duo-of-2022-so-far-poll/" || currentTab.pendingUrl ==="http://poll-maker.com/frame4536266x43164086-142#https://nylonmanila.com/favorite-duo-of-2022-so-far-poll/") {
      chrome.scripting.executeScript({
        target: {tabId: currentTab.id, allFrames: true},
        files:[ "scripts/content-script.js"],
      });
    }
  })
})

chrome.tabs.onCreated.addListener(() => {
  chrome.tabs.query({}).then(
    function(tabs) {
    
    var openerId;
    for (const tab of tabs) {
      if(tab.url === "http://poll-maker.com/frame4536266x43164086-142#https://nylonmanila.com/favorite-duo-of-2022-so-far-poll/" || tab.pendingUrl === "http://poll-maker.com/frame4536266x43164086-142#https://nylonmanila.com/favorite-duo-of-2022-so-far-poll/"){
        openerId = tab.id
        chrome.scripting.executeScript({
            target: {tabId: tab.id, allFrames: true},
            files:[ "scripts/content-script.js"],
          });
      }
      
      if(tab.openerTabId === openerId && tab.openerTabId !== undefined || tab.pendingUrl === "http://poll-maker.com/results4536266x43164086-142?src=emb" || tab.url === "http://poll-maker.com/results4536266x43164086-142?src=emb" || tab.url === "https://poll-maker.com/results4536266x43164086-142?src=emb#tab-1"){
        setInterval(() => {
          chrome.tabs.remove(tab.id)
        }, 3000)
      }
    }
    }, 
    function onError(err){
      console.error(`Error: ${err}`)
    })
  })

chrome.tabs.onRemoved.addListener((tab) => {
  chrome.tabs.query({}).then(
    function(tabs) {
    for (const tab of tabs) {
      if(tab.url === "http://poll-maker.com/frame4536266x43164086-142#https://nylonmanila.com/favorite-duo-of-2022-so-far-poll/" || tab.url === "https://nylonmanila.com/favorite-duo-of-2022-so-far-poll/"){
          chrome.tabs.reload(tab.id)
        }
      }
    }, 
    function onError(err){
      console.error(`Error: ${err}`)
    })
})

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  chrome.tabs.query({}).then(
    function(tabs){
      for (const tab of tabs) {
        if((tab.url === "http://poll-maker.com/frame4536266x43164086-142#https://nylonmanila.com/favorite-duo-of-2022-so-far-poll/" || tab.url === "https://nylonmanila.com/favorite-duo-of-2022-so-far-poll/") && changeInfo.url === undefined){
      chrome.scripting.executeScript({
        target: {tabId: tabId, allFrames: true},
        files:[ "scripts/content-script.js"],
      })}}
      },
      function onError(err){
        console.log(`Error:{err}`)
    })
})


