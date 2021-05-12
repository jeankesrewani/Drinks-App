import React, { useRef } from 'react';
import styled from 'styled-components';
import drinksImage from 'images/trends-drinks.jpg';
import drinkImage from 'images/drink-photography-1.jpg';
import DownOutlined from '@ant-design/icons/DownOutlined';
import { motion } from 'framer-motion';
import FlexDiv from '../../components/FlexDiv';

const AppContainer = styled.div`
  min-height: 100vh;
`;

const HeaderContainer = styled.div`
  padding-top: 12%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-image: url(${drinksImage});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 100% 100%;
  background-color: rgba(26, 85, 164, 0.8);
  background-blend-mode: soft-light;
`;

const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 5em;
  width: 80%;
  margin: auto;
`;

const TopDrinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: center; */
  height: 100vh;
  padding: 2em;
  width: 80%;
  margin: auto;
  overflow: hidden;
`;

const ImageTitle = styled.h1`
  font-size: 5em;
  font-weight: bold;
  color: #ffff;
  text-transform: uppercase;
`;

const Arrow = styled(DownOutlined)`
  position: absolute;
  bottom: 0.5em;
  left: 50%;
  cursor: pointer;
  :hover {
    transition: 0.25s;
    transform: scale(1.5);
  }
`;

const Separator = styled.span`
  width: 100%;
  height: 1px;
  background-color: #3d679f;
`;

function romanize(num) {
  if (isNaN(num)) return NaN;
  const digits = String(+num).split('');
  const key = [
    '',
    'C',
    'CC',
    'CCC',
    'CD',
    'D',
    'DC',
    'DCC',
    'DCCC',
    'CM',
    '',
    'X',
    'XX',
    'XXX',
    'XL',
    'L',
    'LX',
    'LXX',
    'LXXX',
    'XC',
    '',
    'I',
    'II',
    'III',
    'IV',
    'V',
    'VI',
    'VII',
    'VIII',
    'IX',
  ];
  let roman = '';
  let i = 3;
  // eslint-disable-next-line no-plusplus
  while (i--) roman = (key[+digits.pop() + i * 10] || '') + roman;
  return Array(+digits.join('') + 1).join('M') + roman;
}

const HomePage = () => {
  const TitleRef = useRef(null);
  const CocktailsRef = useRef(null);
  const CocktailsRef2 = useRef(null);
  return (
    <AppContainer>
      <HeaderContainer>
        <FlexDiv>
          <motion.div
            animate={{ x: 200 }}
            transition={{ ease: 'easeOut', duration: 2 }}
          >
            <ImageTitle>d</ImageTitle>
          </motion.div>
          <motion.div
            animate={{ x: 350 }}
            transition={{ ease: 'easeOut', duration: 2 }}
          >
            <ImageTitle>r</ImageTitle>
          </motion.div>
          <motion.div
            animate={{ x: 525 }}
            transition={{ ease: 'easeOut', duration: 2 }}
          >
            <ImageTitle>i</ImageTitle>
          </motion.div>
          <motion.div
            animate={{ x: 700 }}
            transition={{ ease: 'easeOut', duration: 2 }}
          >
            <ImageTitle>n</ImageTitle>
          </motion.div>
          <motion.div
            animate={{ x: 850 }}
            transition={{ ease: 'easeOut', duration: 2 }}
          >
            <ImageTitle>k</ImageTitle>
          </motion.div>
        </FlexDiv>
        <Arrow
          style={{ color: 'white', fontSize: '2em' }}
          onClick={() =>
            TitleRef.current.scrollIntoView({ behavior: 'smooth' })
          }
        />
      </HeaderContainer>
      <BodyContainer ref={TitleRef}>
        <h1 style={{ fontSize: '3em', color: '#3D679F ' }}>
          You look like you need a drink
        </h1>
        <p style={{ fontSize: '1.5em', marginBottom: '2em' }}>
          Lost? Don&apos;t worry, we&apos;ve got you covered as we have
          assembled the world&apos;s finest cocktails that are guaranteed to get
          you in the mood. Take a look at the best rated coktails{' '}
          <a
            onClick={() =>
              CocktailsRef.current.scrollIntoView({ behavior: 'smooth' })
            }
          >
            below{' '}
          </a>
          and click on one to learn what&apos;s in it and how to make it step by
          step. Support us by sending some fookin fresh dollars over on our
          patreon.
          <br />
          <FlexDiv justifyContent="center" style={{ marginTop: '1em' }}>
            <strong>~Yours truly e-commerce the bois~</strong>
          </FlexDiv>
        </p>

        <Separator />
      </BodyContainer>
      <TopDrinkContainer ref={CocktailsRef}>
        <h1
          style={{
            fontSize: '2.5em',
            color: '#ffff',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            borderRadius: '24px',
            backgroundColor: '#333B5C',
            padding: '0.25em 0.5em',
            textAlign: 'center',
          }}
        >
          {romanize(1)}. Manhattan
        </h1>
        <FlexDiv>
          <img
            src={drinkImage}
            height="60%"
            style={{ borderRadius: '24px', marginRight: '2em' }}
            alt="drink"
          />
          <FlexDiv direction="column">
            <FlexDiv
              direction="column"
              style={{
                height: '35%',
                backgroundColor: '#333B5C',
                padding: '2em',
                borderRadius: '24px',
                marginBottom: '2em',
              }}
            >
              <h1 style={{ color: '#ffff' }}>Description</h1>
              <p style={{ fontSize: '1.5em', color: '#ffff' }}>
                A Manhattan is a cocktail made with whiskey, sweet vermouth, and
                bitters. While rye is the traditional whiskey of choice, other
                commonly used whiskies include Canadian whisky, bourbon, blended
                whiskey, and Tennessee whiskey
              </p>
            </FlexDiv>

            <FlexDiv
              direction="column"
              style={{
                height: '20%',
                backgroundColor: '#333B5C',
                padding: '2em',
                borderRadius: '24px',
              }}
            >
              <h1 style={{ color: '#ffff' }}>What next?</h1>
              <FlexDiv>
                <a style={{ fontSize: '1.5em' }}>Check out its recipe&nbsp;</a>
                <p style={{ fontSize: '1.5em', color: '#ffff' }}>or&nbsp;</p>
                <a
                  style={{ fontSize: '1.5em' }}
                  onClick={() =>
                    CocktailsRef2.current.scrollIntoView({ behavior: 'smooth' })
                  }
                >
                  See drink #2
                </a>
              </FlexDiv>
            </FlexDiv>
          </FlexDiv>
        </FlexDiv>
      </TopDrinkContainer>
      <TopDrinkContainer ref={CocktailsRef2}>
        <h1
          style={{
            fontSize: '2.5em',
            color: '#ffff',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            borderRadius: '24px',
            backgroundColor: '#333B5C',
            padding: '0.25em 0.5em',
            textAlign: 'center',
          }}
        >
          {romanize(2)}. Manhattan
        </h1>
        <FlexDiv>
          <img
            src={drinkImage}
            height="60%"
            style={{ borderRadius: '24px', marginRight: '2em' }}
            alt="drink"
          />
          <FlexDiv direction="column">
            <FlexDiv
              direction="column"
              style={{
                height: '35%',
                backgroundColor: '#333B5C',
                padding: '2em',
                borderRadius: '24px',
                marginBottom: '2em',
              }}
            >
              <h1 style={{ color: '#ffff' }}>Description</h1>
              <p style={{ fontSize: '1.5em', color: '#ffff' }}>
                A Manhattan is a cocktail made with whiskey, sweet vermouth, and
                bitters. While rye is the traditional whiskey of choice, other
                commonly used whiskies include Canadian whisky, bourbon, blended
                whiskey, and Tennessee whiskey
              </p>
            </FlexDiv>

            <FlexDiv
              direction="column"
              style={{
                height: '20%',
                backgroundColor: '#333B5C',
                padding: '2em',
                borderRadius: '24px',
              }}
            >
              <h1 style={{ color: '#ffff' }}>What next?</h1>
              <FlexDiv>
                <a style={{ fontSize: '1.5em' }}>Check out its recipe&nbsp;</a>
                <p style={{ fontSize: '1.5em', color: '#ffff' }}>or&nbsp;</p>
                <a style={{ fontSize: '1.5em' }}>See drink #3</a>
              </FlexDiv>
            </FlexDiv>
          </FlexDiv>
        </FlexDiv>
      </TopDrinkContainer>
    </AppContainer>
  );
};

export default HomePage;
