import { useCallback, useDeferredValue, useEffect, useState } from "react";
import Switch from "react-switch";
import Icons from "./icons";
import { useTranslation } from "react-i18next";
import { cn } from "~/lib/utils";
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { useWindowSize } from "react-use";

function Introduction() {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();
  const locale = searchParams.get("locale") || "en";
  const theme = searchParams.get("theme") || "light";
  const [darkThemeToggle, setDarkThemeToggle] = useState<boolean>(
    theme === "dark",
  );
  const deferredDarkThemeToggle = useDeferredValue(darkThemeToggle);
  const { i18n } = useTranslation();
  const { height } = useWindowSize();

  const onThemeToggleChange = useCallback(() => {
    if (deferredDarkThemeToggle) {
      document.documentElement.classList.remove("dark");
      navigate({
        search: `?${new URLSearchParams({ locale, theme: "light" })}`,
        hash: location.hash,
      });
    } else {
      document.documentElement.classList.add("dark");
      navigate({
        search: `?${new URLSearchParams({ locale, theme: "dark" })}`,
        hash: location.hash,
      });
    }
    setDarkThemeToggle(!deferredDarkThemeToggle);
  }, [deferredDarkThemeToggle, locale, location.hash, navigate]);

  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [i18n, locale]);

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [theme]);

  return (
    <section id="introduction">
      <div
        style={{ height: height }}
        className={`grid grid-rows-[1fr_auto] bg-cyan-400 bg-grid-black/[0.2] dark:bg-slate-800 dark:bg-grid-white/[0.2]`}
      >
        <div
          style={{ height: height }}
          className="pointer-events-none absolute inset-0 z-[1] flex items-center justify-center bg-cyan-400 [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)] dark:bg-black"
        />
        <div className="z-[2] flex w-full flex-col items-center justify-center pt-[80px]">
          <Icons.headerIcon
            // height={150}
            // width={150}
            className="h-[150px] w-[150px] dark:fill-white xl:h-[175px] xl:w-[175px] 2xl:h-[200px] 2xl:w-[200px]"
          />
          <h1>
            <TypeAnimation
              className="text-3xl"
              sequence={["Hoang Minh Giap"]}
              speed={40}
              cursor={false}
              wrapper={"p"}
            />
          </h1>
          <h2 className="">
            <TypeAnimation
              className="font-raleway font-light"
              sequence={[
                "FRONT-END DEVELOPER",
                1500,
                "WEB DEVELOPER",
                1500,
                "SOFTWARE ENGINEER",
                1500,
              ]}
              speed={50}
              repeat={Infinity}
              wrapper={"p"}
            />
          </h2>
          <Switch
            checked={darkThemeToggle}
            onChange={onThemeToggleChange}
            offColor="#155e75"
            onColor="#353535"
            className="react-switch mx-auto mt-3"
            width={90}
            height={40}
            uncheckedIcon={false}
            uncheckedHandleIcon={
              <Icons.iconify
                icon="noto-v1:sun-with-face"
                className="ml-[6px] flex h-[100%] items-center justify-center text-[25px]"
              />
            }
            checkedIcon={false}
            checkedHandleIcon={
              <Icons.iconify
                icon="noto-v1:owl"
                className="ml-[6px] flex h-[100%] items-center justify-center text-[25px]"
              />
            }
            id="icon-switch"
          />
        </div>
        <div className="relative z-[2] mb-auto flex flex-row justify-center gap-x-8 pb-2">
          <Link
            to={{
              search: `?${new URLSearchParams({ locale: "en", theme })}`,
              hash: location.hash,
            }}
          >
            <Icons.iconify
              className={cn(
                "h-[60px] w-[60px] cursor-pointer 2xl:h-[80px] 2xl:w-[80px]",
                i18n.language === "en" ? "" : "brightness-[0.4]",
              )}
              icon="twemoji:flag-united-states"
              // width={60}
              // height={60}
              // onClick={() => i18n.changeLanguage("en")}
            />
          </Link>
          <Link
            to={{
              search: `${new URLSearchParams({ locale: "vn", theme })}`,
              hash: location.hash,
            }}
          >
            <Icons.iconify
              className={cn(
                "h-[60px] w-[60px] cursor-pointer 2xl:h-[80px] 2xl:w-[80px]",
                i18n.language === "vn" ? "" : "brightness-[0.4]",
              )}
              icon="twemoji:flag-vietnam"
              // width={60}
              // height={60}
              // onClick={() => i18n.changeLanguage("vn")}
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Introduction;
