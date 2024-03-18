window.onload = () => {
  const car = document.getElementById("car");
  const left = document.getElementById("left");
  const center = document.getElementById("center");
  const right = document.getElementById("right");
  let cordenadas = car.getBoundingClientRect().x;

  car.style.transition = "ease-out 1s";

  onmousedown = () => {
    document.getElementById("text") ? document.getElementById("text").remove() : null;
  };

  left.onmousedown = () => {
    car.style.left = "25%";
    car.style.transform = "translate(-25%)";
    setTimeout(() => {
      cordenadas = car.getBoundingClientRect().x;
    }, 1500);
  };

  center.onmousedown = () => {
    car.style.left = "50%";
    car.style.transform = "translate(-50%)";
    setTimeout(() => {
      cordenadas = car.getBoundingClientRect().x;
    }, 1500);
  };

  right.onmousedown = () => {
    car.style.left = "75%";
    car.style.transform = "translate(-75%)";
    setTimeout(() => {
      cordenadas = car.getBoundingClientRect().x;
    }, 1500);
  };
};
