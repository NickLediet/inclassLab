
 (function () {
  // Create renderer and mount to .modelInfo div
  const renderer = new Renderer(
      document.querySelector(".modelInfo")
  )
  // Just setting up the global data to something I remember is there
  const data = carData;
  const cars = []; // Soon to be an array of car objects

  // Access each carElement and create new Car object passing in renderer
  document.querySelectorAll(".thumbInfo img")
    .forEach((el, i) => {
      cars.push(new Car({
        modelName : carData[i].modelName,
        pricing : carData[i].price,
        details : carData[i].details
      }, el, renderer))
    });

 })();