import React from 'react';

import { Container } from './styles';

export default function Header() {
  return(
    <Container>
      <h1>
        <img
          src="https://pipestyle.staticpipefy.com/default/images/logo-white.svg"
          alt="pipefy"
        />
      </h1>
    </Container>
  );
}
