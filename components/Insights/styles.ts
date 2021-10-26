import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding: 2rem 0;

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
    justify-content: space-between;
    padding: 0rem 5rem;

    .product {
      display: flex;
      align-items: flex-start;
      justify-content: center;
      flex-direction: column;
      gap: 1rem;

      .information {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;

        .title {
          color: var(--white-solid);
          font-size: 2.5rem;
          font-weight: 600;
          letter-spacing: -2px;
        }

        .description {
          color: var(--white-solid);
          font-size: 1.15rem;
          font-weight: 300;
          letter-spacing: -0.5px;
        }
      }

      .price {
        color: var(--white-solid);
        font-size: 2.5rem;
        font-weight: 500;
        letter-spacing: -1px;
      }
    }

    .image {
      display: flex;
      align-items: center;
      justify-content: center;
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

      :hover {
        transform: scale(1.1) !important;
        background-color: var(--white-solid);
      }
    }
  }
`
