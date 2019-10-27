import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getFacilities } from "./actions/facilityActions";
import Header from "./components/Header";
import Locations from "./components/Locations";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import "./styles/main.scss";

const App = props => {
  useEffect(() => {
    props.getFacilities();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <React.Fragment>
      <Header />
      <main>
        <Locations />
      </main>
      <Footer />
      <Modal />
    </React.Fragment>
  );
};

const mapDispatchToProps = dispatch => ({
  getFacilities: () => dispatch(getFacilities())
});

export default connect(
  null,
  mapDispatchToProps
)(App);
