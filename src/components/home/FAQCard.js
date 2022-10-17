import React from "react";
import PropTypes from "prop-types";

import "../../stylesheets/FAQCard.scss";

function FAQCard({ title, description }) {
  return (
    <details className="card-details">
      <summary>
        <div className="card-details__header">
          <svg
            className="card-details__header__icon"
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 36 36"
          >
            <rect
              width="36"
              height="36"
              rx="18"
              fill="currentColor"
              fillOpacity="0.1"
            ></rect>
            <path
              d="M18 24.3252C18.8174 24.3252 19.5732 24.2021 20.25 23.9648L21.2168 25.2568H23.6865L21.9814 22.9805C23.335 21.8379 24.0996 20.001 24.0996 17.6631V17.6455C24.0996 13.5498 21.7354 10.9922 18 10.9922C14.2646 10.9922 11.8916 13.541 11.8916 17.6455V17.6631C11.8916 21.7588 14.2295 24.3252 18 24.3252ZM18 22.0752C15.9082 22.0752 14.5986 20.3438 14.5986 17.6631V17.6455C14.5986 14.9561 15.9346 13.2422 18 13.2422C20.0566 13.2422 21.3926 14.9561 21.3926 17.6455V17.6631C21.3926 19.0342 21.041 20.1504 20.4258 20.9238L19.6084 19.8252H17.1387L18.7646 21.9873C18.5186 22.0488 18.2637 22.0752 18 22.0752Z"
              fill="currentColor"
            ></path>
          </svg>
          <div className="card-details__header__title">{title}</div>
          <svg
            className="card-details__header__"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <path
              d="M17.206 6.70703L18.126 7.62703L9.99999 15.752L1.87399 7.62703L2.79399 6.70703L9.99999 13.914L17.206 6.70703Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </summary>
      <div className="card-details__body">{description}</div>
    </details>
  );
}

FAQCard.defaultProps = {
  title: "오류가 있습니다 페이지를 다시 로딩해주세요.",
  description: "",
};

export default FAQCard;
