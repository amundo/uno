class ImgSvg extends HTMLElement {
  constructor(){
    super()
  }

  async fetch(url){
    let response = await fetch(url)
    let xml = await response.text()
    let svg = new DOMParser()
      .parseFromString(xml, "image/svg+xml")
      .querySelector("svg") 

    this.append(svg)
  }

  static get observedAttributes(){
    return ["src"]
  }

  attributeChangedCallback(attribute, oldValue, newValue){
    if(attribute == "src"){
      this.fetch(newValue)
    }
  }
}

export {ImgSvg}
customElements.define('img-svg', ImgSvg)
