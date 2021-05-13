import React from 'react';
import styled from 'styled-components';
import FlexDiv from '../../components/FlexDiv';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: auto;
  min-height: 100vh;
`;

const Background = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url('https://www.thecocktaildb.com//images//media//drink//metwgh1606770327.jpg');
  background-color: rgba(26, 85, 164, 0.8);
  background-blend-mode: soft-light;
`;

const Split = styled.span`
  width: 3px;
  height: 100%;
  background-color: #ffff;
`;

const BodyContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  justify-content: space-between;
`;

const DescriptionPage = () => (
  <Container>
    <Background>
      <h1
        style={{
          fontFamily: "'Brush Script MT', cursive",
          fontSize: '6em',
          color: 'white',
          margin: '0',
        }}
      >
        Manhattan
      </h1>
      <BodyContainer>
        <FlexDiv
          direction="column"
          alignItems="center"
          style={{ width: '50%' }}
        >
          <h1
            style={{
              fontFamily: "'Brush Script MT', cursive",
              fontSize: '4em',
              color: 'white',
              margin: '0',
            }}
          >
            Ingredients
          </h1>
          <ol type="I">
            <li style={{ color: 'white', fontSize: '1.5em' }}>Whiskey</li>
            <li style={{ color: 'white', fontSize: '1.5em' }}>Whiskey</li>
            <li style={{ color: 'white', fontSize: '1.5em' }}>Whiskey</li>
            <li style={{ color: 'white', fontSize: '1.5em' }}>Whiskey</li>
            <li style={{ color: 'white', fontSize: '1.5em' }}>Whiskey</li>
          </ol>
        </FlexDiv>
        <Split />
        <FlexDiv
          direction="column"
          alignItems="center"
          style={{ width: '50%', padding: '1em' }}
        >
          <h1
            style={{
              fontFamily: "'Brush Script MT', cursive",
              fontSize: '4em',
              color: 'white',
              margin: '0',
            }}
          >
            Instructions
          </h1>
        </FlexDiv>
      </BodyContainer>
    </Background>
  </Container>
);

export default DescriptionPage;
