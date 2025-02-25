chrome.commands.onCommand.addListener(async command => {
  let tabs = await chrome.tabs.query({ active: !0, currentWindow: !0 });
  let tabLen = tabs.length;
  if (tabLen) {
    let tab = tabs[0];
    let { id, pinned } = tab;
    command == "1"
      ? pinned
        ? chrome.tabs.query({ currentWindow: !0 }, t =>
            t.length == tabLen && chrome.windows.remove(tab.windowId)
          )
        : chrome.tabs.remove(id)
      : chrome.tabs.update(id, { pinned: !pinned });
  }
});