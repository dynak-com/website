import styled from "styled-components";

export const StyledAboutPageContainer = styled.section`
  position: relative;
  color: #fff;
  text-align: center;
  img {
    height: 60vh;
    margin: 10px auto;
  }
  p {
    font-size: 1.2rem;
    text-align: justify;
    background-color: transparent;
  }
  @media (min-width: 576px) {
    margin-top: 1%;
    height: 90vh;
    h2 {
      position: absolute;
      top: 5%;
      right: 1%;
      width: 65%;
      font-size: 1.3rem;
      text-align: right;
      background-color: transparent;
      z-index: 2;
    }
    img {
      position: absolute;
      top: 0;
      left: 1%;
      height: 100%;
      z-index: 1;
    }
    p {
      position: absolute;
      bottom: 0;
      right: 1%;
      width: 60%;
      font-size: 0.9rem;
      text-align: right;
      z-index: 2;
    }
  }
  @media (min-width: 600px) and (orientation: portrait) {
    h2 {
      width: 50%;
      font-size: 1.4rem;
    }
    p {
      bottom: 0;
      width: 40%;
      font-size: 1rem;
    }
  }
  @media (min-width: 684px) {
    h2 {
      font-size: 1.4rem;
    }
    p {
      font-size: 1rem;
    }
  }
  @media (min-width: 768px) {
    h2 {
      width: 75%;
      font-size: 1.6rem;
      text-align: center;
    }
    p {
      font-size: 1.2rem;
    }
  }
  @media (min-width: 768px) and (orientation: portrait) {
    h2 {
      width: 50%;
      text-align: left;
    }
    p {
      bottom: 0;
      width: 40%;
      text-align: left;
    }
  }
  @media (min-width: 800px) and (orientation: portrait) {
    h2 {
      text-align: center;
    }
  }
  @media (min-width: 992px) {
    h2 {
      font-size: 1.8rem;
      text-align: left;
    }
    p {
      width: 70%;
      font-size: 1.4rem;
      text-align: left;
    }
  }
  @media (min-width: 1024px) and (orientation: portrait) {
    p {
      width: 50%;
    }
  }
  @media screen and (min-width: 1024px) {
    p {
      bottom: 10%;
    }
  }
`;
