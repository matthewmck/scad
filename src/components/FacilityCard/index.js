import React from "react";
import PropTypes from "prop-types";
import FacilityImage from "./FacilityImage";
import FacilityInfo from "./FacilityInfo";
import FacilityAmenities from "./FacilityAmenities";

const propTypes = {
  facility: PropTypes.object.isRequired
};

const FacilityCard = props => {
  const { facility } = props;

  return (
    <article className="facility-card">
      <div className="facility-card__container">
        <FacilityImage
          image={facility.image}
          name={facility.name}
          opened={facility.date_opened}
        />
        <FacilityInfo
          desc={facility.description}
          hours={facility.hours}
          locationID={facility.location}
          name={facility.name}
        />
      </div>
      <FacilityAmenities
        amenities={facility.amenities[0]}
        name={facility.name}
      />
    </article>
  );
};

FacilityCard.propTypes = propTypes;

export default FacilityCard;
