import type { LucideProps } from "lucide-react";
import React from "react";

const AddToCart = React.forwardRef<SVGSVGElement, LucideProps>(
  ({ className, color = "currentColor", size = 16, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        width={size}
        height={size}
        viewBox="0 0 19 18"
        fill="none"
        stroke={color}
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        {...props}
      >
        <rect width="19" height="18" fill="url(#pattern0_2_75)" />
        <defs>
          <pattern
            id="pattern0_2_75"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image0_2_75"
              transform="matrix(0.01373 0 0 0.0144928 -0.00114416 0)"
            />
          </pattern>
          <image
            id="image0_2_75"
            width="73"
            height="69"
            preserveAspectRatio="none"
            xlinkHref="data:image/png;base64,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"
          />
        </defs>
      </svg>
    );
  }
);

AddToCart.displayName = "AddToCart";

export default AddToCart;