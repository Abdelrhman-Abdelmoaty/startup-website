import { IconProps } from "@/utils/lib";
import { forwardRef } from "react";

const PricingSVG = forwardRef<SVGSVGElement, IconProps>(({ className, ...props }, ref) => (
  <svg ref={ref} {...props} className={className} width="239" height="601" viewBox="0 0 239 601" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect opacity="0.3" x="-184.451" y="600.973" width="196" height="541.607" rx="2" transform="rotate(-128.7 -184.451 600.973)" fill="url(#paint0_linear_93:235)"></rect>
    <rect opacity="0.3" x="-188.201" y="385.272" width="59.7544" height="541.607" rx="2" transform="rotate(-128.7 -188.201 385.272)" fill="url(#paint1_linear_93:235)"></rect>
    <defs>
      <linearGradient id="paint0_linear_93:235" x1="-90.1184" y1="420.414" x2="-90.1184" y2="1131.65" gradientUnits="userSpaceOnUse">
        <stop stopColor="#4A6CF7"></stop>
        <stop offset="1" stopColor="#4A6CF7" stopOpacity="0"></stop>
      </linearGradient>
      <linearGradient id="paint1_linear_93:235" x1="-159.441" y1="204.714" x2="-159.441" y2="915.952" gradientUnits="userSpaceOnUse">
        <stop stopColor="#4A6CF7"></stop>
        <stop offset="1" stopColor="#4A6CF7" stopOpacity="0"></stop>
      </linearGradient>
    </defs>
  </svg>
));
PricingSVG.displayName = "PricingSVG";
export default PricingSVG;
