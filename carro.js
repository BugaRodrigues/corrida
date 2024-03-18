window.onload = () => {
  if (screen.width <= 900) {
    alert();
  }

  const car = document.getElementById("car");
  const left = document.getElementById("left");
  const center = document.getElementById("center");
  const right = document.getElementById("right");
  let cordenadas = [
    +car.getBoundingClientRect().top.toFixed(0),
    ,
    +car.getBoundingClientRect().height.toFixed(0),
    +car.getBoundingClientRect().width.toFixed(0),
  ];
  car.style.transition = "ease-out 0.5s";

  setInterval(() => {
    cordenadas[1] = +car.getBoundingClientRect().left.toFixed(0);
  }, 10);

  setInterval(() => {
    let ctrl = Math.floor(Math.random() * 9);
    let obstaculo = document.createElement("div");
    if (ctrl >= 6) {
      left.appendChild(obstaculo);
    } else if (ctrl >= 3) {
      center.appendChild(obstaculo);
    } else {
      right.appendChild(obstaculo);
    }
    obstaculo.style.cssText =
      "position: absolute;" +
      "height: 10%;" +
      "width: 50%;" +
      "background-image: url(image/obstaculo.png);" +
      "background-position: center;" +
      "background-size: contain;" +
      "background-repeat: no-repeat;" +
      "rotate: 90deg;";
    +"transition: linear 0.1s";

    let pos = 0;
    let obs = [
      ,
      +obstaculo.getBoundingClientRect().left.toFixed(0),
      +obstaculo.getBoundingClientRect().height.toFixed(0) - 150,
      +obstaculo.getBoundingClientRect().width.toFixed(0),
    ];
    setInterval(() => {
      obs[0] = +obstaculo.getBoundingClientRect().top.toFixed(0);
      if (cordenadas[1] + cordenadas[3] >= obs[1] &&
         cordenadas[1] <= obs[1] + obs[3] &&
         cordenadas[0] + cordenadas[2] >= obs[0] &&
         cordenadas[0] <= obs[0] + obs[2]) {
        console.log("bateu!!!");
      }
      if (pos == 800) {
        pos = 0;
        obstaculo.remove();
      } else {
        pos += 2;
        obstaculo.style.top = `${pos}px`;
      }
    }, 5);
  }, 2500);

  onmousedown = () => {
    document.getElementById("text") ? document.getElementById("text").remove() : null;
  };

  oncontextmenu = (e) => {
    e.preventDefault();
  };

  left.onmousedown = () => {
    car.style.left = "30%";
    car.style.transform = "translate(-25%)";
    document.getElementById("pista").style.gridTemplateColumns = "2fr 1fr 1fr";
    document.getElementById("pista").style.transition = "ease-out 1s";
  };

  center.onmousedown = () => {
    car.style.left = "50%";
    car.style.transform = "translate(-50%)";
    document.getElementById("pista").style.gridTemplateColumns = "1fr 2fr 1fr";
    document.getElementById("pista").style.transition = "ease-out 1s";
  };

  right.onmousedown = () => {
    car.style.left = "70%";
    car.style.transform = "translate(-75%)";
    document.getElementById("pista").style.gridTemplateColumns = "1fr 1fr 2fr";
    document.getElementById("pista").style.transition = "ease-out 1s";
  };
};
