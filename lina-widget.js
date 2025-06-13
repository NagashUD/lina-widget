(function () {
  if (window.linaWidgetLoaded) return;
  window.linaWidgetLoaded = true;

  const alreadyClosed = localStorage.getItem("linaWidgetClosed");
  if (alreadyClosed === "true") return;

  const style = document.createElement("style");
  style.textContent = `
    #lina-widget-container {
      position: fixed;
      bottom: 20px;
      right: 20px;
      width: 120px;
      z-index: 9999;
      transition: opacity 0.3s ease;
    }

    #lina-widget {
      width: 100%;
      animation: idle-float 3s ease-in-out infinite;
    }

    #lina-widget-close {
      position: absolute;
      top: -10px;
      right: -10px;
      background: #000000cc;
      color: white;
      border: none;
      border-radius: 50%;
      width: 20px;
      height: 20px;
      font-size: 14px;
      cursor: pointer;
      line-height: 20px;
      text-align: center;
    }

    @keyframes idle-float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-5px); }
    }
  `;

  const container = document.createElement("div");
  container.id = "lina-widget-container";

  const closeButton = document.createElement("button");
  closeButton.id = "lina-widget-close";
  closeButton.textContent = "×";
  closeButton.onclick = () => {
    localStorage.setItem("linaWidgetClosed", "true");
    container.remove();
  };

  const avatar = document.createElement("img");
  avatar.id = "lina-widget";
  avatar.src = "avatar.png"; // 🔁 Mets ici ton lien vers l'image

  container.appendChild(closeButton);
  container.appendChild(avatar);

  document.head.appendChild(style);
  document.body.appendChild(container);
})();
