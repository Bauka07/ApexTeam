import { UI_STORAGE_KEY } from "@/store/uiStore.config";

const themeBootstrapCode = `
(function () {
  try {
    var persisted = window.localStorage.getItem("${UI_STORAGE_KEY}");
    var parsed = persisted ? JSON.parse(persisted) : null;
    var theme = parsed && parsed.state ? parsed.state.theme : "light";
    var isDark = theme === "dark";

    document.documentElement.classList.toggle("dark", isDark);
    document.documentElement.style.colorScheme = isDark ? "dark" : "light";
  } catch (_) {
    document.documentElement.classList.remove("dark");
    document.documentElement.style.colorScheme = "light";
  }
})();
`;

export function ThemeBootstrapScript() {
  return (
    <script
      dangerouslySetInnerHTML={{ __html: themeBootstrapCode }}
      suppressHydrationWarning
    />
  );
}
