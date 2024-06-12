import { useTranslation } from "react-i18next";
import { ProjectType, useLoadProjects } from "~/hooks/useLoadProjects";
import { ProjectSlideModal } from "~/components/projectSlideModal";
import { useState } from "react";
import Icons from "./icons";
import { useHandleScrollAnchor } from "~/hooks/useHandleScrollAnchor";
import { Link } from "react-router-dom";
import { CardProject } from "./cardProject";
import { useCycle } from "framer-motion";

export default function Projects() {
  const { t } = useTranslation();
  const projects = useLoadProjects();
  // const [showModal, setShowModal] = useState<boolean>(false);
  const [isOpenModal, toggleOpenModal] = useCycle(false, true);
  const [dataModal, setDataModal] = useState<any | null>(null);
  const handleScrollAnchor = useHandleScrollAnchor();

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
        <h2 className="pt-12 pb-[5%] text-center font-light">
          <div className="flex flex-row justify-center items-center gap-x-2 group">
            <div className="relative">
              <Link
                to={"#projects"}
                className="cursor-pointer font-open-sans 2xl:text-4xl"
                onClick={() => handleScrollAnchor("#projects")}
              >
                {t("projects.title").toLocaleUpperCase()}
              </Link>
              <Link
                to={"#projects"}
                className="absolute left-full opacity-0 group-hover:opacity-100 cursor-pointer"
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
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-5 xl:grid-cols-3 px-5">
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
      </div>
      <ProjectSlideModal
        show={isOpenModal}
        onHide={onHandleHideModal}
        data={dataModal}
      />
    </section>
  );
}