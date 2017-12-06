
class Car {
    /**
     * Constructor for creating a new car element
     * @param {Object} carData the data for car
     * @param {HTMLElement[img]} imageElement and image element to add a click handler to
     * @param {Renderer} render the mounting spopt for the data swapping
     */
    constructor(id, imageElement, renderer) 
    {
    //   // Destructure data for what we want
    //   const { modelName, pricing, details } = carData
  
    //   this.modelName = modelName
    //   this.pricing = pricing
    //   this.details = details
      this.model = id;
      this.imageElement = imageElement
      this.renderer = renderer;
  

    // AddEvent Listener
      this.imageElement.addEventListener("click", () => this.update())
    }
  
    /**
     * Update the renderer with selected data
     */
    async update() 
    {
      const {modelName, pricing, modelDetails} = await this.getData()
      // Remove any focused elements
      const activeElements = document.querySelectorAll(".focusMini")
      activeElements.forEach(el => {
        // Remove current active Classes
        el.classList.remove("focusMini")
        el.classList.add("nonActive")
        
      })
      //Adding focused class  
      this.imageElement.classList.add("focusMini")

      // Pass Data to the renderer
      this.renderer.render({
        model : modelName,
        pricing : pricing,
        details : modelDetails
      })
    }

    getData(){
      return new Promise((resolve) => {
        fetch(`http://localhost:8888/inclasslab/includes/functions.php?carModel=${this.model}`)
            .then(data => resolve(data.json()))
            .catch(err => reject(new Error(err)))
      })

    }
    
  }