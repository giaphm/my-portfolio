import { motion, useCycle } from "framer-motion";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import styles from "./styles/navBar.module.css";
import { useHandleScrollAnchor } from "~/hooks/useHandleScrollAnchor";
import { MenuToggle } from "./menuToggle";
import { useTranslation } from "react-i18next";
import { useCallback } from "react";

export function NavBarMobile() {
  const { t } = useTranslation();
  const handleScrollAnchor = useHandleScrollAnchor();
  const [searchParams] = useSearchParams();
  const locale = searchParams.get("locale") || "en";
  const theme = searchParams.get("theme") || "light";
  const [isOpenMenuBar, toggleOpenMenuBar] = useCycle(false, true);
  const location = useLocation();

  const handleNavigationMobile = useCallback(
    (anchorHashName: string) => {
      handleScrollAnchor(anchorHashName);
      toggleOpenMenuBar();
      return;
    },
    [handleScrollAnchor, toggleOpenMenuBar],
  );

  return (
    <motion.nav
      className="fixed bottom-0 right-0 top-0 z-[10] md:hidden"
      initial={false}
      animate={isOpenMenuBar ? "open" : "closed"}
      variants={{
        open: {
          width: "100%",
        },
        close: {
          width: "0%",
        },
      }}
    >
      <motion.div
        className={`absolute inset-0 backdrop-blur-md`}
        variants={{
          open: {
            display: "block",
          },
          closed: {
            display: "none",
          },
        }}
        onClick={() => toggleOpenMenuBar()}
      />
      <motion.div
        className="absolute bottom-0 right-0 top-0 z-[1] w-[150px] border bg-white"
        variants={{
          open: (height = 1000) => ({
            clipPath: `circle(${height * 2 + 200}px at 116px 40px)`,
            transition: {
              type: "spring",
              stiffness: 20,
              restDelta: 2,
            },
          }),
          closed: {
            clipPath: "circle(23px at 116px 40px)",
            transition: {
              type: "spring",
              stiffness: 400,
              damping: 40,
            },
          },
        }}
      />
      <motion.ul
        className={`relative ml-[calc(100%_-_130px)] mt-[30%] space-y-5`}
        variants={{
          open: {
            transition: { staggerChildren: 0.07, delayChildren: 0.2 },
          },
          closed: {
            transition: { staggerChildren: 0.05, staggerDirection: -1 },
          },
        }}
      >
        <motion.li
          className="relative z-[2] max-w-fit"
          variants={{
            open: {
              y: 0,
              opacity: 1,
              transition: {
                y: { stiffness: 1000, velocity: -100 },
              },
            },
            closed: {
              y: 50,
              opacity: 0,
              transition: {
                y: { stiffness: 1000 },
              },
            },
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            to={{
              hash: "",
              search: `${new URLSearchParams({ locale, theme })}`,
            }}
            className={`${location.key === "default" || location.hash === "" ? "after:w-full" : ""} ${styles["navBar-item"]} cursor-pointer text-left font-raleway text-sm font-medium leading-6 text-gray-900 dark:after:bg-white 2xl:text-xl`}
            onClick={() => handleNavigationMobile("#introduction")}
          >
            {t("home.title")}
          </Link>
        </motion.li>
        <motion.li
          className="relative z-[2] max-w-fit"
          variants={{
            open: {
              y: 0,
              opacity: 1,
              transition: {
                y: { stiffness: 1000, velocity: -100 },
              },
            },
            closed: {
              y: 50,
              opacity: 0,
              transition: {
                y: { stiffness: 1000 },
              },
            },
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            to={{
              hash: "aboutMe",
              search: `${new URLSearchParams({ locale, theme })}`,
            }}
            className={`${location.hash.includes("#aboutMe") && "after:w-full"} ${styles["navBar-item"]} cursor-pointer font-raleway text-sm font-medium leading-6 text-gray-900 dark:after:bg-white 2xl:text-xl`}
            onClick={() => handleNavigationMobile("#aboutMe")}
          >
            {t("aboutMe.title")}
          </Link>
        </motion.li>
        <motion.li
          className="relative z-[2] max-w-fit"
          variants={{
            open: {
              y: 0,
              opacity: 1,
              transition: {
                y: { stiffness: 1000, velocity: -100 },
              },
            },
            closed: {
              y: 50,
              opacity: 0,
              transition: {
                y: { stiffness: 1000 },
              },
            },
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            to={`?${new URLSearchParams({ locale, theme })}#projects`}
            className={`${location.hash.includes("#projects") && "after:w-full"} ${styles["navBar-item"]} cursor-pointer font-raleway text-sm font-medium leading-6 text-gray-900 dark:after:bg-white 2xl:text-xl`}
            onClick={() => handleNavigationMobile("#projects")}
          >
            {t("projects.title")}
          </Link>
        </motion.li>
        <motion.li
          className="relative z-[2] max-w-fit"
          variants={{
            open: {
              y: 0,
              opacity: 1,
              transition: {
                y: { stiffness: 1000, velocity: -100 },
              },
            },
            closed: {
              y: 50,
              opacity: 0,
              transition: {
                y: { stiffness: 1000 },
              },
            },
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            to={`?${new URLSearchParams({ locale, theme })}#skills`}
            className={`${location.hash.includes("#skills") && "after:w-full"} ${styles["navBar-item"]} cursor-pointer font-raleway text-sm font-medium leading-6 text-gray-900 dark:after:bg-white 2xl:text-xl`}
            onClick={() => handleNavigationMobile("#skills")}
          >
            {t("skills.title")}
          </Link>
        </motion.li>
        <motion.li
          className="relative z-[2] max-w-fit"
          variants={{
            open: {
              y: 0,
              opacity: 1,
              transition: {
                y: { stiffness: 1000, velocity: -100 },
              },
            },
            closed: {
              y: 50,
              opacity: 0,
              transition: {
                y: { stiffness: 1000 },
              },
            },
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            to={`?${new URLSearchParams({ locale, theme })}#experiences`}
            className={`${location.hash.includes("#experiences") && "after:w-full"} ${styles["navBar-item"]} cursor-pointer font-raleway text-sm font-medium leading-6 text-gray-900 dark:after:bg-white 2xl:text-xl`}
            onClick={() => handleNavigationMobile("#experiences")}
          >
            {t("experiences.title")}
          </Link>
        </motion.li>
      </motion.ul>
      <motion.div className="absolute right-[22px] top-[29px] z-[2]">
        <MenuToggle toggle={() => toggleOpenMenuBar()} />
      </motion.div>
    </motion.nav>
  );
}
