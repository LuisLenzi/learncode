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

  .content {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: center;
    gap: 3rem;

    @media (max-width: 550px) {
      display: flex;
      flex-direction: column;
    }
  }

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
    flex-direction: column;
    animation: ${appearAnimation} 0.5s linear;

    .product {
      padding: 2rem 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 2rem;

      .information {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
        gap: 0.25rem;

        .title {
          color: var(--white-solid);
          font-size: 2rem;
          font-weight: 600;
          letter-spacing: -2px;
          line-height: 2rem;
        }

        .description {
          color: var(--white-solid);
          font-size: 1rem;
          font-weight: 300;
          letter-spacing: -0.5px;
          line-height: 1rem;
        }
      }

      .buy {
        height: 6rem;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 1rem;

        @media (max-width: 550px) {
          height: auto;
        }

        .promotion {
          display: flex;
          align-items: center;
          justify-content: center;

          span {
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
      }
    }

    .image {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
  }
`
