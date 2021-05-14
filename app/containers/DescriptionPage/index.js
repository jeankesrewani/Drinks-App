/* eslint-disable indent */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Spin from 'antd/lib/spin';
import * as constants from '../HomePage/constants';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: auto;
  min-height: 100vh;
`;

const Split = styled.span`
  width: 3px;
  height: 100%;
  background-color: #ffff;
  @media (max-width: 750px) {
    display: none;
  }
`;

const BodyContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  justify-content: space-between;
  @media (max-width: 750px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Background = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(26, 85, 164, 0.8);
  @media (max-width: 750px) {
    min-height: 100vh;
  }
`;

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  padding: 0em 2em;
  @media (max-width: 750px) {
    width: 100%;
  }
`;

const DescriptionPage = ({ loading, drinkInfo }) => (
  <Container>
    {loading.type !== constants.GET_DRINK_INFO ||
    (loading.type === constants.GET_DRINK_INFO && loading.value === false) ? (
      <Background>
        <h1
          style={{
            fontFamily: "'Brush Script MT', cursive",
            fontSize: '6em',
            color: 'white',
            margin: '0',
            textAlign: 'center',
            lineHeight: '1em',
          }}
        >
          {drinkInfo.name}
        </h1>
        <BodyContainer>
          <SectionContainer>
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
            <ul
              type="I"
              style={{
                listStyleType: 'none',
                textAlign: 'center',
                padding: '0',
              }}
            >
              {drinkInfo.drinkIngredientElements.map(ingredient => (
                <li style={{ color: 'white', fontSize: '1.5em' }}>
                  {ingredient.name}&nbsp;&nbsp;~&nbsp;&nbsp;
                  {ingredient.amount}
                  &nbsp;
                  {ingredient.unit}
                </li>
              ))}
            </ul>
          </SectionContainer>
          <Split />
          <SectionContainer>
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
            <p
              style={{
                fontSize: '1.5em',
                color: '#ffff',
                textAlign: 'center',
              }}
            >
              {drinkInfo.instructions}
            </p>
          </SectionContainer>
        </BodyContainer>
      </Background>
    ) : (
      <Spin />
    )}
  </Container>
);

DescriptionPage.propTypes = {
  drinkInfo: PropTypes.object,
  loading: PropTypes.object,
};

export default DescriptionPage;
