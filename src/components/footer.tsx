import { useLoadFooter } from "~/hooks/useLoadFooter";
import Icons from "./icons";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export function Footer() {
  const { t } = useTranslation();
  const footerData = useLoadFooter();

  return (
    <section id="footer" className="bg-[#1F1F1F] py-[50px] text-center">
      <div>
        {footerData?.socialLinks.map((link, idx: number) => (
          <Link key={idx} to={link.link} target={"_blank"}>
            <Icons.iconify
              // width={21}
              // height={21}
              icon={link.icon}
              color="white"
              className="mr-7 inline-block h-[21px] w-[21px] 2xl:h-[27px] 2xl:w-[27px]"
            />
          </Link>
        ))}
      </div>
      <div className="pt-3 text-xs font-light italic text-white 2xl:text-base">
        <p className="inline-block font-open-sans">
          {t("footer.inspiration")}
          <Link
            to="https://github.com/Dorota1997/react-frontend-dev-portfolio"
            target="_blank"
            className="inline-block font-open-sans underline"
          >
            {t("footer.thisRepo")}
          </Link>
        </p>
        <p className="font-open-sans">{t("footer.contact")}</p>
      </div>
    </section>
  );
}
