chrome.commands.onCommand.addListener(command =>
  chrome.tabs.query({ active: !0, currentWindow: !0 }, tabs => {
    if (tabs.length) {
      let { id, pinned } = tabs[0];
      command == "1"
        ? pinned || chrome.tabs.remove(id)
        : chrome.tabs.update(id, { pinned: !pinned });
    }
  })
);