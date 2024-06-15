import { useTranslation } from "react-i18next";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Icons from "./icons";
import { useLoadExperiences } from "~/hooks/useLoadExperiences";
import { Badge } from "./badge";
import { Link, useSearchParams } from "react-router-dom";
import { useHandleScrollAnchor } from "~/hooks/useHandleScrollAnchor";

export function Experiences() {
  const { t } = useTranslation();
  const experiences = useLoadExperiences();
  const handleScrollAnchor = useHandleScrollAnchor();
  const [searchParams] = useSearchParams();
  const locale = searchParams.get("locale") || "en";
  const theme = searchParams.get("theme") || "light";

  return (
    <section id="experiences" className="bg-cyan-400 pb-[5%] dark:bg-slate-800">
      <h2 className="py-[5%] text-center font-light">
        <div className="group flex flex-row items-center justify-center gap-x-2">
          <Link
            to={`?${new URLSearchParams({ locale, theme })}#experiences`}
            className="cursor-pointer font-open-sans 2xl:text-4xl"
            onClick={() => handleScrollAnchor("#experiences")}
          >
            {t("experiences.title").toLocaleUpperCase()}
          </Link>
          <Link
            to={`?${new URLSearchParams({ locale, theme })}#experiences`}
            className="cursor-pointer opacity-0 group-hover:opacity-100"
            onClick={() => handleScrollAnchor("#experiences")}
          >
            <Icons.iconify icon="system-uicons:chain" width="22" height="22" />
          </Link>
        </div>
      </h2>
      <div>
        <VerticalTimeline>
          {experiences.map((experience, idx: number) => (
            <VerticalTimelineElement
              key={idx}
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#FFFFFF", color: "#000000" }}
              contentArrowStyle={{ borderRight: "7px solid #FFFFFF" }}
              date={experience.date}
              iconStyle={{ background: "#0e7490", color: "#fff" }}
              icon={<Icons.iconify icon={experience.icon} />}
            >
              <h3 className="vertical-timeline-element-title font-open-sans text-lg">
                {experience.position}
              </h3>
              <h4 className="vertical-timeline-element-subtitle font-open-sans text-sm">
                {experience.companyName}
              </h4>
              <div className="space-y-2">
                {experience.techStacks.map((tech) => (
                  <Badge key={`${tech}_${idx}`} className="mr-2 bg-black/10">
                    {tech}
                  </Badge>
                ))}
              </div>
            </VerticalTimelineElement>
          ))}
          <VerticalTimelineElement
            iconStyle={{ backgroundColor: "#0e7490" }}
            icon={
              <Icons.iconify icon={"ri:hourglass-fill"} color={"#FFFFFF"} />
            }
          />
        </VerticalTimeline>
      </div>
    </section>
  );
}
