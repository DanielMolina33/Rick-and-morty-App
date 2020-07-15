import React from 'react';
import { FaArrowCircleLeft } from 'react-icons/fa';

import '../assets/styles/components/NextAndPrev.css';

const Prev = ({prev}) => (
  <button className="button" onClick={prev}>
    <FaArrowCircleLeft/>
  </button>
);

export default Prev;