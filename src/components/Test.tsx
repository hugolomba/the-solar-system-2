import React from "react";

export default function Test() {
  return (
    <div className="relative flex justify-center items-center flex-wrap w-[378px] h-[300px] bg-[#05192e]">
      <h1 className="w-full text-center text-white/90">TechUI</h1>
      <p className="m-0">
        <a
          href="https://lite.techui.net/#/components-en"
          className="text-white/70 no-underline hover:text-cyan-300 transition-colors"
        >
          Reference Web
        </a>
      </p>

      <svg
        className="absolute top-0 left-0 -z-10 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polyline
          className="svg-bg"
          fill="#05192e"
          stroke="#0f4c8a"
          strokeWidth="1"
          points="145, 297 35, 297 3, 265 3, 25 25, 3 207, 3 228, 25 363, 25 375 , 40 375 , 275 375 , 275 353 , 297 145, 297"
        />
        <polyline
          fill="#75d1f0"
          points="3, 200 3, 265 35, 297 100, 297 90, 293 37, 293 7, 263 7, 204 3, 200"
        />
        <polyline
          stroke="#19e5e6"
          fill="#19e5e6"
          points="214, 12 262, 12 273, 24 225, 24"
        />
        <polyline
          stroke="#19e5e6"
          fill="#19e5e6"
          points="272, 12 282, 12 293, 24 283, 24"
        />
        <polyline
          stroke="#19e5e6"
          fill="#19e5e6"
          points="292, 12 302, 12 313, 24 303, 24"
        />
        <polyline
          stroke="#19e5e6"
          fill="#19e5e6"
          points="312, 12 322, 12 333, 24 323, 24"
        />
        <polyline
          stroke="#19e5e6"
          fill="#19e5e6"
          points="332, 12 342, 12 353, 24 343, 24"
        />
        <polyline
          stroke="#19e5e6"
          fill="#19e5e6"
          points="8, 8 16, 8 8,16 8, 8"
        />
        <polyline
          stroke="#19e5e6"
          fill="#19e5e6"
          points="375, 297 375, 284 362, 297 375, 297"
        />
      </svg>
    </div>
  );
}