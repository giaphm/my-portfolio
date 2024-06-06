import { useEffect, useState } from "react";

type SkillType = {
  skillName: string;
  icon: string;
};

export function useLoadSkills() {
  const [skills, setSkills] = useState<SkillType[]>([]);

  useEffect(() => {
    fetch("./skills_data.json")
      .then((res) => res.json())
      .then((data) => setSkills(data.skills));
  }, []);

  return skills;
}
