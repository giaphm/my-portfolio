import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: {
          home: {
            title: "Home",
          },
          aboutMe: {
            title: "About me",
            hi: "Hi",
            description: `👋 I'm Hoang Minh Giap. I'm working with newest frameworks and
            technologies like React, NodeJs and Docker. My technical stacks
            are HTML, CSS, Javascript, Typescript, React, TailwindCSS,
            Shadcn, TRPC, NextJs, Next-Auth, Prisma. Let me know any
            questions about this portfolio. Feel free to contact me if you
            have any job opportunities. Thank you 💜`,
          },
          projects: {
            title: "Projects",
          },
          skills: {
            title: "Skills",
          },
          experiences: {
            title: "Experiences",
          },
          footer: {
            inspiration: "This project is inspired by ",
            contact:
              "You can contact me at email: minhgiaphoang1997@gmail.com for more information!",
            thisRepo: "this repository",
          },
        },
      },
      vn: {
        translation: {
          home: {
            title: "Màn chính",
          },
          aboutMe: {
            title: "Về tôi",
            hi: "Xin chào",
            description: `👋 Mình là Hoàng Minh Giáp. Mình làm việc với các frameworks 
            và công nghệ mới như React, Node.js và Docker. Tech stack chính của 
            mình đó là HTML5, CSS3, Javascript, Typescript, React, TailwindCSS, 
            Shadcn, TRPC, NextJs, Next-Auth, Prisma. Cho mình biết thêm thông tin 
            nếu bạn có câu hỏi gì về mình, cũng như có các cơ hội về công việc nhé. 
            Cảm ơn bạn 💜`,
          },
          projects: {
            title: "Dự án",
          },
          skills: {
            title: "Kĩ năng",
          },
          experiences: {
            title: "Kinh nghiệm",
          },
          footer: {
            inspiration: "Dự án lấy ý tưởng từ ",
            contact:
              "Bạn có thể liên hệ với mình qua email: minhgiaphoang1997@gmail.com nhé!",
            thisRepo: "repository này",
          },
        },
      },
    },
    lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });
