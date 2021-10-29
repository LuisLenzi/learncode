import styled from 'styled-components'

export const Container = styled.button`
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
    padding: .75rem 2.5rem;
  }

  :hover {
    transform: scale(1.025);
    background-color: var(--blue-solid);
    color: var(--white-solid);
  }

  :disabled {
    opacity: 0.35;
  }
`
