import React from "react";
import { connect } from "react-redux";
import { clearAmenities } from "../actions/facilityActions";
import Portal from "./Portal";

const Modal = props => {
  const { clearAmenities, list, name } = props;

  return (
    <Portal>
      <div
        className="modal fade"
        id="modal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="modal-label"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content modal__container">
            <div className="modal-header">
              <h3 className="modal__title" id="modal-label">
                {name !== undefined && name}
              </h3>
              <button
                onClick={() => clearAmenities()}
                type="button"
                className="close modal__close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p className="modal__amenities-label">Amenities</p>
              <ul className="modal__list">
                {list !== undefined &&
                  list.map((amenity, i) => (
                    <li key={`modal-amenities-${i}`}>{amenity}</li>
                  ))}
              </ul>
            </div>
            <div className="modal-footer">
              <button
                onClick={() => clearAmenities()}
                type="button"
                className="btn modal__btn"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Portal>
  );
};

const mapStateToProps = state => ({
  list: state.facilities.amenities.list,
  name: state.facilities.amenities.name
});

const mapDispatchToProps = dispatch => ({
  clearAmenities: () => dispatch(clearAmenities())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
