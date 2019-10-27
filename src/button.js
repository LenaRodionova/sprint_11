import {cardList} from "./variables";

export function buttonDelegate(e) {
    if (e.target.classList.contains('place-card__like-icon')) {
        cardList.likeCard(event, e.target.closest('.place-card').getAttribute('id'));
    }
    if (e.target.classList.contains('place-card__delete-icon')) {
        cardList.deleteCard(event, e.target.closest('.place-card').getAttribute('id'));
    }
}