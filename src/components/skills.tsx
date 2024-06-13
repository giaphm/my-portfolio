import { useTranslation } from "react-i18next";
import { SkillType, useLoadSkills } from "~/hooks/useLoadSkills";
import Icons from "./icons";
import { Link, useSearchParams } from "react-router-dom";
import { useHandleScrollAnchor } from "~/hooks/useHandleScrollAnchor";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { RenderOnViewportEntry } from "./renderOnViewportEntry";
import { useState } from "react";

function SkillsBody({ skills }: { skills: SkillType[] }) {
  const [hoveredSkillName, setHoveredSkillName] = useState<string | null>(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0); // going to set this value on mouse move
  // rotate the tooltip
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig,
  );
  // translate the tooltip
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig,
  );
  const handleMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth
      ? event.target.offsetWidth
      : event.target.clientWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth); // set the x value, which is then used in transform and rotate
  };

  return (
    <RenderOnViewportEntry threshold={0.25} style={{ minHeight: "240px" }}>
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
            <li
              key={idx}
              className="relative inline-block my-2 mx-3 md:mx-4"
              onMouseEnter={() => setHoveredSkillName(skill.skillName)}
              onMouseLeave={() => setHoveredSkillName(null)}
            >
              <AnimatePresence mode="popLayout">
                {hoveredSkillName === skill.skillName && (
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.6 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      transition: {
                        type: "spring",
                        stiffness: 260,
                        damping: 10,
                      },
                    }}
                    exit={{ opacity: 0, y: 20, scale: 0.6 }}
                    style={{
                      translateX: translateX,
                      rotate: rotate,
                      whiteSpace: "nowrap",
                    }}
                    className="absolute -top-16 -left-1 translate-x-1/2 flex text-xs  flex-col items-center justify-center rounded-md bg-black z-50 shadow-xl px-4 py-2"
                  >
                    <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px " />
                    <div className="absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px " />
                    <div className="font-bold text-white relative z-30 text-base">
                      {skill.skillName}
                    </div>
                    {/* <div className="text-white text-xs">{skill.skillName}</div> */}
                  </motion.div>
                )}
              </AnimatePresence>
              <span onMouseMove={handleMouseMove}>
                <div className="w-[100px] 2xl:w-[120px] bg-neutral-700/30 rounded-md pt-3 pb-3 flex flex-col justify-center items-center text-white space-y-2">
                  <Icons.iconify
                    icon={skill.icon}
                    className="w-[40px] h-[40px] 2xl:w-[50px] 2xl:h-[50px]"
                  />
                  {/* <span className="mt-1 font-light text-xs font-open-sans 2xl:text-sm">
                    {skill.skillName}
                  </span> */}
                </div>
              </span>
            </li>
          ))}
        </ul>
      </motion.div>
    </RenderOnViewportEntry>
  );
}

export default function Skills() {
  const { t } = useTranslation();
  const skills = useLoadSkills();
  const handleScrollAnchor = useHandleScrollAnchor();
  const [searchParams] = useSearchParams();
  const locale = searchParams.get("locale") || "en";
  const theme = searchParams.get("theme") || "light";

  return (
    <section id="skills" className="bg-[#1f1f1f] pb-[10%]">
      <h2 className="text-white text-center font-light py-12">
        <div className="flex flex-row justify-center items-center gap-x-2 group">
          <div className="relative">
            <Link
              to={{
                hash: "skills",
                search: `${new URLSearchParams({ locale, theme })}`,
              }}
              className="cursor-pointer font-open-sans 2xl:text-4xl"
              onClick={() => handleScrollAnchor("#skills")}
            >
              {t("skills.title").toLocaleUpperCase()}
            </Link>
            <Link
              to={{
                hash: "skills",
                search: `${new URLSearchParams({ locale, theme })}`,
              }}
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
      <SkillsBody skills={skills} />
    </section>
  );
}
