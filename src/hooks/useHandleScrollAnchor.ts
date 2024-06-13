import { useCallback } from "react";

export function useHandleScrollAnchor() {
  const handleScrollAnchor = useCallback((href: string) => {
    const id = href.substring(href.indexOf("#") + 1);
    const anchorDOM = document.getElementById(id);
    if (anchorDOM) {
      setTimeout(() => {
        anchorDOM.scrollIntoView(true);
        window.scrollBy({ top: -80, left: 0, behavior: "smooth" });
      }, 100);
    }
  }, []);

  return handleScrollAnchor;
}
