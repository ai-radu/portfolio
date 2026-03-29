const buttonsMain = [
  "Button_Main_0",
  "Button_Main_1",
  "Button_Main_2",
  "Button_Main_3",
  "Button_Main_4",
  "Button_Main_5",
  "Button_Main_6",
];

function pMain(mainPage, activeId) {
  const mainFrame = document.getElementById("main-frame");

  if (!mainFrame) {
    return;
  }

  mainFrame.src = mainPage;

  buttonsMain.forEach((id) => {
    const btn = document.getElementById(id);
    if (btn) btn.disabled = false;
  });

  // Disable active button
  const activeBtn = document.getElementById(activeId);
  if (activeBtn) activeBtn.disabled = true;
}

window.addEventListener("DOMContentLoaded", () => {
  pMain("games.html", "Button_Main_0");
});
