import { useTranslation } from "react-i18next";
import { ProjectType, useLoadProjects } from "~/hooks/useLoadProjects";
import { ProjectSlideModal } from "~/components/projectSlideModal";
import { useState } from "react";
import Icons from "./icons";
import { useHandleScrollAnchor } from "~/hooks/useHandleScrollAnchor";
import { Link, useSearchParams } from "react-router-dom";
import { CardProject } from "./cardProject";
import { motion, useCycle } from "framer-motion";
import { RenderOnViewportEntry } from "./renderOnViewportEntry";

function ProjectBody({
  projects,
  onHandleShowModal,
}: {
  projects: ProjectType[];
  onHandleShowModal: (project: ProjectType) => void;
}) {
  return (
    <RenderOnViewportEntry threshold={0.25} style={{ minHeight: "240px" }}>
      <motion.div
        initial={"init"}
        whileInView={"show"}
        variants={{
          init: { opacity: 0, scale: 0.8 },
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
        <div className="grid grid-cols-1 px-5 md:grid-cols-2 md:gap-x-5 xl:grid-cols-3">
          {projects.map((project, idx) => (
            <CardProject
              key={idx}
              title={project.title.toLocaleUpperCase()}
              description={project.desc}
              thumbnail={project.images[0]}
              repoLink={project.repoLink}
              onOpenSlide={() => onHandleShowModal(project)}
            />
          ))}
        </div>
      </motion.div>
    </RenderOnViewportEntry>
  );
}

export default function Projects() {
  const { t } = useTranslation();
  const projects = useLoadProjects();
  // const [showModal, setShowModal] = useState<boolean>(false);
  const [isOpenModal, toggleOpenModal] = useCycle(false, true);
  const [dataModal, setDataModal] = useState<any | null>(null);
  const handleScrollAnchor = useHandleScrollAnchor();
  const [searchParams] = useSearchParams();
  const locale = searchParams.get("locale") || "en";
  const theme = searchParams.get("theme") || "light";

  const onHandleShowModal = (project: ProjectType) => {
    setDataModal(project);
    toggleOpenModal();
  };

  const onHandleHideModal = () => {
    setDataModal(null);
    toggleOpenModal();
  };

  return (
    <section id="projects">
      <div className="bg-cyan-400 pb-12 dark:bg-slate-800">
        <h2 className="pb-[5%] pt-12 text-center font-light">
          <div className="group flex flex-row items-center justify-center gap-x-2">
            <div className="relative">
              <Link
                to={{
                  hash: "projects",
                  search: `${new URLSearchParams({ locale, theme })}`,
                }}
                className="cursor-pointer font-open-sans 2xl:text-4xl"
                onClick={() => handleScrollAnchor("#projects")}
              >
                {t("projects.title").toLocaleUpperCase()}
              </Link>
              <Link
                to={{
                  hash: "projects",
                  search: `${new URLSearchParams({ locale, theme })}`,
                }}
                className="absolute left-full cursor-pointer opacity-0 group-hover:opacity-100"
                onClick={() => handleScrollAnchor("#projects")}
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
        <ProjectBody
          projects={projects}
          onHandleShowModal={onHandleShowModal}
        />
      </div>
      <ProjectSlideModal
        show={isOpenModal}
        onHide={onHandleHideModal}
        data={dataModal}
      />
    </section>
  );
}
