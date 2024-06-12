import { useEffect, useState } from "react";
import { useWindowSize } from "react-use";

export function use100vh() {
  const { height } = useWindowSize();
  const [heightScreen, setHeightScreen] = useState(height);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setHeightScreen(window.innerHeight);
    });
  }, []);

  return heightScreen;
}
