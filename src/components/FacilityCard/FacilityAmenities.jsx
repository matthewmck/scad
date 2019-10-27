import React from "react";
import { connect } from "react-redux";
import { setAmenities } from "../../actions/facilityActions";
import PropTypes from "prop-types";

const propTypes = {
  amenities: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired
};

const FacilityAmenities = props => {
  const { amenities, name, setAmenities } = props;
  const displayAmenities = () =>
    setAmenities({
      name,
      list: amenities
    });

  return (
    <div className="facility-card__container-btn">
      <button
        onClick={displayAmenities}
        className="facility-card__btn"
        type="button"
        data-toggle="modal"
        data-target="#modal"
      >
        VIEW AMENITIES
      </button>
    </div>
  );
};

FacilityAmenities.propTypes = propTypes;

const mapDispatchToProps = dispatch => ({
  setAmenities: obj => dispatch(setAmenities(obj))
});

export default connect(
  null,
  mapDispatchToProps
)(FacilityAmenities);
