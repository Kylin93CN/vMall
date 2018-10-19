import React from 'react';
import { connect } from 'dva';
import { Row, Col } from 'antd';
import styles from './IndexPage.css';

const IndexPage = ({children}) => {
  return (
    <div className={styles.normal}>
      <Row className={styles.header}>
        <Col span={24}>header</Col>
      </Row>
      <Row className={styles.body}>
        <Col className={styles.sider} span={6}>sider</Col>
        <Col className={styles.main} span={18}>
          {children}
        </Col>
      </Row>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
