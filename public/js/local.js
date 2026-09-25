(() => {
  try {
    const mode = localStorage.getItem("theme-mode");
    if (mode === "light" || mode === "dark") {
      document.documentElement.setAttribute("theme-mode", mode);
    }
  } catch (_) {
    // Storage may be unavailable in privacy mode; keep the default theme.
  }
  const root = document.documentElement;
  const themeColor = document.querySelector('meta[name="theme-color"]');
  const syncThemeColor = () => {
    themeColor.setAttribute(
      "content",
      root.getAttribute("theme-mode") === "dark" ? "#141414" : "#ffffff",
    );
  };
  syncThemeColor();
  new MutationObserver(syncThemeColor).observe(root, {
    attributes: true,
    attributeFilter: ["theme-mode"],
  });
})();
