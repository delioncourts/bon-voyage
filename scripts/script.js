const popup = document.querySelector('.popup');
const popupOpenButton = document.querySelector('.send');

popupOpenButton.addEventListener('click', () => {
            popup.classList.add('popup_opened');
            document.addEventListener("keydown", closePopupEsc);
            document.addEventListener("mousedown", closePopupOverlay);
})

function closePopup() {
    popup.classList.remove('popup_opened');
    document.removeEventListener("keydown", closePopupEsc);
}

function closePopupEsc(evt) {
    if (evt.key === "Escape")
        closePopup(document.querySelector(".popup_opened"));
}

function closePopupOverlay(evt) {
    if (evt.target.classList.contains("popup")) {
        closePopup(document.querySelector(".popup_opened"));
    }
}