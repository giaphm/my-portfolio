import { useCallback, useDeferredValue, useState } from "react";
import Switch from "react-switch";
import Typical from "react-typical";
import Icons from "./icons";
import { useTranslation } from "react-i18next";
import { cn } from "~/lib/utils";

function Introduction() {
  const [darkThemeToggle, setDarkThemeToggle] = useState<boolean>(false);
  const deferredDarkThemeToggle = useDeferredValue(darkThemeToggle);
  const { i18n } = useTranslation();

  const onThemeToggleChange = useCallback(() => {
    if (deferredDarkThemeToggle) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
    setDarkThemeToggle(!deferredDarkThemeToggle);
  }, [deferredDarkThemeToggle]);

  return (
    <section id="introduction">
      <div className="h-screen grid grid-rows-[1fr_auto]">
        <div className="pt-[80px] flex flex-col justify-center items-center w-full bg-cyan-400 dark:bg-slate-800">
          <Icons.headerIcon
            // height={150}
            // width={150}
            className="dark:fill-white w-[150px] h-[150px] 2xl:w-[175px] 2xl:h-[175px]"
          />
          <h1 className="2xl:text-5xl">
            <Typical steps={["Hoang Minh Giap"]} wrapper="p" />
          </h1>
          <h2 className="font-raleway font-light h-12 w-full text-center 2xl:text-3xl">
            <Typical
              steps={[
                "FRONT-END DEVELOPER",
                1500,
                "WEB DEVELOPER",
                1500,
                "SOFTWARE ENGINEER",
                1500,
              ]}
              wrapper="p"
              loop={Infinity}
            />
          </h2>
          <Switch
            checked={darkThemeToggle}
            onChange={onThemeToggleChange}
            offColor="#155e75"
            onColor="#353535"
            className="react-switch mx-auto"
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
        <div className="flex flex-row justify-center mb-auto bg-cyan-400 dark:bg-slate-800 gap-x-8 pb-2">
          <Icons.iconify
            className={cn(
              "cursor-pointer w-[60px] h-[60px] 2xl:w-[80px] 2xl:h-[80px]",
              i18n.language === "en" ? "brightness-[0.4]" : "",
            )}
            icon="twemoji:flag-united-states"
            // width={60}
            // height={60}
            onClick={() => i18n.changeLanguage("en")}
          />
          <Icons.iconify
            className={cn(
              "cursor-pointer w-[60px] h-[60px] 2xl:w-[80px] 2xl:h-[80px]",
              i18n.language === "vn" ? "brightness-[0.4]" : "",
            )}
            icon="twemoji:flag-vietnam"
            // width={60}
            // height={60}
            onClick={() => i18n.changeLanguage("vn")}
          />
        </div>
      </div>
    </section>
  );
}

export default Introduction;
