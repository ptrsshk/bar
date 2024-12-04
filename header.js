const links = document.querySelectorAll('.navigation-link');
const burger = document.getElementById('burger-btn');
const navigation = document.querySelector('.navigation');
const openBurgerMenu = () => {
    burger.classList.toggle('active');
    navigation.classList.toggle('active');
    document.body.classList.toggle('no-scroll')
}
burger.addEventListener('click', () => openBurgerMenu());
links.forEach((link) => link.addEventListener('click', () => {
  burger.classList.remove('active');
  navigation.classList.remove('active');
  document.body.classList.remove('no-scroll')
}));