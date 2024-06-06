import { useTranslation } from "react-i18next";
import Icons from "./icons";
import { useHandleScrollAnchor } from "~/hooks/useHandleScrollAnchor";
import { Link } from "react-router-dom";

export default function AboutMe() {
  const { t } = useTranslation();
  const handleScrollAnchor = useHandleScrollAnchor();

  return (
    <section id="aboutMe" className="pb-[5%] dark:bg-[#1F1F1F]">
      <h2 className="pt-12 text-center font-light">
        <div className="flex flex-row justify-center items-center gap-x-2 group">
          <Link
            to={"#aboutMe"}
            className="cursor-pointer font-open-sans 2xl:text-4xl"
            onClick={() => handleScrollAnchor("#aboutMe")}
          >
            {t("aboutMe.title").toLocaleUpperCase()}
          </Link>
          <Link
            to={"#aboutMe"}
            className="opacity-0 group-hover:opacity-100 cursor-pointer"
            onClick={() => handleScrollAnchor("#aboutMe")}
          >
            <Icons.iconify icon="system-uicons:chain" width="22" height="22" />
          </Link>
        </div>
      </h2>
      <div className="flex flex-row">
        <div className="basis-4/12">
          <div className="dark:border border-slate-800 mt-[50px] mx-[95px] sm:mx-[35px] mb-[30px] px-[15px] py-[30px] text-center max-w-[200px] sm:max-w-[170px] shadow-[0_4px_6px_rgba(0,0,0,.3)]">
            <img
              height="250"
              width="200"
              className="w-[200px] h-[250px] sm:w-[150px] sm:h-[200px]"
              src="./avatar.jpg"
            />
            <div className="flex flex-row mt-[15px] justify-center gap-x-4">
              <Icons.iconify icon="logos:react" width="42" height="42" />
              <Icons.iconify icon="devicon:nodejs" width="42" height="42" />
              <Icons.iconify icon="logos:docker-icon" width="42" height="42" />
            </div>
          </div>
        </div>
        <div className="basis-8/12">
          <div className="card border mt-20 mx-2 flex justify-center flex-col w-[90%]">
            <div className="cardHeader flex flex-row h-[31px] items-center gap-x-2 pl-[15px] bg-black/[0.03] border-b">
              <Icons.iconify icon="twemoji:red-circle" width="10" height="10" />
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
              <p className="font-serif font-light sm:text-xs 2xl:text-lg">
                {t("aboutMe.hi")} :)
              </p>
              <br />
              <p className="text-sm sm:text-xs 2xl:text-lg font-light font-serif leading-8">
                {t("aboutMe.description")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
