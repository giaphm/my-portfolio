import { CSSProperties, ReactNode, Suspense, useRef } from "react";
import { useFirstViewportEntry } from "~/hooks/useFirstViewportEntry";

type RenderOnViewportEntryType = {
  children?: ReactNode;
  threshold: number;
  root?: any;
  rootMargin?: string;
  style?: CSSProperties;
};

export const RenderOnViewportEntry = ({
  children,
  threshold = 0,
  root = null,
  rootMargin = "0px 0px 0px 0px",
  ...wrapperDivProps
}: RenderOnViewportEntryType) => {
  const ref = useRef(null);
  const entered = useFirstViewportEntry(ref, { threshold, root, rootMargin });

  return (
    <div {...wrapperDivProps} ref={ref}>
      {entered && <Suspense fallback={"loading..."}>{children}</Suspense>}
    </div>
  );
};
