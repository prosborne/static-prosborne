import styled, { keyframes } from 'styled-components';

const KeyFrames = keyframes`
  0% {
    fill: ${props => props.theme.orange};
  }
  100% {
    fill: ${props => props.theme.purple};
  }
`

export default KeyFrames;
