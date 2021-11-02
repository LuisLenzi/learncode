import styled, { css, keyframes } from 'styled-components'

const appearAnimation = keyframes`
  0% {
    opacity: 0;
  },
  100% {
    opacity: 1;
  }
`

interface ContainerProps {
  show: boolean
}

export const Container = styled.div<ContainerProps>`
  ${(props) =>
    props.show
      ? css`
          position: fixed;
          background: var(--gray-solid-plus-transparency);
          height: 100vh;
          width: 100vw;
          overflow: auto;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
          padding: 6rem;
          top: 0;
          left: 0;

          @media (max-width: 1024px) {
            padding: 8rem 0 0 0;
          }

          .close {
            cursor: pointer;
            right: 3rem;
            top: 3rem;
            position: absolute;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            transition: all ease-in-out 0.3s;

            svg {
              path {
                stroke: var(--white-solid);
              }
            }

            :hover {
              transform: scale(1.35) rotate(180deg);
            }
          }

          .content {
            width: 100%;
            max-width: 750px;
            display: grid;
            grid-template-columns: 1fr 1fr;
            align-items: center;
            justify-content: center;
            background-color: var(--white-solid);
            border-radius: 2rem;
            padding: 3rem;
            animation: ${appearAnimation} 1s linear;

            @media (max-width: 595px) {
              flex-direction: column;
              height: 95%;
              gap: 2rem;
            }

            .messageBox {
              gap: 2rem;
              display: flex;
              flex-direction: column;

              h1 {
                font-weight: 600;
                line-height: 2.5rem;
              }
              h3 {
                letter-spacing: -0.5px;
              }
            }

            button {
              background-color: var(--blue-solid);
              color: var(--white-solid);
            }
          }
        `
      : css`
          display: none;
          visibility: hidden;
        `}
`
