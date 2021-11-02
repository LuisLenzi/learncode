import styled, { keyframes } from 'styled-components'

const appearAnimation = keyframes`
  0% {
    opacity: 0;
  },
  100% {
    opacity: 1;
  }
`

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding: 2rem 0;
  gap: 1rem;

  h1 {
    margin-left: 2rem;
    padding-bottom: 1rem;
    color: var(--blue-solid);
    font-size: 2rem;
    font-weight: 800;
    letter-spacing: -2px;
  }

  .box {
    background-color: var(--iphone);
    border-radius: 17.5px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: ${appearAnimation} 1s linear;
    height: 20rem;


    @media (max-width: 595px) {
      height: auto;
    }

    .boxContent {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 675px;
      padding: 0 2rem;
      gap: 3rem;

      @media (max-width: 550px) {
        justify-content: center;
      }

      .product {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        gap: 1rem;

        @media (max-width: 595px) {
          align-items: center;
        }

        .information {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          flex-direction: column;
          gap: 0.5rem;

          @media (max-width: 595px) {
            text-align: center;
            align-items: center;
          }

          .title {
            color: var(--white-solid);
            font-size: 2.5rem;
            font-weight: 600;
            letter-spacing: -2px;
            line-height: 2.5rem;
          }

          .description {
            color: var(--white-solid);
            font-size: 1.15rem;
            font-weight: 300;
            letter-spacing: -0.5px;
            line-height: 1.15rem;
          }
        }

        .price {
          color: var(--white-solid);
          font-size: 2.5rem;
          font-weight: 600;
          letter-spacing: -1px;
        }
      }

      .image {
        display: flex;
        align-items: center;
        justify-content: center;

        @media (max-width: 595px) {
        }
      }
    }
  }

  .slider {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    height: 3.5rem;

    button {
      width: 2rem;
      padding: 0.45rem 2.75rem;
      background-color: var(--blue-solid);

      :hover {
        transform: scale(1.1) !important;
        background-color: var(--blue-solid);
      }
    }
  }
`
