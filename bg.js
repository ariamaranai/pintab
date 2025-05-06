chrome.commands.onCommand.addListener(command =>
  chrome.tabs.query({ active: !0, currentWindow: !0 }, tabs => {
    if (tabs.length) {
      let { id, pinned } = tabs[0];
      command == "1"
        ? pinned
          ? chrome.tabs.query({ currentWindow: !0 }, t => {
              if (t.length == 1) {
                let f = () => chrome.tabs.onActivated.removeListener(f);
                chrome.tabs.onActivated.hasListeners(f)
                  ? chrome.windows.remove(t[0].windowId)
                  : chrome.tabs.onActivated.addListener(f);
              }
            })
          : chrome.tabs.remove(id).catch(() => 0)
        : chrome.tabs.update(id, { pinned: !pinned });
    }
  })
);