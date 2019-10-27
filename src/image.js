// закрытие карточки (х)
import {image, imageContent} from "./variables";

export function imageClose(event) {
    if (event.target.classList.contains('image__close')) {
        image.classList.remove('image_is-opened');
        const imgRemove = imageContent.querySelectorAll('img');
        imageContent.removeChild(imgRemove[1]);
    }
}

// открытие картинки
export function imageOpen(event) {
    if (event.target.classList.contains('place-card__image')) {
        image.classList.add('image_is-opened');
        const stringFrom = event.target.getAttribute('style');
        const imgElement = document.createElement('img');
        let url = stringFrom
            .replace('background-image: url(', '')
            .replace(')', '');

        imgElement.setAttribute('src', url);
        imgElement.classList.add('image__element');
        imageContent.appendChild(imgElement);
    }
}