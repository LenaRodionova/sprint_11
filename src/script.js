import "./style.css";
import {api} from "./api";
import {userId} from "./userId";
import {
    button,
    buttonClose,
    buttonEdit,
    cardList,
    form,
    formUser,
    placeList,
    popupButton,
    popupFirst,
    popups,
    popupSecond,
    userInfoAvatar,
    userInfoJob,
    userInfoName
} from "./variables";
import {blackButtonVisibility, handleValidate, popupButtonValidate, validateForm} from "./validation";
import {imageClose, imageOpen} from "./image";
import {buttonDelegate} from "./button";
import {openSecondPopup, renameUserInfo} from "./user";
import {addCard} from "./card";

// псевдомассив всех кнопок с классом
// самая верхняя оболочка для popup и img

api.getUserInfo(data => {
    userInfoName.textContent = data.name;
    userInfoJob.textContent = data.about;
    userInfoAvatar.style.backgroundImage = `url(${data.avatar})`;
    userId = data._id;
});

api.getInitialCards(data => {
    data.forEach(card => cardList.addCard(card))
});


buttonClose.forEach(function (elem) {
    elem.addEventListener('click', () => popupFirst.close());
});
buttonClose.forEach(function (elem) {
    elem.addEventListener('click', () => popupSecond.close());
});

// СОБЫТИЯ
// активность кнопки по заполнению строк
form.addEventListener('input', popupButtonValidate);

// черная кнопка
form.addEventListener('input', blackButtonVisibility);

// событие отправки того, что записали в формы
form.addEventListener('submit', addCard);

// показыть скрытый блок
button.addEventListener('click', () => popupFirst.open());
buttonEdit.addEventListener('click', openSecondPopup);

// событие для второй формы
formUser.addEventListener('submit', renameUserInfo);

formUser.addEventListener('input', validateForm);

// открытие карточки по нажатию на картинку
placeList.addEventListener('click', imageOpen);

// закрытие каточки по клику на крестик
popups.addEventListener('click', imageClose);

// валидация
formUser.name.addEventListener('input', handleValidate);
formUser.job.addEventListener('input', handleValidate);


// кнопка опять белая
popupButton.setAttribute('disabled', true);

// слушатель с делегированием
placeList.addEventListener('click', buttonDelegate);
