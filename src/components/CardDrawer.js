import styled  from 'styled-components';
import cardImage from '../assets/card.png';
import Button from './Button';
const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;
const Drawer =  styled.div`
    width: 100%;
    height: 80%;
    border: 1px solid black;
    border-radius: 4px;
    background-image: url(${cardImage});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    margin-bottom: 1em;
`;
const CardDrawer = ({drawFiveCards}) => {
    return(
        <Container>
            {/* <Drawer /> */}
            <Button title="Draw Cards" clickHandler={drawFiveCards}/>
        </Container>
    )
}
export default CardDrawer;