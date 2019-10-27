import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { pickedLocation } from "../actions/facilityActions";

const LocationSelect = props => {
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    if (props.locations !== undefined) setDisplay(true);
  }, [props.locations]);

  if (display) {
    return (
      <div className="container">
        <nav className="location-select__container">
          <label className="location-select__label" htmlFor="location-selector">
            Change Facility Location
          </label>
          <select
            id="location-selector"
            className="location-select__select"
            onChange={e => props.pickedLocation(e.target.value)}
          >
            <option className="location-select__option" value="all">
              View All
            </option>
            {props.locations.map((location, i) => (
              <option
                className="location-select__option"
                key={`location-select-${i}`}
                data-type={location.id}
                value={location.id}
              >
                {`View ${location.name}`}
              </option>
            ))}
          </select>
        </nav>
      </div>
    );
  }

  return null;
};

const mapStateToProps = state => ({
  locations: state.facilities.list.locations
});

const mapDispatchToProps = dispatch => ({
  pickedLocation: value => dispatch(pickedLocation(value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationSelect);
