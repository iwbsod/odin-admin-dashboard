const sidebar = document.querySelector('.js-sidebar');
const menuButton = document.querySelector('.js-menu-button');
const closeButton = document.querySelector('.js-close-button')
const userGreetingElement = document.querySelector('.js-user-greeting')

const openSidebar = () => {
  sidebar.style.display = 'block'
}

const closeSidebar = () => {
  sidebar.style.display = 'none'
}

if (window.innerWidth < 1130) {
  closeSidebar()

  menuButton.addEventListener('click', () => {
    openSidebar()
  })
}

window.addEventListener('resize', () => {
  if (window.innerWidth < 1130) {
    closeSidebar()

    menuButton.addEventListener('click', () => {
      openSidebar()
    })

    closeButton.addEventListener('click', () => {
      closeSidebar()
    })

  } else if (window.innerWidth > 1130) {
    openSidebar()
  } 
  
})

if (window.innerWidth <= 700) {
  userGreetingElement.innerHTML = 'Morgan Oakley'
  console.log(userGreetingElement)
}