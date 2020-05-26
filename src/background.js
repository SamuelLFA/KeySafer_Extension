chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
  chrome.declarativeContent.onPageChanged.addRules([
    ruleRequestContentScript,
    ruleShowPageAction
  ])
});

const ruleShowPageAction = {
  conditions: [new chrome.declarativeContent.PageStateMatcher({
    pageUrl: {
      schemes: ['http', 'https']
    },
    css: ['input[name="email"]']
  })
  ],
  actions: [new chrome.declarativeContent.ShowPageAction()]
};

const ruleRequestContentScript = {
  conditions: [
    new chrome.declarativeContent.PageStateMatcher({
      pageUrl: {
        schemes: ['http', 'https']
      },
      css: ['input[name="email"]']
    })
  ],
  actions: [
    new chrome.declarativeContent.RequestContentScript({ js: ['src/script.js'] })
  ]
};