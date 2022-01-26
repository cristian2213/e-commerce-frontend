import React from 'react';
// import styles from './Layout.module.css';

function Layout(props) {
  return <div {...props}>{props.children}</div>;
}

export default Layout;
