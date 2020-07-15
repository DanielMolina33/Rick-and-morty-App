import React from 'react';

import Next from './Next';
import Prev from './Prev';
import ActualPage from './ActualPage';

const Pagination = ({next, prev, page, onKeyUp}) => (
  <React.Fragment>
    <Prev prev={prev}/>
    <ActualPage onKeyUp={onKeyUp} page={page}/>
    <Next next={next}/>
  </React.Fragment>
);

export default Pagination;