import React from 'react';

import '../assets/styles/components/ActualPage.css';

const ActualPage = ({onKeyUp, page}) => (
  // <p className="actualPage">{page}</p>
  <input type="number" onKeyUp={onKeyUp} defaultValue={page} className="actualPage"/>
);

export default ActualPage;