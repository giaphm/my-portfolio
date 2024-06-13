// This awesome custom hook is referenced from: https://medium.com/@pal.amittras/lazy-loading-react-components-on-page-scroll-using-intersection-observer-api-hook-and-wrapper-1a81e4cf1325

import { MutableRefObject, useEffect, useRef, useState } from "react";

// Don't need any additional libraries/packages
export function useFirstViewportEntry(
  ref: MutableRefObject<HTMLElement | null>,
  observerOptions: IntersectionObserverInit | undefined,
) {
  const [entered, setEntered] = useState<boolean>(false);
  const observer = useRef(
    new IntersectionObserver(([entry]) => {
      console.log("entry.isIntersecting", entry.isIntersecting);
      setEntered(entry.isIntersecting);
    }, observerOptions),
  );

  useEffect(() => {
    const element = ref.current;
    const ob = observer.current;

    if (entered) {
      ob.disconnect();
      return;
    }

    if (element && !entered) {
      ob.observe(element);
    }

    return () => ob.disconnect();
  }, [entered, ref]);

  return entered;
}
