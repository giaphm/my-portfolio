import { useTranslation } from "react-i18next";
import Icons from "./icons";
import { useHandleScrollAnchor } from "~/hooks/useHandleScrollAnchor";
import { Link, useSearchParams } from "react-router-dom";
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
            <div className="mx-auto mb-[30px] mt-[50px] w-[230px] border-slate-800 px-[15px] py-[30px] text-center shadow-[0_4px_6px_rgba(0,0,0,.3)] dark:border md:mx-[35px] lg:mx-auto">
              <img src="./avatar.jpg" />
              <div className="mt-[15px] flex flex-row justify-center gap-x-4">
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
            <div className="card mx-5 mt-2 w-auto flex-col border md:mx-2 md:mt-20 md:w-[90%]">
              <div className="cardHeader flex h-[31px] flex-row items-center gap-x-2 border-b bg-black/[0.03] pl-[15px]">
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
              <div className="cardBody p-5 text-left">
                <p className="font-serif text-base font-light sm:text-xs md:text-lg 2xl:text-lg">
                  {t("aboutMe.hi")} :)
                </p>
                <br />
                <p className="font-serif text-sm font-light leading-8 2xl:text-lg">
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
  const [searchParams] = useSearchParams();
  const locale = searchParams.get("locale") || "en";
  const theme = searchParams.get("theme") || "light";

  return (
    <section id="aboutMe" className="pb-12 dark:bg-[#1F1F1F]">
      <h2 className="pt-12 text-center font-light">
        <div className="group flex flex-row items-center justify-center gap-x-2">
          <div className="relative">
            <Link
              to={`?${new URLSearchParams({ locale, theme })}#aboutMe`}
              className="cursor-pointer font-open-sans 2xl:text-4xl"
              onClick={() => handleScrollAnchor("#aboutMe")}
            >
              {t("aboutMe.title").toLocaleUpperCase()}
            </Link>
            <Link
              to={`?${new URLSearchParams({ locale, theme })}#aboutMe`}
              className="absolute left-full cursor-pointer opacity-0 group-hover:opacity-100"
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
