export default class Tab {
  constructor(tabButtons, tabContent) {
    this.tabButtons = document.querySelectorAll(tabButtons);
    this.tabContent = document.querySelectorAll(tabContent);
    this.activeTab = 0;
    this.activeClass = 'active';
    this.newEvent = new Event('changetabbutton');

    this.activeTabAndButton(this.tabButtons[0], this.tabButtons, this.tabContent, 0);
    this.addEventInButton(this.tabButtons, this.tabContent);
  }

  addEventInButton(buttons, contents) {
    buttons.forEach((button, index) => {
      button.addEventListener('click', () => {
        this.activeTabAndButton(button, buttons, contents, index);
      });
    });
  }

  clearActiveElements(buttons, container) {
    buttons.forEach((button, i) => {
      button.classList.remove(this.activeClass);
      container[i].classList.remove(this.activeClass);
    });
  }

  activeTabAndButton(currentButton, buttons, contents, index) {
    this.clearActiveElements(buttons, contents);

    currentButton.classList.add(this.activeClass);
    contents[index].classList.add(this.activeClass);

    if(buttons === this.tabButtons && contents === this.tabContent) {
      this.activeTab = index;

      this.tabButtons.forEach((item) => {
        item.dispatchEvent(this.newEvent);  
      });
    }
  }

  /**
   * Lógica
   * - Quando algum botão da tab principal for clicado, 
   */

  getSubtabAtualContent(element, containers, buttons) {
  const localContainers = element.querySelectorAll(containers);
  const localButtons = element.querySelectorAll(buttons);


  localContainers[0].classList.add(this.activeClass);
  localButtons[0].classList.add(this.activeClass);

  }

  subTab(subButtons, subContainers) {
    this.subButtons = document.querySelectorAll(subButtons);
    this.subContainers = document.querySelectorAll(subContainers);
    this.activeTabAndButton(this.subButtons[0], this.subButtons, this.subContainers, 0);
    this.addEventInButton(this.subButtons, this.subContainers);

    this.tabButtons.forEach((item) => {
      item.addEventListener('changetabbutton', () => {
        this.getSubtabAtualContent(this.tabContent[this.activeTab], subContainers, subButtons);
      });
    });

  }
}