export default class Tab {
  constructor(tabButtons, tabContent) {
    this.tabButtons = document.querySelectorAll(tabButtons);
    this.tabContent = document.querySelectorAll(tabContent);
    this.activeTab = 0;
    this.activeClass = 'active';

    // Bind
    // this.activeTabAndButton = this.activeTabAndButton.bind(this);

    this.addEventInButton();
  }

  addEventInButton() {
    this.tabButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
        this.activeTabAndButton(button, index);
      });
    });
  }

  activeTabAndButton(item, index) {
    this.tabButtons.forEach((tab, i) => {
      tab.classList.remove(this.activeClass); 
      this.tabContent[i].classList.remove(this.activeClass);
    });

    item.classList.add(this.activeClass);
    this.tabContent[index].classList.add(this.activeClass);
    this.activeTab = index;
    return this.activeTab;
  }

}