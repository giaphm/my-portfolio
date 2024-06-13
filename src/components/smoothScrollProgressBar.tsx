import { useScroll, motion, useSpring } from "framer-motion";
import { cn } from "~/lib/utils";

interface ComponentProps extends React.FC<{ className?: string }> {}

export const SmoothScrollProgressBar: ComponentProps = ({
  className,
  ...props
}) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className={cn(
        "fixed inset-0 h-1 origin-left bg-cyan-700 z-20",
        className,
      )}
      {...props}
    />
  );
};
