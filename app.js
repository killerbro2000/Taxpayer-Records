window.onload = function () {
  console.log("🚀 App is running!");

  const syncButton = document.querySelector("#syncButton");
  if (!syncButton) return console.warn("Sync button not found");

  syncButton.addEventListener("click", () => {
    const records = getRecordsToSync(); // Your logic to fetch records
    syncRecords(records); // Push to Firebase
    console.log("✅ Records synced!");
  });

  // Add other event listeners here (e.g. save button, tab navigation)
};

function syncRecords(records) {
  records.forEach(record => {
    const recordId = record.id; // No auto-generation
    if (!recordId) return console.warn("No record ID", record);

    firebase.database().ref("records/" + recordId).set(record)
      .then(() => console.log(`✅ Synced record ${recordId}`))
      .catch(error => console.error(`❌ Error syncing ${recordId}`, error));
  });
}
