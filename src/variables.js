// ПЕРЕМЕННЫЕ
import {Popup} from "./popup";
import {CardList} from "./cardList";

export const button = document.querySelector('.button');
export const placeList = document.querySelector('.places-list');
export const form = document.forms.new;
export const popupButton = document.querySelector('.popup__button');
export const buttonEdit = document.querySelector('.user-info__button-edit');
export const formUser = document.forms.data;
export const buttonClose = document.querySelectorAll('.popup__close');
const popupFirstElement = document.querySelector('.popup_first');
const popupSecondElement = document.querySelector('.popup_second');
export const image = document.querySelector('.image');
export const imageContent = document.querySelector('.image__content');
export const popups = document.querySelector('.popups');
export const userInfoName = document.querySelector('.user-info__name');
export const userInfoJob = document.querySelector('.user-info__job');
export const userInfoAvatar = document.querySelector('.user-info__photo');
export const cardList = new CardList(placeList);
export const popupFirst = new Popup(popupFirstElement);
export const popupSecond = new Popup(popupSecondElement);// черная кнопка 2
export const popupButtonAll = document.querySelectorAll('.popup__button');