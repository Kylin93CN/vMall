import React from 'react';
import { connect } from 'dva';
import styles from './LoginPage.css';

function LoginPage() {
  return (
    <div className={styles.normal}>
      456
    </div>
  );
}

LoginPage.propTypes = {
};

export default connect()(LoginPage);
