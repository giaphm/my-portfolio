import { useTranslation } from "react-i18next";
import Icons from "./icons";
import { useHandleScrollAnchor } from "~/hooks/useHandleScrollAnchor";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { RenderOnViewportEntry } from "./renderOnViewportEntry";

function AboutMeBody() {
  const { t } = useTranslation();

  return (
    <RenderOnViewportEntry threshold={0.25} style={{ minHeight: "240px" }}>
      <motion.div
        initial={"init"}
        whileInView={"inView"}
        variants={{
          init: { opacity: 0, scale: 0.8 },
          show: {
            opacity: 1,
            transition: {
              ease: "linear",
              duration: 0.5,
            },
          },
          inView: {
            opacity: 1,
            scale: 1,
            transition: {
              ease: "linear",
              duration: 0.5,
            },
          },
        }}
      >
        <div className="flex flex-col gap-y-5 md:flex-row">
          <div className="basis-full md:basis-4/12">
            <div className="dark:border border-slate-800 mt-[50px] mx-auto md:mx-[35px] lg:mx-auto mb-[30px] px-[15px] py-[30px] text-center w-[230px] shadow-[0_4px_6px_rgba(0,0,0,.3)]">
              <img src="./avatar.jpg" />
              <div className="flex flex-row mt-[15px] justify-center gap-x-4">
                <Icons.iconify icon="logos:react" width="42" height="42" />
                <Icons.iconify icon="devicon:nodejs" width="42" height="42" />
                <Icons.iconify
                  icon="logos:docker-icon"
                  width="42"
                  height="42"
                />
              </div>
            </div>
          </div>
          <div className="basis-full md:basis-8/12">
            <div className="card border mt-2 md:mt-20 mx-5 md:mx-2 flex-col w-auto md:w-[90%]">
              <div className="cardHeader flex flex-row h-[31px] items-center gap-x-2 pl-[15px] bg-black/[0.03] border-b">
                <Icons.iconify
                  icon="twemoji:red-circle"
                  width="10"
                  height="10"
                />
                <Icons.iconify
                  icon="twemoji:yellow-circle"
                  width="10"
                  height="10"
                />
                <Icons.iconify
                  icon="twemoji:green-circle"
                  width="10"
                  height="10"
                />
              </div>
              <div className="cardBody text-left p-5">
                <p className="text-base md:text-lg font-serif font-light sm:text-xs 2xl:text-lg">
                  {t("aboutMe.hi")} :)
                </p>
                <br />
                <p className="text-sm 2xl:text-lg font-light font-serif leading-8">
                  {t("aboutMe.description")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </RenderOnViewportEntry>
  );
}

export default function AboutMe() {
  const { t } = useTranslation();
  const handleScrollAnchor = useHandleScrollAnchor();

  return (
    <section id="aboutMe" className="pb-12 dark:bg-[#1F1F1F]">
      <h2 className="pt-12 text-center font-light">
        <div className="flex flex-row justify-center items-center gap-x-2 group">
          <div className="relative">
            <Link
              to={"#aboutMe"}
              className="cursor-pointer font-open-sans 2xl:text-4xl"
              onClick={() => handleScrollAnchor("#aboutMe")}
            >
              {t("aboutMe.title").toLocaleUpperCase()}
            </Link>
            <Link
              to={"#aboutMe"}
              className="absolute left-full opacity-0 group-hover:opacity-100 cursor-pointer"
              onClick={() => handleScrollAnchor("#aboutMe")}
            >
              <Icons.iconify
                icon="system-uicons:chain"
                width="22"
                height="22"
              />
            </Link>
          </div>
        </div>
      </h2>
      <AboutMeBody />
    </section>
  );
}
