import React from 'react';
import StyledNestedOverall from '../styles/StyledNestedOverall';
import FetchHOC from '../HOCs/FetchHOC';

function NestedIngredients() {
  return (
    <StyledNestedOverall>
      <p>nested Ingredients</p>
    </StyledNestedOverall>
  );
}

export default FetchHOC(NestedIngredients);
