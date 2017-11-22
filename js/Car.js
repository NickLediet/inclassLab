
class Car {
    /**
     * Constructor for creating a new car element
     * @param {Object} carData the data for car
     * @param {HTMLElement[img]} imageElement and image element to add a click handler to
     * @param {Renderer} render the mounting spopt for the data swapping
     */
    constructor(carData, imageElement, renderer) 
    {
      // Destructure data for what we want
      const { modelName, pricing, details } = carData
  
      this.modelName = modelName
      this.pricing = pricing
      this.details = details
      this.imageElement = imageElement
      this.renderer = renderer;
  
      // AddEvent Listener
      this.imageElement.addEventListener("click", () => this.handleClick())
    }
  
    /**
     * Update the renderer with selected data
     */
    handleClick() 
    {
      this.renderer.render({
        model : this.modelName,
        pricing : this.pricing,
        details : this.details
      })
    }
  }