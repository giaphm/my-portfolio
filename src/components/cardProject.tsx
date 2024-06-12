"use client";

import { Link } from "react-router-dom";
import { CardBody, CardContainer, CardItem } from "~/components/ui/3d-card";
import { cn } from "~/lib/utils";

type CompProps = {
  className?: string;
  title: string;
  description: string;
  thumbnail: string;
  repoLink: string;
  onOpenSlide: () => void;
};

export function CardProject({
  className,
  title,
  description,
  thumbnail,
  repoLink,
  onOpenSlide,
}: CompProps) {
  console.log("repoLink", repoLink);
  return (
    <CardContainer
      containerClassName="py-5 md:py-20"
      className={cn("inter-var", className)}
    >
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white tracking-[2.5px]"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={thumbnail}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex flex-col md:flex-row justify-between items-center mt-5 md:mt-20 gap-y-3 md:gap-y-0">
          <CardItem
            translateZ={20}
            as={Link}
            to={repoLink}
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Repository →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            onClick={onOpenSlide}
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold hidden md:block"
          >
            More details
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
