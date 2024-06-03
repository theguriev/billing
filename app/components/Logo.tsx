import { SVGProps } from "react";

const Logo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 272 272"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 11C0 4.92487 4.92487 0 11 0H198.5C204.575 0 209.5 4.92487 209.5 11C209.5 17.0751 204.575 22 198.5 22H11C4.92487 22 0 17.0751 0 11Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 136C0 129.925 4.92487 125 11 125H261C267.075 125 272 129.925 272 136C272 142.075 267.075 147 261 147H11C4.92487 147 0 142.075 0 136Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 261C0 254.925 4.92487 250 11 250H167.25C173.325 250 178.25 254.925 178.25 261C178.25 267.075 173.325 272 167.25 272H11C4.92487 272 0 267.075 0 261Z"
      fill="currentColor"
    />
  </svg>
);

export default Logo;
