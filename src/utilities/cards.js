const CARD_TYPES = ["spades", "hearts", "diamonds", "clubs"];
const CARD_VALUES = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];
export const CARD_TYPES_ICONS_MAPPING = {
  spades: {icon: '♠', color: 'black'},
  hearts: {icon: '♥', color: 'red'},
  diamonds: {icon: '♦', color: 'red'},
  clubs: {icon: '♣', color: 'black'}
}

export const getShuffledDeck = () => {
  console.log("creating card deck");
  let deck = [];
  for (let i = 0; i < CARD_TYPES.length; i++) {
    for (let j = 0; j < CARD_VALUES.length; j++) {
      deck.push({
        suite: CARD_TYPES[i],
        value: CARD_VALUES[j],
      });
    }
  }
  console.log("shuffling cards");
  for (let i = 0; i < 1000; i++) {
    let location1 = Math.floor(Math.random() * deck.length);
    let location2 = Math.floor(Math.random() * deck.length);

    let temp = deck[location1];
    deck[location1] = deck[location2];
    deck[location2] = temp;
  }
  return deck;
};
