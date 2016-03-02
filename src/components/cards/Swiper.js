import React, { StyleSheet, Component } from 'react-native';

import Card from './Card';
import SwipeCards from 'react-native-swipe-cards';

const cards = [
  {text: 'Tomato', backgroundColor: 'red'},
  {text: 'Aubergine', backgroundColor: 'purple'},
  {text: 'Courgette', backgroundColor: 'green'},
  {text: 'Blueberry', backgroundColor: 'blue'},
  {text: 'Umm...', backgroundColor: 'cyan'},
  {text: 'orange', backgroundColor: 'orange'},
]

class Swiper extends Component {
  constructor() {
    super();

    this.state = {
      cards: cards,
    };
  }

  handleYup(card) {
    console.log(`Yup for ${card.text}`)
  }

  handleNope(card) {
    console.log(`Nope for ${card.text}`)
  }

  render() {
    return (
      <SwipeCards
        cards={this.state.cards}

        renderCard={ (cardData) => <Card {...cardData} /> }
        renderNoMoreCards={ () => <NoMoreCards /> }

        handleYup={ this.handleYup }
        handleNope={ this.handleNope }
      />
    );
  }
}

export default Swiper;
