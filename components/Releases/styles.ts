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
  max-width: 400px;
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
    justify-content: flex-start;
    flex-direction: column;
    margin-bottom: 4rem;
    animation: ${appearAnimation} 0.5s linear;

    .product {
      padding: 3rem 2rem 4rem 2rem;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: column;
      gap: 2rem;

      .information {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
        gap: .5rem;

        .title {
          color: var(--white-solid);
          font-size: 2.5rem;
          font-weight: 600;
          letter-spacing: -2px;
          line-height: 2.5rem;
          max-width: 95%;
        }

        .description {
          color: var(--white-solid);
          font-size: 1.15rem;
          font-weight: 300;
          letter-spacing: -0.5px;
          line-height: 1.15rem;
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
