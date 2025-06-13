(function () {
  if (localStorage.getItem("linaWidgetClosed") === "true") return;

  const widget = document.createElement("div");
  widget.id = "lina-widget";
  widget.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 200px;
    user-select: none;
    z-index: 9999;
  `;

  widget.innerHTML = `
    <div id="close-widget" style="
      position: absolute;
      top: -10px;
      right: -10px;
      background: #ff4d4d;
      color: white;
      width: 24px;
      height: 24px;
      line-height: 24px;
      text-align: center;
      border-radius: 50%;
      font-weight: bold;
      cursor: pointer;
      box-shadow: 0 0 5px rgba(0,0,0,0.3);
    ">×</div>

    <img class="base" src="https://nagashud.github.io/lina-widget/assets/Lina.png" style="width: 100%; display: block;" />
    <img class="lips lip-open" src="https://nagashud.github.io/lina-widget/assets/Lina_levre_bas.png" style="
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      pointer-events: none;
      animation: lip-sync 1s infinite ease-in-out;
    "/>
    <img class="lips lip-open" src="https://nagashud.github.io/lina-widget/assets/Lina_levre_haut.png" style="
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      pointer-events: none;
      animation: lip-sync 1s infinite ease-in-out;
    "/>
  `;

  document.body.appendChild(widget);

  document.getElementById("close-widget").addEventListener("click", function () {
    localStorage.setItem("linaWidgetClosed", "true");
    widget.remove();
  });

  const style = document.createElement("style");
  style.textContent = `
    @keyframes lip-sync {
      0%, 40%, 60%, 100% { opacity: 0; }
      50% { opacity: 1; }
    }
  `;
  document.head.appendChild(style);
})();
