import React from "react";

const Footer = () => (
  <footer className="footer__container">
    <div className="container footer__container-top">
      <article className="footer__about">
        <h2>About SCAD</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Pellentesque sit amet porttitor eget. Ornare massa eget egestas purus
          viverra. Sed nisi lacus sed viverra tellus in.
        </p>
      </article>
      <article className="footer__faq">
        <h2>Frequently asked questions</h2>
        <h3>Facilisis mauris sit?</h3>
        <p>Mauris a diam maecenas sed enim ut sem.</p>
        <h3>Amet massa vitae?</h3>
        <p>
          Eu ultrices vitae auctor eu. Rhoncus dolor purus non enim praesent
          elementum.
        </p>
        <h3>Nunc non blandit?</h3>
        <p>
          Ullamcorper malesuada proin libero nunc consequat interdum varius.
        </p>
        <h3>Tellus in metus?</h3>
        <p>
          Odio tempor orci dapibus ultrices. Euismod elementum nisi quis
          eleifend quam.
        </p>
        <h3>Duis ut diam?</h3>
        <p>Urna molestie at elementum eu facilisis sed odio morbi quis.</p>
      </article>
      <article className="footer__contact">
        <h2>Contact us</h2>
        <h3>SAVANNAH</h3>
        <address>
          2244 W. Main St.,
          <br />
          Savannah, Georgia
          <br />
          <a href="mailto:testsavannah@scad.edu">testsavannah@scad.edu</a>
          <br />
          921.888.9999
        </address>
        <h3>ATLANTA</h3>
        <address>
          9876 Peach Rd,
          <br />
          Atlanta, Georgia
          <br />
          <a href="mailto:testatl@scad.edu">testatl@scad.edu</a>
          <br />
          404.111.3333
        </address>
        <h3>MIAMI</h3>
        <address>
          22222 Right Ave,
          <br />
          Miami, Florida
          <br />
          <a href="mailto:testmiami@scad.edu">testmiami@scad.edu</a>
          <br />
          305.555.1111
        </address>
      </article>
    </div>
    <div className="footer__container-bottom">
      <div className="container">
        &copy; 2019 (SCAD) Savannah College of Art and Design
      </div>
    </div>
  </footer>
);

export default Footer;
