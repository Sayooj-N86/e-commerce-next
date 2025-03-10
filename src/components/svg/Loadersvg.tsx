import * as React from "react"
import { SVGProps } from "react"
const Loadersvg = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" {...props}>
    <linearGradient id="a">
      <stop offset={0} stopColor="#FFF" stopOpacity={0} />
      <stop offset={1} stopColor="#FFF" />
    </linearGradient>
    <circle
      cx={100}
      cy={100}
      r={70}
      
      fill="none"
      stroke="url(#a)"
      strokeDasharray="0 44 0 44 0 44 0 44 0 360"
      strokeLinecap="round"
      strokeWidth={15}
      transform-origin="center"
    >
      <animateTransform
        attributeName="transform"
        calcMode="discrete"
        dur={2}
        repeatCount="indefinite"
        type="rotate"
        values="360;324;288;252;216;180;144;108;72;36"
      />
    </circle>
  </svg>
)
export default Loadersvg
