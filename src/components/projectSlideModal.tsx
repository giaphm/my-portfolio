import { memo } from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import Icons from "./icons";

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
    show && (
      <div className="fixed inset-0 bg-black/20 z-[11] pt-[10%] lg:pt-[5%] px-[20%]">
        <div className="relative bg-white max-w-[800px] min-w-[700px]">
          <div className="absolute right-3 top-2 cursor-pointer">
            <Icons.x onClick={onHide} />
          </div>
          <div className="pb-[50px] pt-10 px-12">
            <AwesomeSlider>
              {data.images.map((img: string, idx: number) => (
                <div key={idx} data-src={img} />
              ))}
            </AwesomeSlider>
          </div>
          <div className="px-8 pb-5">Description</div>
        </div>
      </div>
    )
  );
});

export { ProjectSlideModal };
