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
          padding: 6rem;
          top: 0;
          left: 0;

          @media (max-width: 1024px) {
            padding: 8rem 0 0 0;
          }

          .content {
            width: 100%;
            height: auto;
            display: grid;
            grid-template-columns: 1fr 1fr;
            align-items: center;
            justify-content: center;
            background-color: var(--white-solid);
            border-radius: 2rem;
            padding: 3rem 2rem;
            animation: ${appearAnimation} 1s linear;

            .mobileButton {
              display: none;

              @media (max-width: 1024px) {
                width: 100%;
                color: var(--blue-solid);
                font-size: 0.9rem;
                padding: 1.05rem 3.75rem;
                background-color: var(--white-solid);
                box-shadow: 0px 5px 15px 5px rgba(0, 0, 0, 0.25);
                transition: all 0.3s ease-in-out;
                display: flex;
                align-items: center;
                justify-content: center;
                letter-spacing: -0.75px;
                font-weight: 600;
                gap: 1rem;
                border-radius: 25px;
                cursor: pointer;
                position: fixed;
                height: 4rem;
                bottom: 0;
                left: 0;
                border-radius: 25px 25px 0 0px;

                @media (max-width: 768px) {
                  padding: 0.75rem 2.5rem;
                }

                &:hover {
                  transform: scale(1.025);
                  background-color: var(--blue-solid);
                  color: var(--white-solid);
                }

                &:disabled {
                  opacity: 0.35;
                  transform: scale(1);
                }
              }
            }

            .desktopButton {
              width: 100%;
              color: var(--blue-solid);
              font-size: 0.9rem;
              padding: 1.05rem 3.75rem;
              background-color: var(--white-solid);
              box-shadow: 0px 5px 15px 5px rgba(0, 0, 0, 0.25);
              transition: all 0.3s ease-in-out;
              display: flex;
              align-items: center;
              justify-content: center;
              letter-spacing: -0.75px;
              font-weight: 600;
              gap: 1rem;
              border-radius: 25px;
              cursor: pointer;

              @media (max-width: 768px) {
                padding: 0.75rem 2.5rem;
              }

              &:hover {
                transform: scale(1.025);
                background-color: var(--blue-solid);
                color: var(--white-solid);
              }

              &:disabled {
                opacity: 0.35;
                transform: scale(1);
              }

              @media (max-width: 1024px) {
                display: none;
              }
            }

            @media (max-width: 1024px) {
              display: flex;
              flex-direction: column;
              gap: 2rem;
              padding-bottom: 4rem;
            }

            .image {
              transition: all ease-in-out 2s;
            }

            .imagePlusQuantity {
              width: 100%;
              height: 100%;
              display: flex;
              align-items: center;
              justify-content: space-between;
              flex-direction: column;
              gap: 2rem;

              .quantity {
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 2rem;

                div {
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  gap: 2rem;

                  .quantityNumber {
                    font-size: 1.5rem;
                    font-weight: 600;
                  }

                  button {
                    padding: 1rem 1.15rem;
                    width: auto;
                    height: auto;
                    border-radius: 0.75rem;
                    background-color: var(--blue-solid);
                    color: var(--white-solid);
                  }
                }
              }

              .inventory {
                font-size: 0.9rem;
                color: var(--gray-solid);
                letter-spacing: -0.5px;
                opacity: 0.8;
                padding: 1rem 0;
              }
            }

            .information {
              padding: 0 4rem;
              width: 100%;
              height: 100%;
              display: flex;
              align-items: flex-start;
              justify-content: space-between;
              flex-direction: column;
              gap: 2rem;

              @media (max-width: 1024px) {
                padding: 0 4rem 2rem 4rem;
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

                &:hover {
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
                  line-height: 2rem;
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
                    cursor: pointer;
                    transition: all ease-in-out 0.3s;

                    &:disabled {
                      border: 1px solid var(--blue-solid-light);
                      opacity: 0.8;
                    }

                    &:hover {
                      transform: scale(1.025);
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
                      line-height: 1.15rem;
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
                gap: 2rem;

                @media (max-width: 475px) {
                  flex-direction: column;
                  align-items: center;
                  text-align: center;
                }

                .lined {
                  font-size: 2rem;
                  text-decoration: line-through;
                  opacity: 0.5;
                }

                h1 {
                  font-weight: 600;
                  font-size: 3rem;
                }

                span {
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  color: var(--white-solid);
                  background-color: var(--dark-purple);
                  border-radius: 1rem;
                  padding: 1rem;
                  font-size: 1.25rem;
                  font-weight: 800;
                  letter-spacing: -1px;
                  line-height: 1.5rem;
                  box-shadow: 0px 5px 15px 5px rgba(0, 0, 0, 0.25);
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
