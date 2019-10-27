import {userId} from "./userId";
import {Card} from "./card";

export class CardList {
    constructor(container) {
        this.container = container;
        this.cards = [];
    }

    addCard(cardData) {
        let isDeleteIconVisible = cardData.owner._id === userId;
        const card = new Card(cardData.name, cardData.link, cardData._id, isDeleteIconVisible);
        this.cards.push(card);
        this.container.appendChild(card.cardContainer);
    }

    likeCard(event, id) {
        const card = this.cards.find(card => card.id === id);
        if (card !== null) {
            card.like(event)
        }
    }

    deleteCard(event, id) {
        const card = this.cards.find(card => card.id === id);
        if (card !== null) {
            card.remove(event)
        }
    }

}