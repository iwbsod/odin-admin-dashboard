const sidebar = document.querySelector('.js-sidebar');
const menuButton = document.querySelector('.js-menu-button');
const closeButton = document.querySelector('.js-close-button')

const openSidebar = () => {
  menuButton.addEventListener('click', () => {
    sidebar.style.display = 'block'
  })
}

const closeSidebar = () => {
  closeButton.addEventListener('click', () => {
    sidebar.style.display = 'none'
  })
}

openSidebar()
closeSidebar()