/* eslint-disable indent */
/* eslint-disable no-restricted-globals */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useRef, useState, memo, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import DescriptionPage from 'containers/DescriptionPage/Loadable';
import Modal from 'antd/lib/modal';
import drinksImage from 'images/trends-drinks.jpg';
import drinksImageMobile from 'images/drink-mobile.png';
import DownOutlined from '@ant-design/icons/DownOutlined';
import { motion } from 'framer-motion';
import FlexDiv from '../../components/FlexDiv';
import { getDrinks, getDrinkInfo } from './actions';
import {
  drinksSelector,
  loadingSelector,
  drinkInfoSelector,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import * as constants from './constants';

const key = 'home';

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
  @media (max-width: 750px) {
    background-image: url(${drinksImageMobile});
    background-color: rgba(26, 85, 164, 0.4);
    padding-top: 5%;
  }
`;

const HeaderTextContainer = styled.div`
  display: flex;
  @media (max-width: 750px) {
    display: none;
  }
`;

const MobileHeaderTextContainer = styled.div`
  display: none;
  @media (max-width: 750px) {
    display: flex;
    justify-content: center;
  }
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
  @media (max-width: 750px) {
    width: 100%;
    padding: 1em;
  }
`;

const TopDrinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 2em;
  width: 80%;
  margin: auto;
  overflow: hidden;
  @media (max-width: 750px) {
    width: 100%;
    height: unset;
  }
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
  @media (max-width: 750px) {
    left: 45%;
  }
`;

const Separator = styled.span`
  width: 100%;
  height: 1px;
  background-color: #3d679f;
`;

const StyledModal = styled(Modal)`
  .ant-modal-header {
    display: none;
  }
`;

const StyledImage = styled.img`
  height: 100%;
  @media (max-width: 750px) {
    height: 50%;
    width: 100%;
    margin-bottom: 1em;
  }
`;

const DescContainer = styled.div`
  height: 80%;
  display: flex;
  @media (max-width: 750px) {
    flex-direction: column;
  }
`;

function romanize(num) {
  if (isNaN(num)) return NaN;
  const digits = String(+num).split('');
  const keys = [
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
  while (i--) roman = (keys[+digits.pop() + i * 10] || '') + roman;
  return Array(+digits.join('') + 1).join('M') + roman;
}

const HomePage = ({
  drinks,
  drinkInfo,
  loading,
  getDrinksList,
  getDrinkInfoById,
}) => {
  useEffect(() => {
    setTimeout(() => {
      getDrinksList();
    }, 0);
  }, []);

  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const TitleRef = useRef(null);
  const CocktailsRef = useRef(null);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <AppContainer>
      <HeaderContainer>
        <HeaderTextContainer>
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
        </HeaderTextContainer>
        <MobileHeaderTextContainer>
          <h1
            style={{
              fontSize: '6em',
              color: '#ffff',
              // textTransform: 'uppercase',
              fontWeight: 'bold',
              textAlign: 'center',
              letterSpacing: '0.25em',
              fontFamily: "'Brush Script MT', cursive",
              margin: '0',
            }}
          >
            drink
          </h1>
        </MobileHeaderTextContainer>

        <Arrow
          style={{ color: 'white', fontSize: '2em' }}
          onClick={() =>
            TitleRef.current.scrollIntoView({ behavior: 'smooth' })
          }
        />
      </HeaderContainer>
      <BodyContainer ref={TitleRef}>
        <h1 style={{ fontSize: '3em', color: '#3D679F ', textAlign: 'center' }}>
          You look like you need a drink
        </h1>
        <p
          style={{
            fontSize: '1.5em',
            marginBottom: '2em',
            textAlign: 'center',
          }}
        >
          Lost? Don&apos;t worry, we&apos;ve got you covered as we have
          assembled the world&apos;s finest cocktails that are guaranteed to get
          you in the mood. Take a look at the best rated coktails{' '}
          <a
            onClick={() => {
              window.scrollBy({
                top: window.innerHeight,
                behavior: 'smooth',
              });
            }}
          >
            below{' '}
          </a>
          and click on one to learn what&apos;s in it and how to make it step by
          step.
          <br />
          <strong>Yours truly ~&nbsp;the bois&nbsp;~</strong>
        </p>

        <Separator />
      </BodyContainer>
      {loading.type !== constants.GET_DRINKS ||
      (loading.type === constants.GET_DRINKS && loading.value === false) ? (
        <div>
          {drinks.map((drink, index) => (
            <TopDrinkContainer
              ref={index === 0 ? CocktailsRef : null}
              key={drink.id}
            >
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
                {romanize(index + 1)}. {drink.name}
              </h1>
              <DescContainer style={{ height: '80%' }}>
                <StyledImage
                  src={drink.imageUrl}
                  height="100%"
                  style={{ borderRadius: '24px', marginRight: '2em' }}
                  alt="drink"
                />

                <FlexDiv
                  direction="column"
                  style={{
                    height: '100%',
                    backgroundColor: '#333B5C',
                    padding: '4em 2em',
                    borderRadius: '24px',
                    marginBottom: '2em',
                  }}
                  justifyContent="space-between"
                >
                  <FlexDiv direction="column">
                    <h1 style={{ color: '#ffff' }}>Description</h1>
                    <p style={{ fontSize: '1.5em', color: '#ffff' }}>
                      {drink.description}
                    </p>
                  </FlexDiv>

                  <FlexDiv direction="column">
                    <h1 style={{ color: '#ffff' }}>Like it?</h1>
                    <FlexDiv alignItems="center" justifyContent="space-between">
                      <a
                        style={{ fontSize: '1.25em' }}
                        onClick={() => {
                          showModal();
                          getDrinkInfoById(drink.id);
                        }}
                      >
                        Find out how to make it&nbsp;
                      </a>
                      {drinks.length === index + 1 ? null : (
                        <a
                          style={{ fontSize: '1.25em' }}
                          onClick={() =>
                            window.scrollBy({
                              top: window.innerHeight,
                              behavior: 'smooth',
                            })
                          }
                        >
                          Check out another drink&nbsp;
                        </a>
                      )}
                    </FlexDiv>
                  </FlexDiv>
                </FlexDiv>
              </DescContainer>
            </TopDrinkContainer>
          ))}
        </div>
      ) : null}

      <StyledModal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        width={700}
        style={{ top: '0px' }}
        bodyStyle={{ padding: '0em' }}
      >
        <DescriptionPage loading={loading} drinkInfo={drinkInfo} />
      </StyledModal>
    </AppContainer>
  );
};

HomePage.propTypes = {
  drinks: PropTypes.array,
  drinkInfo: PropTypes.object,
  loading: PropTypes.object,
  getDrinksList: PropTypes.func,
  getDrinkInfoById: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  drinks: drinksSelector(),
  drinkInfo: drinkInfoSelector(),
  loading: loadingSelector(),
});

export function mapDispatchToProps(dispatch) {
  return {
    getDrinksList: () => dispatch(getDrinks()),
    getDrinkInfoById: id => dispatch(getDrinkInfo(id)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
