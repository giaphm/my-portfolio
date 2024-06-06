import { useEffect, useState } from "react";

type ExperienceType = {
  position: string;
  companyName: string;
  icon: string;
  date: string;
  techStacks: string[];
};

export function useLoadExperiences() {
  const [experiences, setExperiences] = useState<ExperienceType[]>([]);

  useEffect(() => {
    fetch("./experiences_data.json")
      .then((res) => res.json())
      .then((data) => setExperiences(data.experiences));
  }, []);

  return experiences;
}
