chrome.commands.onCommand.addListener(command =>
  chrome.tabs.query({ active: !0, currentWindow: !0 }, tabs => {
    let tabLen = tabs.length;
    if (tabLen) {
      let tab = tabs[0];
      let { id, pinned } = tab;
      try {
        command == "1"
          ? pinned
            ? chrome.tabs.query({ currentWindow: !0 }, t => t.length == tabLen && chrome.windows.remove(tab.windowId))
            : chrome.tabs.remove(id)
          : chrome.tabs.update(id, { pinned: !pinned });
      } catch (e) {}
    }
  })
);