import React from 'react';

import PropTypes from "prop-types";

// importing style component from styled component.
import styled from 'styled-components'

const StyledBadge = styled.badge`
    background: #f3f3f3;
    color: #0000;
    padding: 5px;
    border-radius: 50%;
    `;

export const Badge = ({content, size}) => {
    return <StyledBadge size={size}>{content}</StyledBadge>;
  };
    
  Badge.propTypes = {
    /**
     * Pass children to label the button.
     */
    children: PropTypes.string,
    };
  
  // Badge.defaultProps = {
  //   content: null,
  //   size: "small",
  // };
  