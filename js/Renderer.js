class Renderer {
    /**
     * Handles rendering of the Car Data
     * @param {HTMLElement} root the spot that the content is mounting
     */
    constructor(root)
    {
      this.root = root
      
  
      // Drill into the elements children and bind to them
      this.model = root.querySelector(".modelName")
      this.price = root.querySelector(".priceInfo")
      this.details = root.querySelector(".modelDetails")
  
      console.log(this.model, this.price, this.details)
    }
    /**
     * Updates the root with the car data
     * @param {Object} carData the cardata
     */
    render(carData)
    {
      // Destructure data from carData object
      const {model, pricing, details} = carData
      this.model.innerHTML = model
      this.price.innerHTML = pricing
      this.details.innerHTML = details
  
    }
  }