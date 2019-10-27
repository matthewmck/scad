import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const propTypes = {
  children: PropTypes.node.isRequired
};
const portalRoot = document.getElementById("portal");

const Portal = props => {
  const { children } = props;
  const container = useRef();

  useEffect(() => {
    portalRoot.appendChild(container.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const savedRef = container.current;
    return () => {
      portalRoot.removeChild(savedRef);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return ReactDOM.createPortal(
    <div ref={container}>{children}</div>,
    portalRoot
  );
};

Portal.propTypes = propTypes;

export default Portal;
