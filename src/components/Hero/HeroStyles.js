import styled from "styled-components";
import { Button } from "../../globalStyles";

export const HeroSection = styled.section`
  height: 100vh;
  width: 100%;
  background-position: center;
  background-size: cover;
  box-shadow: inset 0 0 0 1000px rgba (0, 0, 0, 0.2);
`;

export const HeroVideo = styled.video`
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1));
  object-fit: cover;
  z-index: -1;
  position: relative;
`;

export const HeroText = styled.p`
  margin-bottom: 35px;
  font-size: clamp(0.9rem, 1.5vw, 1.3rem);
  line-height: 24px;
  text-align: center;
  letter-spacing: 2px;
  padding: 0 1rem;
  color: #fff;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-flow: wrap;
  gap: 0.5rem;
`;

export const HeroButton = styled(Button)`
  color: black;

  &:before {
    background: #fff;
    height: 500%;
  }

  &:hover:before {
    height: 0%;
  }

  &:hover {
    color: white;
  }
`;
