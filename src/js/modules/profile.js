// Переключение вкладок в профиле (история заказов / личные данные)
const historyButton = document.querySelector('.profile__history');
const profileButton = document.querySelector('.profile__profile-info');
const historyBodyButton = document.querySelector('.js-history');
const profileBodyProfile = document.querySelector('.js-personal-info');
if(historyButton) {

    historyButton.addEventListener("click", function (e) {
        if(!historyButton.classList.contains('_active')) {
            historyButton.classList.add('_active');
            profileButton.classList.remove('_active');
            historyBodyButton.classList.add('_active');
            profileBodyProfile.classList.remove('_active');
        }
    });
}
if(profileButton) {

    profileButton.addEventListener("click", function (e) {
        if(!profileButton.classList.contains('_active')) {
            historyButton.classList.remove('_active');
            profileButton.classList.add('_active');

            historyBodyButton.classList.remove('_active');
            profileBodyProfile.classList.add('_active');

        }
    });
}
