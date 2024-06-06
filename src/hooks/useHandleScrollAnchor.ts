import { useCallback } from "react";

export function useHandleScrollAnchor() {
  const handleScrollAnchor = useCallback((href: string) => {
    const id = href.substring(href.indexOf("#") + 1);
    const anchorDOM = document.getElementById(id);
    if (anchorDOM) {
      const yOffset = -80;
      const y =
        anchorDOM.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }, []);

  return handleScrollAnchor;
}
