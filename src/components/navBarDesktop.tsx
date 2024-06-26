import { useTranslation } from "react-i18next";
import styles from "./styles/navBar.module.css";
import { useHandleScrollAnchor } from "~/hooks/useHandleScrollAnchor";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import React from "react";

function NavBarDesktop() {
  const { t } = useTranslation();
  const handleScrollAnchor = useHandleScrollAnchor();
  const [searchParams] = useSearchParams();
  const locale = searchParams.get("locale") || "en";
  const theme = searchParams.get("theme") || "light";
  const location = useLocation();

  return (
    <React.Fragment>
      <nav
        className="fixed z-10 mx-auto flex w-full items-center justify-end bg-cyan-400/40 p-0 pb-0 pt-0 backdrop-blur-lg dark:bg-slate-800/40 md:p-6 md:pb-2 md:pt-4 xl:pb-4 xl:pt-8 2xl:pb-4 2xl:pt-10"
        aria-label="Global"
      >
        <a
          href="https://github.com/giaphm"
          target="_blank"
          className={`${styles["github-corner"]}`}
          aria-label="View source on GitHub"
        >
          <svg
            // width="72"
            // height="72"
            className="h-[58px] w-[58px] xl:h-[82px] xl:w-[82px] 2xl:h-[94px] 2xl:w-[94px]"
            viewBox="0 0 250 250"
            style={{
              fill: "#151513",
              color: "#fff",
              position: "absolute",
              top: 0,
              border: 0,
              left: 0,
              transform: "scale(-1, 1)",
              // zIndex: 9999,
              zIndex: 1,
            }}
            aria-hidden="true"
          >
            <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
            <path
              d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
              fill="currentColor"
              style={{ transformOrigin: "130px 106px" }}
              className={styles["octo-arm"]}
            ></path>
            <path
              d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
              fill="currentColor"
              className="octo-body"
            ></path>
          </svg>
        </a>

        <div className="hidden md:flex md:flex-row">
          <Link
            to={{
              hash: "",
              search: `${new URLSearchParams({ locale, theme })}`,
            }}
            className={`${location.key === "default" || location.hash === "" ? "after:w-full" : ""} ${styles["navBar-item"]} cursor-pointer px-4 py-1 font-raleway text-sm font-medium leading-6 text-gray-900 dark:text-white dark:after:bg-white 2xl:text-xl`}
            onClick={() => handleScrollAnchor("#introduction")}
          >
            {t("home.title")}
          </Link>
          <Link
            to={{
              hash: "aboutMe",
              search: `${new URLSearchParams({ locale, theme })}`,
            }}
            className={`${location.hash.includes("#aboutMe") && "after:w-full"} ${styles["navBar-item"]} cursor-pointer px-4 py-1 font-raleway text-sm font-medium leading-6 text-gray-900 dark:text-white dark:after:bg-white 2xl:text-xl`}
            onClick={() => handleScrollAnchor("#aboutMe")}
          >
            {t("aboutMe.title")}
          </Link>
          <Link
            to={`?${new URLSearchParams({ locale, theme })}#projects`}
            className={`${location.hash.includes("#projects") && "after:w-full"} ${styles["navBar-item"]} cursor-pointer px-4 py-1 font-raleway text-sm font-medium leading-6 text-gray-900 dark:text-white dark:after:bg-white 2xl:text-xl`}
            onClick={() => handleScrollAnchor("#projects")}
          >
            {t("projects.title")}
          </Link>
          <Link
            to={`?${new URLSearchParams({ locale, theme })}#skills`}
            className={`${location.hash.includes("#skills") && "after:w-full"} ${styles["navBar-item"]} cursor-pointer px-4 py-1 font-raleway text-sm font-medium leading-6 text-gray-900 dark:text-white dark:after:bg-white 2xl:text-xl`}
            onClick={() => handleScrollAnchor("#skills")}
          >
            {t("skills.title")}
          </Link>
          <Link
            to={`?${new URLSearchParams({ locale, theme })}#experiences`}
            className={`${location.hash.includes("#experiences") && "after:w-full"} ${styles["navBar-item"]} cursor-pointer px-4 py-1 font-raleway text-sm font-medium leading-6 text-gray-900 dark:text-white dark:after:bg-white 2xl:text-xl`}
            onClick={() => handleScrollAnchor("#experiences")}
          >
            {t("experiences.title")}
          </Link>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default NavBarDesktop;
