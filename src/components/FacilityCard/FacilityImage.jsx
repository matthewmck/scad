import React, { useState, useEffect } from "react";
import { nineMonthsPassed } from "../../utils/dateUtils";
import Image from "../Image";
import PropTypes from "prop-types";

const propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  opened: PropTypes.string.isRequired
};

const FacilityImage = props => {
  const { image, name, opened } = props;
  const [isNew, setIsNew] = useState(false);

  useEffect(() => {
    const recentlyOpened = !nineMonthsPassed(opened);
    setIsNew(recentlyOpened);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="facility-card__container-img">
      <Image
        alt={`${name} facility`}
        className="facility-card__img"
        src={image}
      />
      {isNew && (
        <p aria-label="New Facility" className="facility-card__new">
          NEW
        </p>
      )}
    </div>
  );
};

FacilityImage.propTypes = propTypes;

export default FacilityImage;
