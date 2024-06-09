import { useTranslation } from "react-i18next";
import { ProjectType, useLoadProjects } from "~/hooks/useLoadProjects";
import { ProjectSlideModal } from "~/components/projectSlideModal";
import { useState } from "react";
import Icons from "./icons";
import { useHandleScrollAnchor } from "~/hooks/useHandleScrollAnchor";
import { Link } from "react-router-dom";
import { ThreeDCardDemo } from "./3d-card-demo";

export default function Projects() {
  const { t } = useTranslation();
  const projects = useLoadProjects();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [dataModal, setDataModal] = useState<any | null>(null);
  const handleScrollAnchor = useHandleScrollAnchor();

  const onHandleShowModal = (project: ProjectType) => {
    setShowModal(true);
    setDataModal(project);
  };

  const onHandleHideModal = () => {
    setShowModal(false);
  };

  return (
    <section id="projects">
      <div className="bg-cyan-400 pb-[15%] dark:bg-slate-800">
        <h2 className="py-[5%] text-center font-light">
          <div className="flex flex-row justify-center items-center gap-x-2 group">
            <Link
              to={"#projects"}
              className="cursor-pointer font-open-sans 2xl:text-4xl"
              onClick={() => handleScrollAnchor("#projects")}
            >
              {t("projects.title").toLocaleUpperCase()}
            </Link>
            <Link
              to={"#projects"}
              className="opacity-0 group-hover:opacity-100 cursor-pointer"
              onClick={() => handleScrollAnchor("#projects")}
            >
              <Icons.iconify
                icon="system-uicons:chain"
                width="22"
                height="22"
              />
            </Link>
          </div>
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-2 px-5">
          {projects?.map((project, idx) => (
            <div key={idx} className="px-4 py-2">
              <div
                className="cursor-pointer space-y-4 p-3 bg-white ease-linear duration-300 shadow-[0_4px_6px_rgba(0,0,0,.3)] hover:shadow-[0_10px_20px_rgba(0,0,0,.7)] hover:scale-[1.01]"
                onClick={() => onHandleShowModal(project)}
              >
                <img src="./my-portfolio.png" />
                <p className="text-center font-open-sans text-xl sm:text-base font-light tracking-[3px] dark:text-black 2xl:text-2xl">
                  {project.title.toLocaleUpperCase()}
                </p>
              </div>
            </div>
          ))}
          <ThreeDCardDemo />
        </div>
      </div>
      <ProjectSlideModal
        show={showModal}
        onHide={onHandleHideModal}
        data={dataModal}
      />
    </section>
  );
}
