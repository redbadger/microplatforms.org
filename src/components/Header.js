import React from 'react'

class Header extends React.Component {
  render() {
    return (
      <section id="header">
        <div className="inner">
          <span className="icon major fa-cloud" />
          <h1>
            Welcome to <strong>microplatforms.org</strong>
          </h1>
          <p>Learn about how Microplatforms can help you move faster!</p>
          <ul className="actions">
            <li>
              <a href="#one" className="button scrolly">
                Discover
              </a>
            </li>
          </ul>
        </div>
      </section>
    )
  }
}

export default Header
