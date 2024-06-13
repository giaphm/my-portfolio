import { useTranslation } from "react-i18next";
import { useLoadSkills } from "~/hooks/useLoadSkills";
import Icons from "./icons";
import { Link } from "react-router-dom";
import { useHandleScrollAnchor } from "~/hooks/useHandleScrollAnchor";
import { motion } from "framer-motion";

export default function Skills() {
  const { t } = useTranslation();
  const skills = useLoadSkills();
  const handleScrollAnchor = useHandleScrollAnchor();

  return (
    <section id="skills" className="bg-[#1f1f1f] pb-[10%]">
      <h2 className="text-white text-center font-light py-12">
        <div className="flex flex-row justify-center items-center gap-x-2 group">
          <div className="relative">
            <Link
              to={"#skills"}
              className="cursor-pointer font-open-sans 2xl:text-4xl"
              onClick={() => handleScrollAnchor("#skills")}
            >
              {t("skills.title").toLocaleUpperCase()}
            </Link>
            <Link
              to={"#skills"}
              className="absolute left-full opacity-0 group-hover:opacity-100 cursor-pointer"
              onClick={() => handleScrollAnchor("#skills")}
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
      <motion.div
        initial={"init"}
        whileInView={"show"}
        variants={{
          init: { opacity: 0, scale: 0.9 },
          show: {
            opacity: 1,
            scale: 1,
            transition: {
              ease: "linear",
              duration: 0.5,
            },
          },
        }}
      >
        <ul className="px-8 m-x-5 text-center">
          {skills.map((skill, idx: number) => (
            <li key={idx} className="inline-block my-2 mx-3 md:mx-4">
              <span>
                <div className="w-[100px] 2xl:w-[120px] bg-neutral-700/30 rounded-md pt-2 pb-1 flex flex-col justify-center items-center text-white space-y-2">
                  <Icons.iconify
                    icon={skill.icon}
                    className="w-[40px] h-[40px] 2xl:w-[50px] 2xl:h-[50px]"
                  />
                  <span className="mt-1 font-light text-xs font-open-sans 2xl:text-sm">
                    {skill.skillName}
                  </span>
                </div>
              </span>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
