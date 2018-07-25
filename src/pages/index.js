import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";

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
                Microplatforms are an automation-based approach to provisioning
                and operating platforms running digital products and services,
                which emphasises autonomy of cross-functional product teams. We
                discuss the traditional approach of building a large-scale,
                shared platform and explore the resulting cost to the
                organisation, chief of which is the cost of coordination between
                teams. Instead, we offer the concept of each cross-functional
                team owning and operating a separate, self-contained platform. A
                key enabler for this approach is full automation - capturing all
                aspects of the product and the platform from provisioning to
                service orchestration and policy as source code. This approach
                results in significantly increased team autonomy and enables
                agile architecture, continuous deployment to production and
                ongoing innovation. Microplatforms allow organisations to move
                engineering effort higher up the value chain and focus on using
                technology to solve customer problems.
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
            <div className="col-3">
              <ul className="major-icons">
                <li>
                  <h4 className="box">Everything as Code</h4>
                  <span className="icon style1 major fa-code" />
                </li>
                <li>
                  <h4 className="box">Full Automation</h4>
                  <span className="icon style4 major fa-cogs" />
                </li>
                <li>
                  <h4 className="box">Immutability</h4>
                  <span className="icon style2 major fa-bolt" />
                </li>
                <li>
                  <h4 className="box">Idempotency</h4>
                  <span className="icon style5 major fa-play-circle" />
                </li>
              </ul>
            </div>
            <div className="col-9">
              <header className="major">
                <h2>Autonomous cross-functional teams are more productive</h2>
              </header>
              <p>
                Today's high performing cross-functional teams are T-shaped,
                polyglot and DevOps focused.
              </p>
              <p>
                They own their domain, and take responsibility for their product
                from top to bottom, cradle to grave. They design, build, test
                and validate, deploy, manage and maintain the software they
                produce, including being called at two o'clock in the morning
                when a problem arises.
              </p>
              <p>
                They're in the best position to be able to find problems and fix
                them, especially if they are doing Continuous Deployment into
                Production, where each deployment is tiny and the changes are
                fresh in everyone's heads. Mean Time to Recovery (MTTR) becomes
                optimally small.
              </p>
              <p>
                "Microplatforms" is a concept that encapsulates a few highly
                effective principles - full automation, everything-as-code,
                immutability, and idempotency - all leading to autonomy and
                simplicity. These principles, combined with a selection of Open
                Source tooling (like Kubernetes, Argo, Istio and some other
                small utilities), provide teams with all the control they need
                to run and manage their product, even at web scale, and in
                enterprises with strict security requirements.
              </p>
              <p>
                You can build your own Microplatforms in minutes using the ideas
                presented here. And you can move faster by adopting
                Microplatforms in your teams.
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
                Ante nunc accumsan et aclacus nascetur ac ante amet sapien sed.
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
                  <a href="#" className="button">
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
                  <a href="#" className="button">
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
                  <a href="#" className="button">
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
                <a href="#" className="button special">
                  Sign Up
                </a>
              </li>
              <li>
                <a href="#" className="button">
                  Learn More
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}

Homepage.propTypes = {
  route: React.PropTypes.object
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
