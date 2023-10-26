import { SVGAttributes } from "react";

export default function LogoSvg(props: SVGAttributes<SVGElement>) {
  return (
    <svg
      width="41"
      height="42"
      viewBox="0 0 41 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x="-0.5"
        y="12"
        width="20"
        height="31"
        rx="10"
        transform="rotate(-30 -0.5 12)"
        fill="#285CDB"
      />
      <g filter="url(#filter0_d_15_9962)">
        <rect
          x="22.5"
          y="2.13398"
          width="20"
          height="31"
          rx="10"
          transform="rotate(30 22.5 2.13398)"
          fill="black"
          fillOpacity="0.01"
        />
      </g>
      <rect
        x="23.5"
        y="2"
        width="20"
        height="31"
        rx="10"
        transform="rotate(30 23.5 2)"
        fill="url(#paint0_linear_15_9962)"
      />
      <defs>
        <filter
          id="filter0_d_15_9962"
          x="6.65858"
          y="3.79256"
          width="33.5033"
          height="37.5296"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_15_9962"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_15_9962"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_15_9962"
          x1="9.85193"
          y1="17.8327"
          x2="32.3456"
          y2="34.553"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3B75FF" />
          <stop offset="1" stopColor="#285CDB" />
        </linearGradient>
      </defs>
    </svg>
  );
}
