// меняет имя автора
import {api} from "./api";
import {form, popupButtonAll, popupSecond, userInfoJob, userInfoName} from "./variables";

export function renameUserInfo(event) {
    event.preventDefault();
    const formUser = document.forms.data;
    const userName = formUser.elements.name;
    const userJob = formUser.elements.job;
    api.updateUserInfo(userName.value, userJob.value, data => {
        userInfoName.textContent = data.name;
        userInfoJob.textContent = data.about;
    });
    form.reset();
    popupSecond.close();
}

export function openSecondPopup(event) {
    popupButtonAll[1].classList.add('popup__button_black');
    const formUser = document.forms.data;
    const userName = formUser.elements.name;
    const userJob = formUser.elements.job;
    const userInfoName = document.querySelector('.user-info__name');
    const userInfoJob = document.querySelector('.user-info__job');
    userName.value = userInfoName.textContent;
    userJob.value = userInfoJob.textContent;
    popupSecond.open();
}