import styled  from 'styled-components';
import Card from './Card';

const Container = styled.div`
    width: 100%;
    height: 100%;
    min-height: 160px;
    display: flex;
    justify-content: flex-start;
    align-content: flex-start;
    flex-wrap: wrap;
    margin-bottom: 1em;
    border: 1px solid black;
    border-radius: 4px;
    padding: 1em;
    overflow: auto;
    box-sizing: border-box;
`;

const CardDisplay = ({cards}) => {
    return (
        <Container>
            {cards?.length ? cards.map((card) => {
                return <Card  key={`${card.suite}_${card.value}`} suiteType={card.suite} value={card.value}/>
            }) : 'No Cards drawn'}
        </Container>
    )
}

export default CardDisplay;