// start with retrieving the elements from the page, and then adding event handling. then write the logic. refer to the seasons example / homework
  (function () {
   

})();

// TODO: Make a seperate file
class Cars {
  /**
   * Constructor for creating a new car element
   * @param {String} modelName The model of the car
   * @param {Number} pricing The price of the car
   * @param {String} details Details about the car
   * @param {HTMLElement[img]} imageElement and image element to add a click handler to
   * @param {Renderer} render the mounting spopt for the data swapping
   */
  constructor(modelName, pricing, details, imageElement, renderer) 
  {
    this.modelName = modelName
    this.pricing = pricing
    this.details = details
    this.imageElement = imageElement

    // AddEvent Listener
    this.imageElement.addEventListener("click", () => this.handleClick());
  }

  /**
   * Update the renderer with selected data
   */
  handleClick() // TODO: implement css triggers
  {
    this.renderer.render({
      model : this.modelName,
      pricing : this.pricing,
      details : this.details
    })
  }
}


/**
 * TODO:
 *  - implement car class
 *  handle click, constructor, 
 *  - implement renderer 
 *  
 */