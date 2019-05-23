

/* About Us JS */

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
  
  links = document.querySelectorAll(".tabs-link")
  links.forEach(link => new TabLink(link));


  