import styled, { css, keyframes } from 'styled-components';

interface ContainerProps {
  show: boolean;
}

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

export const Container = styled.div<ContainerProps>`
  ${props =>
    props.show
      ? css`

  position: fixed;
  background: var(--gray-solid-plus-transparency);
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 175;
  top: 0;
  `
      : css`
    display: none;
    visibility: hidden;
  `}
`

export const LoadingSpinner = styled.div`
  border: 4px solid #313131;
  border-left-color: var(--white-solid);
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;