import styled  from 'styled-components';
import {CARD_TYPES_ICONS_MAPPING} from '../utilities/cards';

const Container = styled.div`
    width: 50px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    border: 1px solid black;
    border-radius: 4px;
    margin: .5em;
    color: ${({color}) => color};
`;
const SuiteValue = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    position: absolute;
    top: .5em;
    left: .5em;
    font-size: 1em;
    font-weight: bold;
`;
const SuiteType = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;    
    font-size: 2em;
`;
const Card = ({suiteType, value}) => {
    return(
        <Container color= {CARD_TYPES_ICONS_MAPPING[suiteType].color}>
                <SuiteValue>{value}</SuiteValue>
                <SuiteType>{CARD_TYPES_ICONS_MAPPING[suiteType].icon}</SuiteType>
        </Container>
    )
}
export default Card;