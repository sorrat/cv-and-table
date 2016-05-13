import React from 'react';
import {Link} from 'react-router'


const PageLink = (props) => (
  <li>
    <Link to={props.to} activeClassName="active">
      {props.text}
    </Link>
  </li>
);

class NavigationBar extends React.Component {

  static defaultProps = {
    links: [
      {to: '/1', text: 'Page 1'},
      {to: '/2', text: 'Page 2'}
    ]
  }

  render() {
    let links = this.props.links.map(
      link => <PageLink {...link} key={link.to}/>
    );
    return <ul className="nav">{links}</ul>;
  }
}

export {NavigationBar};
