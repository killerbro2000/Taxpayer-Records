window.addEventListener("DOMContentLoaded", () => {
  const syncButton = document.querySelector("#syncButton");
  if (!syncButton) return console.warn("Sync button not found");

  syncButton.addEventListener("click", () => {
    const records = getRecordsToSync();
    syncRecords(records);
    console.log("✅ Records synced!");
  });
});

document.querySelector("#syncButton").addEventListener("click", () => {
});