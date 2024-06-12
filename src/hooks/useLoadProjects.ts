import { useEffect, useState } from "react";

export type ProjectType = {
  title: string;
  images: string[];
  desc: string;
  repoLink: string;
};

export function useLoadProjects() {
  const [projects, setProjects] = useState<ProjectType[]>([]);

  useEffect(() => {
    fetch("./projects_data.json")
      .then((res) => res.json())
      .then((data) => setProjects(data.projects));
  }, []);

  return projects;
}
