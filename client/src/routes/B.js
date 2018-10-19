import React from 'react';
import { connect } from 'dva';

function B() {
  return (
    <div>
      B
    </div>
  );
}

B.propTypes = {
};

export default connect()(B);
