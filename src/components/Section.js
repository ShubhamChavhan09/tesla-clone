import React from "react";
import styled from "styled-components";

const Section = ({
  title,
  description,
  backgroundImg,
  LeftButtonTxt,
  RightButtonTxt,
}) => {
  return (
    <Wrapper bgImage={backgroundImg}>
      <Text>
        <h1>{title}</h1>
        <p>{description}</p>
      </Text>
      <Button>
        <ButtonContainer>
          <LeftButton>{LeftButtonTxt}</LeftButton>
          <RightButton>{RightButtonTxt}</RightButton>
        </ButtonContainer>
        <DownArrow src="/images/down-arrow.svg" />
      </Button>
    </Wrapper>
  );
};

export default Section;

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: ${(props) => `url('/images/${props.bgImage}')`};
`;

const Text = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  background: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 32px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`;

const RightButton = styled(LeftButton)`
  background: white;
  opacity: 0.65;
  color: #393c41;
`;

const DownArrow = styled.img`
  height: 40px;
  animation: animateDown infinite 1.5s;
  //   overflow-x: hidden;
`;

const Button = styled.div``;
