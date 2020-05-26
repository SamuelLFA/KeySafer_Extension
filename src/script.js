async function startMain () {
  const src = chrome.runtime.getURL("src/main.js");
  const contentMain = await import(src);
  contentMain.start();
};

startMain();