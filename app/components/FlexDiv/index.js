import styled from 'styled-components';

const FlexDiv = styled.div`
  display: flex;
  flex-direction: ${props => (props.direction ? props.direction : 'row')};
  align-items: ${props => (props.alignItems ? props.alignItems : 'row')};
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : 'row'};
`;

export default FlexDiv;
