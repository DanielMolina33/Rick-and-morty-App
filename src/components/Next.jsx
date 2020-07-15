import React from 'react';
import { FaArrowCircleRight } from 'react-icons/fa';

import '../assets/styles/components/NextAndPrev.css';

const Next = ({next}) => (
  <button className="button" onClick={next}>
    <FaArrowCircleRight/>
  </button>
);

export default Next;