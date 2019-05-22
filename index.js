

/* About Us JS */

class AboutBox {
  constructor(domElement) {
    this.domElement = domElement;
    this.expandButton = this.domElement.querySelector('.expandButton');
    this.expandButton.textContent = 'Expand';
    this.expandButton.addEventListener('click', () => this.expandArticle());
  }

  expandArticle(event) {

    this.domElement.classList.toggle('article-open');
    if (this.domElement.classList.contains('article-open')) {
      this.expandButton.textContent = 'Shrink';
    } else {
      this.expandButton.textContent = 'Expand';
    }
  }
}

let articles = Array.from(document.querySelectorAll('.person'));

articles.forEach(article => { const articleInstance = new AboutBox(articles)})



const connectBtn = document.getElementsByClassName("gitBtn");



  if (connectBtn) {
     for (var i=0; i <connectBtn.length; i++) {
       connectBtn[i].addEventListener('mouseover', function(event) {
            event.target.style.backgroundColor= "#247BA0";
            event.target.style.color= "white";
            event.stopPropagation();
            event.preventDefault();
    
            setTimeout(function() {
              event.target.style.backgroundColor = "";
              event.target.style.color= "";
           }, 500);
        }, false);
      }};





/* Features JS */

class TabLink {
    constructor(element) {
      this.element = element      
      this.data = this.element.dataset.tab
      this.itemElement = document.querySelector(`.tabs-item[data-tab='${this.data}']`)
      this.tabItem = new TabItem(this.itemElement)
      this.element.addEventListener('click', () => this.select());
    };
  
    select() {

        const links = document.querySelectorAll('.tabs-link')
          Array.from(links).forEach(link => {
            link.classList.remove("tabs-link-selected")
          })
          this.element.classList.add("tabs-link-selected")
          this.tabItem.select()
    }
  }
  
  class TabItem {
    constructor(element) {
      this.element = element
    }
  
    select() {
      const items = document.querySelectorAll(".tabs-item");
        Array.from(items).forEach(item =>{
        item.classList.remove("tabs-item-selected")
      })
  
      items.forEach(item => {
        this.element.classList.add("tabs-item-selected")
      })
    }
  }
  
  
  
  /* START tabs HERE:   */
  
  links = document.querySelectorAll(".tabs-link")
  links.forEach(link => new TabLink(link));