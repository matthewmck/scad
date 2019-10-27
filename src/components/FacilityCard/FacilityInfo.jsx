import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const propTypes = {
  desc: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired,
  locationID: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
};

const FacilityInfo = props => {
  const { desc, hours, locationID, locations, name } = props;
  const [locationName, setLocationName] = useState("");

  useEffect(() => {
    const location = locations.filter(loc => loc.id === locationID);
    setLocationName(location[0].name);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="facility-card__container-info">
      <h2 className="facility-card__header">{name}</h2>
      <p className="facility-card__location">{`SCAD ${locationName}`}</p>
      <hr className="facility-card__hr" />
      <p className="facility-card__hours">{hours}</p>
      <div className="facility-card__desc">
        <p>{desc}</p>
      </div>
    </div>
  );
};

FacilityInfo.propTypes = propTypes;

const mapStateToProps = state => ({
  locations: state.facilities.list.locations
});

export default connect(mapStateToProps)(FacilityInfo);
