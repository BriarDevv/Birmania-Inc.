type SurfaceTheme = "light" | "dark";

type SurfaceConfig = {
  selector: string;
  theme: SurfaceTheme;
};

const surfaceConfigs: SurfaceConfig[] = [
  { selector: ".hero", theme: "light" },
  { selector: ".sectors", theme: "dark" },
  { selector: ".brand", theme: "light" },
  { selector: ".metrics", theme: "dark" },
  { selector: ".cta", theme: "light" },
  { selector: ".phero", theme: "dark" },
  { selector: ".filters", theme: "light" },
  { selector: ".cat-section", theme: "light" },
  { selector: ".grid-view", theme: "light" },
  { selector: ".pcta", theme: "light" },
  { selector: ".footer", theme: "dark" },
];

const LIGHT_CLASS = "whatsapp-float--on-light";
const DARK_CLASS = "whatsapp-float--on-dark";

const pointIsInsideRect = (x: number, y: number, rect: DOMRect) =>
  x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;

export const initWhatsAppFloatTheme = (): void => {
  const whatsappFloat = document.getElementById("whatsapp-float");

  if (!whatsappFloat) return;

  const surfaces = surfaceConfigs
    .map(({ selector, theme }) => {
      const element = document.querySelector<HTMLElement>(selector);
      return element ? { element, theme } : null;
    })
    .filter((surface): surface is { element: HTMLElement; theme: SurfaceTheme } => surface !== null);

  const applyTheme = (theme: SurfaceTheme) => {
    whatsappFloat.classList.toggle(LIGHT_CLASS, theme === "light");
    whatsappFloat.classList.toggle(DARK_CLASS, theme === "dark");
  };

  const resolveThemeAtPoint = (x: number, y: number): SurfaceTheme => {
    for (const surface of surfaces) {
      const rect = surface.element.getBoundingClientRect();

      if (pointIsInsideRect(x, y, rect)) {
        return surface.theme;
      }
    }

    let fallbackTheme: SurfaceTheme = "light";

    for (const surface of surfaces) {
      const rect = surface.element.getBoundingClientRect();

      if (rect.top <= y) {
        fallbackTheme = surface.theme;
      }
    }

    return fallbackTheme;
  };

  let frameId = 0;

  const updateTheme = () => {
    frameId = 0;

    const rect = whatsappFloat.getBoundingClientRect();
    const sampleX = rect.left + rect.width / 2;
    const sampleY = rect.top + rect.height / 2;
    const theme = resolveThemeAtPoint(sampleX, sampleY);

    applyTheme(theme);
  };

  const requestUpdate = () => {
    if (frameId) return;
    frameId = window.requestAnimationFrame(updateTheme);
  };

  requestUpdate();
  window.addEventListener("load", requestUpdate);
  window.addEventListener("resize", requestUpdate);
  window.addEventListener("scroll", requestUpdate, { passive: true });
};
