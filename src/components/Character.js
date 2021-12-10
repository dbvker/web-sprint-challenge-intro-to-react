// Write your Character component here
import React from "react";

import styled from "styled-components";

const StyledCharacter = styled.div`
    width: 60%;
    margin: 0 auto;
  background-color: #BA7F3D;
  color: ${pr => pr.theme.secondaryColor};
  padding: 20px;
  margin-bottom: 20px;
`

const Character = (props) => {
    const { character } = props;
  return (
      <StyledCharacter>
          {character.name}
      </StyledCharacter>
  );
}

export default Character;