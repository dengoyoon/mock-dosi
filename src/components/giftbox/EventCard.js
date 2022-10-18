import React from "react";

import "../../stylesheets/EventCard.scss";

function EventCard({ head, description, icon, buttonName }) {
  return (
    <div className="event-card">
      <div className="event-card__header">
        <h4>{head}</h4>
        <p>{description}</p>
      </div>
      <div className="event-card__body">
        <img src={icon} />
      </div>
      <div className="event-card__footer">
        <button type="button">{buttonName}</button>
      </div>
    </div>
  );
}

export default EventCard;
