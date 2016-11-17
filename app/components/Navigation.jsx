var React = require('react');
var { Link, IndexLink } = require('react-router');

var Navigation = React.createClass({
  render: function () {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">
              React Timer App
            </li>
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Timer</IndexLink>
            </li>
            <li>
              <Link to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Countdown</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <div className="menu">Created by <a href="https://github.com/xiaohu07" target="_blank"> Xiao Hu </a></div>
        </div>
      </div>
    )
  }
});

module.exports = Navigation;