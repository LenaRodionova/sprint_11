// проверка для формы
import {reset, setError} from "./errors";
import {form, popupButton, popupButtonAll} from "./variables";

export function handleValidate(event) {
    reset(event.target);
    validate(event.target);
}

function validate(element) {
    const errorElement = document.querySelector(`#error-${element.id}`);

    if (!element.checkValidity()) {
        errorElement.textContent = 'Это обязательное поле';
        setError(errorElement);
        return false;
    } else if (element.value.length < 2 || element.value.length > 30) {
        setError(errorElement);
        errorElement.textContent = 'Должно быть от 2 до 30 символов';
        return false;
    }
    return true;
}

export function validateForm(event) {
    const formUser = document.forms.data;
    const userName = formUser.elements.name;
    const userJob = formUser.elements.job;

    const isUserNameIsNotValid = userName.value.length < 2 || userName.value.length > 30;
    const isUserJobIsNotValid = userJob.value.length < 2 || userJob.value.length > 30;

    if (!isUserJobIsNotValid && !isUserNameIsNotValid) {
        popupButtonAll[1].classList.add('popup__button_black');
        popupButtonAll[1].removeAttribute('disabled');
    } else {
        popupButtonAll[1].classList.remove('popup__button_black');
        popupButtonAll[1].setAttribute('disabled', true);
    }
}

export function checkUrl(url) {
    return url.startsWith('http');
}

export function popupButtonValidate(event) {
    const formName = form.elements.name;
    const formLink = form.elements.link;
    if (formName.value.length !== 0 && formLink.value.length !== 0 && checkUrl(formLink.value)) {
        popupButton.removeAttribute('disabled');
    } else {
        popupButton.setAttribute('disabled', true);
    }
}

export function blackButtonVisibility(event) {
    const formName = form.elements.name;
    const formLink = form.elements.link;
    if (formName.value.length !== 0 && formLink.value.length !== 0 && checkUrl(formLink.value)) {
        popupButton.classList.add('popup__button_black');
    } else {
        popupButton.classList.remove('popup__button_black');
    }
}