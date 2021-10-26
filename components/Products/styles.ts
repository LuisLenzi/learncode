import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding: 2rem 0;
  max-width: 385px;

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

    .product {
      padding: 2rem 1rem;
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

        .title {
          color: var(--white-solid);
          font-size: 2rem;
          font-weight: 600;
          letter-spacing: -2px;
        }

        .description {
          color: var(--white-solid);
          font-size: 1rem;
          font-weight: 300;
          letter-spacing: -0.5px;
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
