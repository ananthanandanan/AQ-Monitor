/* Side Menu */
// Dashboard

import styles from './BasicLayout.module.css';
import SideNav from '../components/SideNav';

function BasicLayout(props) {
  return (
    <div className={styles.content}>
        <SideNav/>
      {props.children}
    </div>
  );
}

export default BasicLayout;