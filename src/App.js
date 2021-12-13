import styled from 'styled-components';
import { getShuffledDeck } from './utilities/cards';
import CardDisplay from './components/CardDisplay';
import { useCallback, useEffect, useState } from 'react';
import Button from './components/Button';

const AppContainer = styled.div`
  height: 100vh;
  width: 100vw;
  padding: 1em;
  box-sizing: border-box;
`;

const CurrentDrawnContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
`;

const AllDrawnContainer = styled.div`
  height: 400px;
  width: 100%;
  box-sizing: border-box;
`;

function App() {
  const [deckObject, setDeckObject] = useState({ deck: [], currentDrawnCards: [], allDrawnCards: [] });

  useEffect(() => {
    setDeckObject((obj) => {
      return { ...obj, deck: getShuffledDeck() }
    })
  }, [])

  const drawFiveCards = useCallback(() => {
    if (deckObject.deck.length < 1) {
      alert('No remaining cards to draw');
    }
    setDeckObject((obj) => {
      let deck = [...deckObject.deck];
      const poppedCards = deck.splice(0, 5);
      return { deck, currentDrawnCards: poppedCards, allDrawnCards: [...poppedCards, ...obj.allDrawnCards] }
    })
  }, [deckObject])

  const resetDeck = useCallback(() => {
    setDeckObject({ deck: getShuffledDeck(), currentDrawnCards: [], allDrawnCards: [] });
  }, [setDeckObject])

  return (
    <AppContainer>
      <CurrentDrawnContainer>
        <h2>Current drawn cards &nbsp;&nbsp;&nbsp;&nbsp;<Button title="Draw 5 Cards" clickHandler={drawFiveCards} />&nbsp;&nbsp;&nbsp;&nbsp;<Button title="Reset Deck" clickHandler={resetDeck} /></h2>
        <CardDisplay cards={deckObject.currentDrawnCards} />
      </CurrentDrawnContainer>
      <AllDrawnContainer>
        <h2>All drawn cards</h2>
        <CardDisplay cards={deckObject.allDrawnCards} />
      </AllDrawnContainer>
    </AppContainer>
  );
}

export default App;
