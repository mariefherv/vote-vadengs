
const poll = document.getElementById("poll")
const results = document.getElementById("poll")

poll.addEventListener("click", async() => {
  chrome.tabs.create({url: "http://poll-maker.com/frame4536266x43164086-142#https://nylonmanila.com/favorite-duo-of-2022-so-far-poll/"})
})
