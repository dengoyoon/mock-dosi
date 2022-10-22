import React from "react";
import ExternalNavBar from "./ExternalNavBar";
import InternalNavBar from "./InternalNavBar";
import { Link } from "react-router-dom";
import { headerState } from "../../store";
import { useRecoilValue } from "recoil";

import "../../stylesheets/Header.scss";

const getDarkClassName = (isDark) => (isDark ? "dark" : "");

function Header() {
  const header = useRecoilValue(headerState);

  return (
    <header className={"header " + getDarkClassName(header.isDark)}>
      <div className="header-nav">
        <div className="header-aside-left">
          <Link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="155"
              height="26"
              viewBox="0 0 155 26"
              fill="none"
            >
              <path
                d="M5.90098 1L13.9417 3.57844C16.6401 4.44228 18.4529 6.9291 18.4529 9.76277V16.2372C18.4529 19.0709 16.6401 21.5555 13.9417 22.4216L5.8988 25V1H5.90098ZM7.44979 4.74986L12.094 6.10453C13.8763 6.6237 15.1219 8.28377 15.1219 10.1402V15.7595C15.1219 17.6115 13.933 19.2258 12.1638 19.7755L7.45198 21.237V22.8753L13.4727 20.9447C15.5276 20.2859 16.9084 18.3925 16.9084 16.235V9.76059C16.9084 7.60316 15.5276 5.70969 13.4727 5.0509L7.45198 3.12034V4.74768L7.44979 4.74986ZM7.44979 7.96746L10.098 8.67424C11.2106 8.97091 11.9893 9.98528 11.9893 11.1371V14.8629C11.9893 16.0169 11.2106 17.0291 10.0959 17.3258L7.44979 18.0304V19.6163L11.7036 18.2965C12.8226 17.9496 13.573 16.9309 13.573 15.7595V10.1402C13.573 8.96655 12.7856 7.91947 11.6599 7.59007L7.44979 6.36193V7.96746ZM7.44979 16.4292L9.69884 15.8315C10.1373 15.7159 10.4427 15.3167 10.4427 14.8651V11.1392C10.4427 10.6877 10.1373 10.2885 9.70102 10.1729L7.45198 9.57299V16.4314L7.44979 16.4292Z"
                fill="currentColor"
              ></path>
              <path
                d="M2.8338 22.0091L4.38261 23.5165V2.47888L2.8338 3.98624V22.0091Z"
                fill="currentColor"
              ></path>
              <path
                d="M1.54881 5.2384L0 6.74577V19.2497L1.54881 20.757V5.2384Z"
                fill="currentColor"
              ></path>
              <path
                d="M25.8586 20.8859V5.10987C25.8586 4.88519 25.9938 4.74994 26.2185 4.74994H32.309C37.6361 4.74994 40.6704 7.64905 40.6704 12.9979C40.6704 18.3467 37.6361 21.2458 32.309 21.2458H26.2185C25.9938 21.2458 25.8586 21.1106 25.8586 20.8859ZM29.9946 8.61542V17.3804H31.9055C34.8264 17.3804 36.4014 15.9428 36.4014 12.9979C36.4014 10.053 34.8286 8.61542 31.9055 8.61542H29.9946Z"
                fill="currentColor"
              ></path>
              <path
                d="M41.9729 12.9979C41.9729 7.89553 45.5919 4.43579 50.4914 4.43579C55.3909 4.43579 59.0098 7.89771 59.0098 12.9979C59.0098 18.098 55.3909 21.5599 50.4914 21.5599C45.5919 21.5599 41.9729 18.098 41.9729 12.9979ZM54.671 12.9979C54.671 10.3453 52.9847 8.50196 50.4914 8.50196C47.998 8.50196 46.3118 10.3453 46.3118 12.9979C46.3118 15.6505 47.998 17.4938 50.4914 17.4938C52.9847 17.4938 54.671 15.6505 54.671 12.9979Z"
                fill="currentColor"
              ></path>
              <path
                d="M59.6139 17.1775C59.5462 16.9528 59.6357 16.7957 59.8604 16.7281L62.9842 15.9646C63.187 15.9188 63.3441 15.9864 63.4335 16.1893C63.9287 17.3803 64.7598 17.8755 66.0861 17.8755C67.1659 17.8755 67.9076 17.5156 67.9076 16.7521C67.9076 15.921 67.1878 15.5152 65.8178 15.0222L64.1098 14.4158C61.5924 13.5389 59.9978 11.8984 59.9978 9.4487C59.9978 6.50378 62.6264 4.43579 65.9094 4.43579C68.6733 4.43579 70.8765 5.69447 71.7971 8.50414C71.8865 8.72883 71.7753 8.9077 71.5724 8.95351L68.2916 9.83045C68.0669 9.89807 67.9316 9.80863 67.8422 9.60576C67.347 8.43652 66.6729 8.12239 65.8418 8.12239C64.9431 8.12239 64.269 8.52596 64.269 9.22401C64.269 9.92207 64.8754 10.3933 66.5617 10.9539L67.7985 11.3574C70.7195 12.3456 72.1592 13.829 72.1592 16.5492C72.1592 19.4701 69.62 21.5621 65.9792 21.5621C62.8554 21.5621 60.541 20.0111 59.6182 17.1797L59.6139 17.1775Z"
                fill="currentColor"
              ></path>
              <path
                d="M73.3462 20.8859V5.10987C73.3462 4.88519 73.4814 4.74994 73.7061 4.74994H77.1898C77.4145 4.74994 77.5498 4.88519 77.5498 5.10987V20.8859C77.5498 21.1106 77.4145 21.2458 77.1898 21.2458H73.7061C73.4814 21.2458 73.3462 21.1106 73.3462 20.8859Z"
                fill="currentColor"
              ></path>
              <path
                d="M85.1474 12.9041C85.1474 7.58577 88.3977 4.24384 93.079 4.24384C96.4886 4.24384 98.8751 5.85809 100.012 8.63067C100.057 8.76592 100.012 8.90335 99.8523 8.94916L98.465 9.35927C98.3297 9.40508 98.2141 9.33746 98.1705 9.22402C97.215 7.20184 95.5789 6.11113 93.103 6.11113C89.2397 6.11113 87.1259 8.92953 87.1259 12.9063C87.1259 16.883 89.2615 19.7014 93.103 19.7014C95.7622 19.7014 97.6491 18.3598 98.5129 15.9057C98.5588 15.7705 98.6722 15.7007 98.8074 15.7465L100.195 16.1566C100.33 16.2024 100.376 16.2918 100.354 16.4074C99.3986 19.4527 96.9227 21.5665 93.0594 21.5665C88.3104 21.5665 85.1496 18.2028 85.1496 12.9063L85.1474 12.9041Z"
                fill="currentColor"
              ></path>
              <path
                d="M102.49 6.0196C102.49 5.33682 103.013 4.86127 103.694 4.86127C104.374 4.86127 104.898 5.339 104.898 6.0196C104.898 6.70021 104.374 7.17794 103.694 7.17794C103.013 7.17794 102.49 6.70021 102.49 6.0196ZM102.784 20.9972V9.99633C102.784 9.86109 102.876 9.76947 103.035 9.76947H104.377C104.514 9.76947 104.603 9.86109 104.603 9.99633V20.9972C104.603 21.1565 104.512 21.2481 104.377 21.2481H103.035C102.876 21.2481 102.784 21.1565 102.784 20.9972Z"
                fill="currentColor"
              ></path>
              <path
                d="M108.286 17.2691V11.4055H106.263C106.128 11.4055 106.036 11.3138 106.036 11.1786V9.99626C106.036 9.86101 106.128 9.76939 106.263 9.76939H108.286V6.2464C108.286 6.10897 108.377 6.01953 108.512 6.01953H109.854C110.013 6.01953 110.105 6.11115 110.105 6.2464V9.76939H113.288C113.423 9.76939 113.514 9.86101 113.514 9.99626V11.1786C113.514 11.3138 113.423 11.4055 113.288 11.4055H110.105V17.3149C110.105 19.0426 110.628 19.793 111.765 19.793C112.402 19.793 112.901 19.4745 113.242 18.7481C113.309 18.6129 113.423 18.5671 113.56 18.6347L114.583 19.0666C114.719 19.1342 114.764 19.2717 114.675 19.4527C113.949 20.9077 112.834 21.4749 111.608 21.4749C109.54 21.4749 108.29 20.1791 108.29 17.2713L108.286 17.2691Z"
                fill="currentColor"
              ></path>
              <path
                d="M115.831 6.0196C115.831 5.33682 116.355 4.86127 117.035 4.86127C117.716 4.86127 118.24 5.339 118.24 6.0196C118.24 6.70021 117.716 7.17794 117.035 7.17794C116.355 7.17794 115.831 6.70021 115.831 6.0196ZM116.126 20.9972V9.99633C116.126 9.86109 116.217 9.76947 116.377 9.76947H117.718C117.853 9.76947 117.945 9.86109 117.945 9.99633V20.9972C117.945 21.1565 117.853 21.2481 117.718 21.2481H116.377C116.217 21.2481 116.126 21.1565 116.126 20.9972Z"
                fill="currentColor"
              ></path>
              <path
                d="M120.399 20.9972V20.6329C120.399 20.5195 120.421 20.4278 120.491 20.3384L126.581 11.4055H120.809C120.672 11.4055 120.582 11.3139 120.582 11.1546V9.99628C120.582 9.86103 120.674 9.76941 120.809 9.76941H129.105C129.24 9.76941 129.332 9.86103 129.332 9.99628V10.3606C129.332 10.474 129.31 10.5656 129.24 10.6551L123.15 19.6098H129.195C129.354 19.6098 129.446 19.7014 129.446 19.8367V20.995C129.446 21.1542 129.354 21.2459 129.195 21.2459H120.626C120.489 21.2459 120.399 21.1324 120.399 20.995V20.9972Z"
                fill="currentColor"
              ></path>
              <path
                d="M130.741 15.4956C130.741 12.0403 132.923 9.54034 136.354 9.54034C139.785 9.54034 141.605 12.1079 141.559 15.8359C141.559 15.9952 141.467 16.0868 141.308 16.0868H132.626C132.853 18.3816 134.24 19.8148 136.354 19.8148C138.014 19.8148 139.059 19.1321 139.696 17.8821C139.764 17.7447 139.877 17.7229 140.014 17.7687L141.151 18.1788C141.288 18.2246 141.356 18.338 141.288 18.4733C140.311 20.4954 138.562 21.4727 136.356 21.4727C132.901 21.4727 130.743 18.951 130.743 15.4956H130.741ZM132.65 14.6558H139.628C139.469 12.566 138.265 11.1786 136.356 11.1786C134.447 11.1786 132.947 12.4962 132.652 14.6558H132.65Z"
                fill="currentColor"
              ></path>
              <path
                d="M143.583 20.9972V9.99634C143.583 9.86109 143.675 9.76947 143.834 9.76947H144.992C145.152 9.76947 145.243 9.83709 145.243 9.99634L145.335 11.8375C146.199 10.3148 147.88 9.5426 149.449 9.5426C152.04 9.5426 153.563 11.1329 153.563 13.792V20.9972C153.563 21.1565 153.471 21.2481 153.336 21.2481H151.995C151.835 21.2481 151.744 21.1565 151.744 20.9972V14.5424C151.744 12.337 150.88 11.2245 148.971 11.2245C147.335 11.2245 145.402 12.4526 145.402 15.1794V20.9972C145.402 21.1565 145.311 21.2481 145.176 21.2481H143.834C143.675 21.2481 143.583 21.1565 143.583 20.9972Z"
                fill="currentColor"
              ></path>
            </svg>
          </Link>
        </div>
        <nav className="header-body">
          <InternalNavBar />
        </nav>
        <nav className="header-aside-right">
          <ExternalNavBar />
        </nav>
      </div>
    </header>
  );
}

export default Header;
