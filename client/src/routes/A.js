import React from 'react';
import { connect } from 'dva';

function A() {
  return (
    <div>
      A
    </div>
  );
}

A.propTypes = {
};

export default connect()(A);
