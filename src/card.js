import {api} from "./api";
import {cardList, form, popupButton, popupFirst} from "./variables";

export class Card {
    constructor(name, link, id, isDeleteIconVisible) {
        this.name = name;
        this.link = link;
        this.id = id;
        this.cardContainer = this.create(isDeleteIconVisible);
    }

    like(event) {
        event.target.classList.toggle('place-card__like-icon_liked');
    }

    remove(event) {
        if (window.confirm('Вы действительно хотите удалить эту карточку?')) {
            api.deleteCard(this.id, data => {
                    event.target.closest('.place-card').remove();
                }
            )
        }
    }

    create(isDeleteIconVisible) {
        const placeCard = document.createElement('div'); //родительский элемент
        placeCard.classList.add('place-card');
        const placeCardImg = document.createElement('div'); // 1ур
        placeCard.appendChild(placeCardImg);
        placeCardImg.classList.add('place-card__image');
        placeCardImg.setAttribute('style', 'background-image: url(' + this.link + ')');
        const placeCardDelete = document.createElement('button'); // 2ур
        placeCardImg.appendChild(placeCardDelete);
        if (isDeleteIconVisible) {
            placeCardDelete.classList.add('place-card__delete-icon')
        } else {
            placeCardDelete.classList.add('place-card__delete-icon_none')
        }

        const placeCardDescription = document.createElement('div'); // 1ур
        placeCard.appendChild(placeCardDescription);
        placeCardDescription.classList.add('place-card__description');
        const placeCardText = document.createElement('h3'); // 2ур
        placeCardDescription.appendChild(placeCardText);
        placeCardText.classList.add('place-card__name');
        placeCardText.textContent = this.name;
        const placeCardLike = document.createElement('button'); // 2ур
        placeCardDescription.appendChild(placeCardLike);
        placeCardLike.classList.add('place-card__like-icon');
        placeCard.setAttribute('id', this.id);
        return placeCard;
    }
}// добавление контейнера
export function addCard(event) {
    event.preventDefault();
    const formName = form.elements.name;
    const formLink = form.elements.link;
    api.postCard(formName.value, formLink.value, data => {
        cardList.addCard(data);
    });
    popupFirst.close();
    form.reset();
    popupButton.setAttribute('disabled', true);
    popupButton.classList.remove('popup__button_black');
}