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
  return (
    <CardContainer
      containerClassName="py-5 md:py-20"
      className={cn("inter-var", className)}
    >
      <CardBody className="group/card relative h-auto w-auto rounded-xl border border-black/[0.1] bg-gray-50 p-6 dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] 2xl:w-[30rem]">
        <CardItem
          translateZ="50"
          className="text-xl font-bold tracking-[2.5px] text-neutral-600 dark:text-white"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="mt-2 max-w-sm text-sm text-neutral-500 dark:text-neutral-300"
        >
          {description}
        </CardItem>
        <CardItem translateZ="100" className="mt-4 w-full">
          <img
            src={thumbnail}
            height="1000"
            width="1000"
            className="h-60 w-full rounded-xl object-cover group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="mt-5 flex flex-col items-center justify-between gap-y-3 md:mt-20 md:flex-row md:gap-y-0">
          <CardItem
            translateZ={20}
            as={Link}
            to={repoLink}
            target="__blank"
            className="rounded-xl px-4 py-2 text-xs font-normal dark:text-white"
          >
            Repository →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            onClick={onOpenSlide}
            className="rounded-xl bg-black px-4 py-2 text-xs font-bold text-white dark:bg-white dark:text-black"
          >
            More details
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
