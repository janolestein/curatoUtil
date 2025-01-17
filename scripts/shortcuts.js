document.addEventListener("keydown", async function (event) {
  if (event.key == "π") {
    const pBtnOverview = document.querySelector("[data-test='publishButton']");

    if (pBtnOverview != null) {
      pBtnOverview.click();
    }

    await new Promise((resolve) => setTimeout(resolve, 1000));
    const warningLabel = document.querySelector(
      "[data-test='warningSubtitle']",
    );
    if (warningLabel.innerHTML != "Keine Warnungen") {
      alert("Unpublizierte Artikel");
      return;
    }

    const clearAllBtn = document.querySelector(
      "[data-test='ApproveAllButton']",
    );

    if (clearAllBtn != null) {
      clearAllBtn.click();
    }

    await new Promise((resolve) => setTimeout(resolve, 2000));

    const pBtnAfter = document.querySelector("[data-test='submitButton']");

    if (pBtnAfter != null) {
      pBtnAfter.click();
    }
  }
});

