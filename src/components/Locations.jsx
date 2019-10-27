import React from "react";
import { connect } from "react-redux";
import LocationSelect from "./LocationSelect";
import FacilityCard from "./FacilityCard";

const Locations = props => {
  const { facilities, pickedLocation } = props;
  return (
    <React.Fragment>
      <LocationSelect />
      <div className="container locations__container">
        {facilities !== undefined &&
          facilities.map((facility, i) => {
            if (
              pickedLocation === "all" ||
              Number(pickedLocation) === facility.location
            ) {
              return (
                <FacilityCard key={`locations-${i}`} facility={facility} />
              );
            }
            return null;
          })}
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  facilities: state.facilities.list.facilities,
  pickedLocation: state.facilities.pickedLocation
});

export default connect(mapStateToProps)(Locations);
