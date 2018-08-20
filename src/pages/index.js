import React from "react";

import Layout from "../components/layout";
import whitePaper from "../assets/images/white-paper.png";
import pic02 from "../assets/images/pic02.jpg";
import pic03 from "../assets/images/pic03.jpg";
import pic04 from "../assets/images/pic04.jpg";

var paperLink =
  "https://github.com/redbadger/microplatforms-whitepaper/blob/616e53c5b75c06493c49d1819628e857e27ca39f/paper.pdf";

export default () => (
  <Layout>
    <div>
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
              discuss the traditional approach of building a large-scale, shared
              platform and explore the resulting cost to the organisation, chief
              of which is the cost of coordination between teams. Instead, we
              offer the concept of each cross-functional team owning and
              operating a separate, self-contained platform. A key enabler for
              this approach is full automation - capturing all aspects of the
              product and the platform from provisioning to service
              orchestration and policy as source code. This approach results in
              significantly increased team autonomy and enables agile
              architecture, continuous deployment to production and ongoing
              innovation. Microplatforms allow organisations to move engineering
              effort higher up the value chain and focus on using technology to
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
          <div className="col-3">
            <ul className="major-icons">
              <li>
                <span className="icon style1 major fa-code" />
              </li>
              <li>
                <span className="icon style4 major fa-cogs" />
              </li>
              <li>
                <span className="icon style2 major fa-bolt" />
              </li>
              <li>
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
              from top to bottom, cradle to grave (if there is even a grave).
              They design, build, test and validate, deploy, manage and maintain
              the software they produce, including being called at two o'clock
              in the morning when a problem arises.
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
              Source tooling (like Kubernetes, Argo, Istio and some other small
              utilities), provide teams with all the control they need to run
              and manage their product, even at web scale, and in enterprises
              with strict security requirements.
            </p>
            <p>
              You can build your own Microplatforms in minutes using the ideas
              presented here. And you can move faster by adopting Microplatforms
              in your teams.
            </p>
          </div>
        </div>
      </section>

      <section id="four" className="main style2 special">
        <div className="grid-wrapper">
          <div className="col-12">
            <header className="major">
              <h2>The principles behind microplatforms</h2>
            </header>
            <p>
              Microplatforms are just a collection of concepts and principles.
            </p>
          </div>

          <div className="col-4">
            <span className="image fit">
              <img src={pic02} alt="" />
            </span>
            <h3>Full Automation (Everything as Code)</h3>
            <p>
              Microplatforms consist entirely of code. Just code in a Github
              repo - Application as code, Configuration as code, Container
              orchestration as code, Pipelines (CI Build) as code, Tests as
              code, Deployment as code, Policy as code, and, of course,
              Infrastructure as code.
            </p>
            <p>
              This enables us to stamp out identical microplatforms for each
              environment in a 100% automated way. It becomes repeatable and
              cheap and enables Agile (or evolutionary) architecture. No humans
              are allowed to make changes to anything other than code, so that
              knowledge in changes over time is captured. As a side product we
              get a full, cryptographically strong, audit trail, which enables
              forensics. Overall there's less need for specialist knowledge in
              day-to-day operations and so the “lottery factor” (or bus-factor)
              is increased.
            </p>
            <ul className="actions">
              <li>
                <a href="/" className="button">
                  Learn More
                </a>
              </li>
            </ul>
          </div>
          <div className="col-4">
            <span className="image fit">
              <img src={pic03} alt="" />
            </span>
            <h3>Immutability and Idempotency</h3>
            <p>
              Immutable Infrastructure can only be created and destroyed. It
              cannot be modified in place. Change happens by improving the code
              and replacing instances with new ones made from the new evolved
              code. This forward-only paradigm leads to reliable, repeatable,
              identical environments for your application.
            </p>
            <p>
              Idempotency means we can perform the same operation twice with no
              additional effect.
            </p>
            <ul className="actions">
              <li>
                <a href="/" className="button">
                  Learn More
                </a>
              </li>
            </ul>
          </div>
          <div className="col-4">
            <span className="image fit">
              <img src={pic04} alt="" />
            </span>
            <h3>Autonomy and Simplicity</h3>
            <p>
              Adipiscing a commodo ante nunc magna lorem et interdum mi ante
              nunc lobortis non amet vis sed volutpat et nascetur.
            </p>
            <ul className="actions">
              <li>
                <a href="/" className="button">
                  Learn More
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="four" className="main style2 special">
        <div className="container">
          <header className="major">
            <h2>Join our community</h2>
          </header>
          <p>
            Join the Microplatforms community now by signing up for the meetup.
          </p>
          <ul className="actions uniform">
            <li>
              <a href="/" className="button special">
                Sign Up
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </Layout>
);
