import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowCircleLeft } from 'react-icons/fa';

import '../assets/styles/components/NextAndPrev.css';

const Back = () => (
  <Link to="/" className="button">
    <FaArrowCircleLeft/>
  </Link>
);

export default Back;