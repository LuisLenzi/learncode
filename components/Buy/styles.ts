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
          align-items: flex-start;
          justify-content: center;
          z-index: 10;
          padding: 7rem;
          top: 0;
          left: 0;

          .content {
            width: 100%;
            height: 100%;
            height: auto;
            display: grid;
            grid-template-columns: 1fr 1fr;
            align-items: center;
            justify-content: center;
            background-color: var(--white-solid);
            border-radius: 2rem;
            padding: 5rem;
            animation: ${appearAnimation} 1s linear;

            .information {
              padding: 0 4rem;
              width: 100%;
              height: 100%;
              display: flex;
              align-items: flex-start;
              justify-content: space-between;
              flex-direction: column;
              gap: 2rem;

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

              .product {
                width: 100%;
                height: 100%;
                display: flex;
                align-items: flex-start;
                justify-content: center;
                flex-direction: column;
                gap: 0.25rem;

                .productName {
                  font-weight: 600;
                }

                .description {
                  width: 100%;
                  font-weight: 300;
                  border-bottom: 1px solid var(--blue-solid);
                  padding-bottom: 1rem;
                }
              }

              .colors {
                width: 100%;
                height: 100%;
                display: flex;
                align-items: flex-start;
                justify-content: center;
                flex-direction: column;
                gap: 1rem;

                .colorGrid {
                  width: 100%;
                  display: grid;
                  justify-content: center;
                  align-items: center;
                  grid-template-columns: 1fr 1fr;
                  gap: 1rem;

                  .color {
                    box-shadow: 0px 5px 15px 5px rgba(0, 0, 0, 0.15);
                    background-color: transparent;
                    color: var(--blue-solid);
                    padding: 2rem;
                    border-radius: 1rem;
                    border: 3px solid var(--dark-purple);
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;
                    gap: 1rem;

                    :disabled {
                      border: 1px solid var(--blue-solid-light);
                      opacity: 0.8;
                    }

                    .colorRadius {
                      width: 3rem;
                      height: 3rem;
                      border-radius: 50%;
                      box-shadow: 0px 5px 15px 5px rgba(0, 0, 0, 0.15);
                    }

                    .colorName {
                      font-size: 1.15rem;
                      font-weight: 300;
                    }
                  }
                }
              }

              .price {
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: flex-start;

                h1 {
                  font-weight: 600;
                  font-size: 3rem;
                }
              }

              button {
                background-color: var(--blue-solid);
                color: var(--white-solid);
              }
            }
          }
        `
      : css`
          display: none;
          visibility: hidden;
        `}
`
