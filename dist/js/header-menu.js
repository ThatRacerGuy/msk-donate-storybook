class HeaderMenuToggle {
  constructor() {
    this.$headerArray = [];
    this.$headerMenu = [];
    this.$headerButton = [];
    this.$layoutArray = [];
    this.$header = [];
    this.$layout = [];
  }

  toggleMenu() {
    if (this.$headerButton.classList.contains('header-menu-toggle--hidden')) {
      this.$layout.classList.remove('layout-container--menu-hidden');
      this.$layout.classList.add('layout-container--menu-visible');
      this.$header.classList.remove('site-header-menu--hidden');
      this.$header.classList.add('site-header-menu--visible');
      this.$headerButton.classList.remove('header-menu-toggle--hidden');
      this.$headerButton.classList.add('header-menu-toggle--visible');
    } else {
      this.$layout.classList.remove('layout-container--menu-visible');
      this.$layout.classList.add('layout-container--menu-hidden');
      this.$header.classList.remove('site-header-menu--visible');
      this.$header.classList.add('site-header-menu--hidden');
      this.$headerButton.classList.remove('header-menu-toggle--visible');
      this.$headerButton.classList.add('header-menu-toggle--hidden');
    }
  }

  bind() {
    if (this.$headerMenu && this.$headerButton) {
      this.$headerButton.addEventListener('click', () => {
        this.toggleMenu();
      });
    }
  }

  init() {
    this.$headerArray = document.getElementsByClassName('site-header');
    this.$headerMenu = document.getElementById('header-menu');
    this.$headerButton = document.getElementById('header-menu-toggle');
    this.$layoutArray = document.getElementsByClassName('layout-container');
    this.$header = this.$headerArray[0];
    this.$layout = this.$layoutArray[0];
    console.log('C1');
    console.log(document.getElementById('header-menu-toggle'));
    this.bind();
  }
}

export { HeaderMenuToggle };
