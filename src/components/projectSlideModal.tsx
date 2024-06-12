import { memo } from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import Icons from "./icons";
import { AnimatePresence, motion } from "framer-motion";

type AppProps = {
  show: boolean;
  onHide: () => void;
  data: {
    title: string;
    images: string[];
    desc: string;
  };
};

const ProjectSlideModal = memo(function ProjectSlideModal({
  show,
  onHide,
  data,
}: AppProps) {
  return (
    <AnimatePresence>
      {show && (
        <div className="fixed inset-0 bg-black/20 z-[11] pt-[50%] min-[425px]:pt-[35%] md:pt-20 lg:pt-32 px-[20]">
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: { duration: 0.25 },
            }}
            // variants={{
            //   init: { opacity: 0, scale: 0.6 },
            //   showModal: {
            //     opacity: 1,
            //     scale: 1,
            //     transition: { duration: 0.25 },
            //   },
            //   hideModal: {
            //     opacity: 0,
            //     scale: 0.6,
            //     transition: { duration: 0.1 },
            //   },
            // }}
            exit={{ opacity: 0, scale: 0.6, transition: { duration: 0.1 } }}
          >
            <div className="relative bg-white w-[90%] mx-auto">
              <div className="absolute right-1 lg:right-2 top-1 lg:top-2 cursor-pointer">
                <Icons.x onClick={onHide} />
              </div>
              <div className="pb-[50px] pt-10 lg:pt-12 px-5 lg:px-8">
                <AwesomeSlider>
                  {data?.images?.map((img: string, idx: number) => (
                    <div key={idx} data-src={img} />
                  ))}
                </AwesomeSlider>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
});

export { ProjectSlideModal };
