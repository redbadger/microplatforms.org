import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import PropTypes from "prop-types";

import Layout from "../components/layout";
import whitePaper from "../assets/images/white-paper.png";
import pic02 from "../assets/images/pic02.jpg";
import pic03 from "../assets/images/pic03.jpg";
import pic04 from "../assets/images/pic04.jpg";

var paperLink =
  "https://github.com/redbadger/microplatforms-whitepaper/blob/616e53c5b75c06493c49d1819628e857e27ca39f/paper.pdf";

class Homepage extends React.Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title;

    return (
      <Layout>
        <div>
          <Helmet title={siteTitle} />

          <section id="one" className="main style1">
            <div className="grid-wrapper">
              <div className="col-6">
                <header className="major">
                  <h2>
                    Read the <a href={paperLink}>White Paper</a>
                  </h2>
                </header>
                <h3>Abstract</h3>
                <p>
                  Microplatforms are an automation-based approach to
                  provisioning and operating platforms running digital products
                  and services, which emphasises autonomy of cross-functional
                  product teams. We discuss the traditional approach of building
                  a large-scale, shared platform and explore the resulting cost
                  to the organisation, chief of which is the cost of
                  coordination between teams. Instead, we offer the concept of
                  each cross-functional team owning and operating a separate,
                  self-contained platform. A key enabler for this approach is
                  full automation - capturing all aspects of the product and the
                  platform from provisioning to service orchestration and policy
                  as source code. This approach results in significantly
                  increased team autonomy and enables agile architecture,
                  continuous deployment to production and ongoing innovation.
                  Microplatforms allow organisations to move engineering effort
                  higher up the value chain and focus on using technology to
                  solve customer problems.
                </p>
              </div>
              <div className="col-6">
                <span className="image fit">
                  <a href={paperLink}>
                    <img src={whitePaper} alt="Microplatforms white paper" />
                  </a>
                </span>
              </div>
            </div>
          </section>

          <section id="two" className="main style2">
            <div className="grid-wrapper">
              <div className="col-6">
                <ul className="major-icons">
                  <li>
                    <span className="icon style1 major fa-code" />
                  </li>
                  <li>
                    <span className="icon style2 major fa-bolt" />
                  </li>
                  <li>
                    <span className="icon style3 major fa-camera-retro" />
                  </li>
                  <li>
                    <span className="icon style4 major fa-cog" />
                  </li>
                  <li>
                    <span className="icon style5 major fa-desktop" />
                  </li>
                  <li>
                    <span className="icon style6 major fa-calendar" />
                  </li>
                </ul>
              </div>
              <div className="col-6">
                <header className="major">
                  <h2>
                    Lorem ipsum dolor adipiscing
                    <br />
                    amet dolor consequat
                  </h2>
                </header>
                <p>
                  Adipiscing a commodo ante nunc accumsan interdum mi ante
                  adipiscing. A nunc lobortis non nisl amet vis volutpat aclacus
                  nascetur ac non. Lorem curae eu ante amet sapien in tempus ac.
                  Adipiscing id accumsan adipiscing ipsum.
                </p>
                <p>
                  Blandit faucibus proin. Ac aliquam integer adipiscing enim non
                  praesent vis commodo nunc phasellus cubilia ac risus accumsan.
                  Accumsan blandit. Lobortis phasellus non lobortis dit varius
                  mi varius accumsan lobortis. Blandit ante aliquam lacinia
                  lorem lobortis semper morbi col faucibus vitae integer
                  placerat accumsan orci eu mi odio tempus adipiscing adipiscing
                  adipiscing curae consequat feugiat etiam dolore.
                </p>
                <p>
                  Adipiscing a commodo ante nunc accumsan interdum mi ante
                  adipiscing. A nunc lobortis non nisl amet vis volutpat aclacus
                  nascetur ac non. Lorem curae eu ante amet sapien in tempus ac.
                  Adipiscing id accumsan adipiscing ipsum.
                </p>
              </div>
            </div>
          </section>

          <section id="three" className="main style1 special">
            <div className="grid-wrapper">
              <div className="col-12">
                <header className="major">
                  <h2>Adipiscing amet consequat</h2>
                </header>
                <p>
                  Ante nunc accumsan et aclacus nascetur ac ante amet sapien
                  sed.
                </p>
              </div>

              <div className="col-4">
                <span className="image fit">
                  <img src={pic02} alt="" />
                </span>
                <h3>Magna feugiat lorem</h3>
                <p>
                  Adipiscing a commodo ante nunc magna lorem et interdum mi ante
                  nunc lobortis non amet vis sed volutpat et nascetur.
                </p>
                <ul className="actions">
                  <li>
                    <a href="/" className="button">
                      More
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-4">
                <span className="image fit">
                  <img src={pic03} alt="" />
                </span>
                <h3>Magna feugiat lorem</h3>
                <p>
                  Adipiscing a commodo ante nunc magna lorem et interdum mi ante
                  nunc lobortis non amet vis sed volutpat et nascetur.
                </p>
                <ul className="actions">
                  <li>
                    <a href="/" className="button">
                      More
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-4">
                <span className="image fit">
                  <img src={pic04} alt="" />
                </span>
                <h3>Magna feugiat lorem</h3>
                <p>
                  Adipiscing a commodo ante nunc magna lorem et interdum mi ante
                  nunc lobortis non amet vis sed volutpat et nascetur.
                </p>
                <ul className="actions">
                  <li>
                    <a href="/" className="button">
                      More
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section id="four" className="main style2 special">
            <div className="container">
              <header className="major">
                <h2>Ipsum feugiat consequat?</h2>
              </header>
              <p>Sed lacus nascetur ac ante amet sapien.</p>
              <ul className="actions uniform">
                <li>
                  <a href="/" className="button special">
                    Sign Up
                  </a>
                </li>
                <li>
                  <a href="/" className="button">
                    Learn More
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </Layout>
    );
  }
}

Homepage.propTypes = {
  route: PropTypes.object
};

export default Homepage;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
