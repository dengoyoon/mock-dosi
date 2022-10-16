import React from "react";
import { Link } from "react-router-dom";

import "../../stylesheets/ExternalNavBar.scss";

function ExternalNavBar() {
  return (
    <ul className="navbar">
      <li className="navbar__item">
        <Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M20.0001 4.478C22.5977 8.29172 23.8805 12.5935 23.401 17.5458C23.399 17.5668 23.388 17.586 23.3708 17.5986C21.4037 19.041 19.4979 19.9163 17.6188 20.4968C17.6042 20.5012 17.5885 20.501 17.574 20.4961C17.5595 20.4912 17.5469 20.4819 17.538 20.4695C17.1039 19.8664 16.7094 19.2304 16.3638 18.5627C16.344 18.5233 16.3621 18.476 16.403 18.4605C17.0294 18.2248 17.6251 17.9423 18.1981 17.6078C18.2432 17.5814 18.2461 17.5168 18.2044 17.4858C18.0828 17.3957 17.9623 17.3009 17.8471 17.2062C17.8255 17.1887 17.7965 17.1852 17.772 17.197C14.0521 18.9124 9.97705 18.9124 6.21311 17.197C6.18867 17.1861 6.15963 17.1898 6.13864 17.207C6.02364 17.3018 5.90289 17.3957 5.78243 17.4858C5.74074 17.5168 5.74419 17.5814 5.78962 17.6078C6.3626 17.936 6.9583 18.2248 7.5839 18.4616C7.62444 18.4771 7.6437 18.5233 7.62358 18.5627C7.28548 19.2313 6.89103 19.8672 6.44885 20.4704C6.42959 20.4948 6.39797 20.506 6.36807 20.4968C4.49788 19.9163 2.59205 19.041 0.624977 17.5986C0.608589 17.586 0.596802 17.5659 0.595077 17.5449C0.194303 13.2613 1.01109 8.92389 3.99275 4.47714C3.99993 4.46537 4.01086 4.45619 4.02351 4.45073C5.49062 3.77836 7.06238 3.28371 8.70515 3.00121C8.73505 2.99662 8.76495 3.0104 8.78048 3.03681C8.98345 3.39567 9.21546 3.85588 9.37244 4.23197C11.104 3.96784 12.8627 3.96784 14.6305 4.23197C14.7875 3.86392 15.0115 3.39567 15.2136 3.03681C15.2208 3.02371 15.2319 3.01321 15.2454 3.00682C15.259 3.00042 15.2742 2.99846 15.2889 3.00121C16.9325 3.28457 18.5043 3.77923 19.9702 4.45073C19.9832 4.45619 19.9938 4.46537 20.0001 4.478ZM10.2528 12.6228C10.2709 11.3564 9.34627 10.3085 8.18564 10.3085C7.03449 10.3085 6.1188 11.3472 6.1188 12.6228C6.1188 13.898 7.0526 14.9367 8.18564 14.9367C9.33708 14.9367 10.2528 13.898 10.2528 12.6228ZM17.8951 12.6228C17.9132 11.3564 16.9886 10.3085 15.8282 10.3085C14.6768 10.3085 13.7611 11.3472 13.7611 12.6228C13.7611 13.898 14.6949 14.9367 15.8282 14.9367C16.9886 14.9367 17.8951 13.898 17.8951 12.6228Z"
            ></path>
          </svg>
        </Link>
      </li>
      <li className="navbar__item">
        <Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M8.91878 20.5C17.221 20.5 21.7613 13.7679 21.7613 7.9301C21.7613 7.73891 21.7573 7.5486 21.7485 7.35908C22.6319 6.73341 23.3943 5.95874 24 5.07139C23.1912 5.42331 22.3209 5.66017 21.4079 5.76697C22.3398 5.22005 23.0553 4.35481 23.3928 3.32344C22.5068 3.8379 21.5374 4.20056 20.5266 4.3958C19.703 3.53707 18.5304 3 17.2319 3C14.7393 3 12.718 4.97846 12.718 7.41722C12.718 7.76394 12.7576 8.10107 12.8351 8.42456C9.08369 8.23981 5.75722 6.48184 3.53097 3.80876C3.13 4.48297 2.9191 5.24921 2.9198 6.02925C2.9198 7.56199 3.71663 8.91504 4.92841 9.70666C4.21163 9.68523 3.51057 9.49573 2.8842 9.15409C2.88353 9.17264 2.88353 9.19071 2.88353 9.21053C2.88353 11.35 4.43936 13.1364 6.50468 13.5412C6.11678 13.6446 5.71652 13.6968 5.31449 13.6966C5.02415 13.6966 4.74119 13.6687 4.46619 13.617C5.04083 15.3723 6.70711 16.6497 8.68268 16.6854C7.1378 17.8705 5.19174 18.5764 3.07666 18.5764C2.71686 18.5767 2.35735 18.5563 2 18.5152C3.99762 19.7685 6.36959 20.4997 8.919 20.4997"
            ></path>
          </svg>
        </Link>
      </li>
      <li className="navbar__item">
        <Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M13.5273 11.8102C13.5273 15.5712 10.499 18.6201 6.76374 18.6201C3.02845 18.6201 0 15.5712 0 11.8102C0 8.04913 3.02822 5 6.76374 5C10.4993 5 13.5273 8.04913 13.5273 11.8102ZM20.9651 11.8081C20.9651 15.3483 19.451 18.2194 17.5832 18.2194C15.7155 18.2194 14.2014 15.3483 14.2014 11.8081C14.2014 8.26793 15.7153 5.39689 17.583 5.39689C19.4508 5.39689 20.9649 8.26701 20.9649 11.8081H20.9651ZM22.8105 17.5515C23.4675 17.5515 23.9999 14.9792 23.9999 11.808C23.9999 8.63594 23.4673 6.06455 22.8105 6.06455C22.1538 6.06455 21.6214 8.63617 21.6214 11.808C21.6214 14.9799 22.1536 17.5515 22.8105 17.5515Z"
              fill="currentColor"
            ></path>
          </svg>
        </Link>
      </li>
      <li className="navbar__item hide">
        <button type="button">프로필</button>
      </li>
      <li className="navbar__item">
        <button type="button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <rect
              x="2"
              y="2.5"
              width="20"
              height="19"
              rx="3.339"
              stroke="currentColor"
              strokeWidth="1.8"
            ></rect>
            <rect
              x="4.728"
              y="5.295"
              width="14.546"
              height="1.8"
              rx=".879"
              fill="currentColor"
            ></rect>
            <path
              d="M17.454 12.336c-.26 0-.513.093-.715.262a1.16 1.16 0 0 0-.39.667 1.18 1.18 0 0 0 .111.77c.123.236.322.42.563.523.241.102.51.116.759.038a1.13 1.13 0 0 0 .61-.464 1.176 1.176 0 0 0-.14-1.458l-.026.027.026-.027a1.122 1.122 0 0 0-.798-.338z"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth=".5"
            ></path>
          </svg>
        </button>
      </li>
    </ul>
  );
}

export default ExternalNavBar;