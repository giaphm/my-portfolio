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
        className={`grid grid-rows-[1fr_auto] bg-grid-black/[0.2] dark:bg-grid-white/[0.2] bg-cyan-400 dark:bg-slate-800`}
      >
        <div
          style={{ height: height }}
          className="absolute z-[1] pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-cyan-400 [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"
        />
        <div className="z-[2] pt-[80px] flex flex-col justify-center items-center w-full">
          <Icons.headerIcon
            // height={150}
            // width={150}
            className="dark:fill-white w-[150px] h-[150px] 2xl:w-[175px] 2xl:h-[175px]"
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
                className="h-[100%] text-[25px] flex justify-center items-center ml-[6px]"
              />
            }
            checkedIcon={false}
            checkedHandleIcon={
              <Icons.iconify
                icon="noto-v1:owl"
                className="h-[100%] text-[25px] flex justify-center items-center ml-[6px]"
              />
            }
            id="icon-switch"
          />
        </div>
        <div className="z-[2] flex flex-row justify-center mb-auto gap-x-8 pb-2 relative">
          <Link
            to={{
              search: `?${new URLSearchParams({ locale: "en", theme })}`,
              hash: location.hash,
            }}
          >
            <Icons.iconify
              className={cn(
                "cursor-pointer w-[60px] h-[60px] 2xl:w-[80px] 2xl:h-[80px]",
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
                "cursor-pointer w-[60px] h-[60px] 2xl:w-[80px] 2xl:h-[80px]",
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
