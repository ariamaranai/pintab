chrome.commands.onCommand.addListener(command =>
  chrome.tabs.query({ active: !0, currentWindow: !0 }, tabs => {
    let tabLen = tabs.length;
    if (tabLen) {
      let tab = tabs[0];
      let { id, pinned } = tab;
      command == "1"
        ? pinned
          ? chrome.tabs.query({ currentWindow: !0 }, t =>
              t.length == tabLen && chrome.windows.remove(tab.windowId).catch(() => 0)
            )
          : chrome.tabs.remove(id).catch(() => 0)
        : chrome.tabs.update(id, { pinned: !pinned });
    } else
      chrome.windows.getLastFocused({ windowTypes: ["devtools"] }, window =>
        window && chrome.windows.update(window.id, {
          state: "minimized"
        })
      );
  })
);