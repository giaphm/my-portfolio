import { useEffect, useState } from "react";

type LinkType = {
  socialName: string;
  icon: string;
  link: string;
};

type FooterType = {
  socialLinks: LinkType[];
  contact: string;
};

export function useLoadFooter() {
  const [footerData, setFooterData] = useState<FooterType | null>(null);

  useEffect(() => {
    fetch("./footer_data.json")
      .then((res) => res.json())
      .then((data) => setFooterData(data.footer));
  }, []);

  return footerData;
}
