import { IconProps } from "@/utils/lib";
import { forwardRef } from "react";

const FilledStarSVG = forwardRef<SVGSVGElement, IconProps>(({ className, ...props }, ref) => (
  <svg ref={ref} {...props} className={className + " fill-current"} width="18" height="16" viewBox="0 0 18 16">
    <path d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z"></path>
  </svg>
));

FilledStarSVG.displayName = "FilledStarSVG";
export default FilledStarSVG;
