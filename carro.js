window.onload = () => {
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
  let ponto = 0;
  car.style.transition = "ease-out 0.5s";

  setInterval(() => {
    cordenadas[1] = +car.getBoundingClientRect().left.toFixed(0);
  }, 10);

  let diff = setInterval(() => {
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

    let pos = 1;
    let obs = [
      ,
      +obstaculo.getBoundingClientRect().left.toFixed(0),
      +obstaculo.getBoundingClientRect().height.toFixed(0) - 150,
      +obstaculo.getBoundingClientRect().width.toFixed(0),
    ];
    let dada = setInterval(() => {
      obs[0] = +obstaculo.getBoundingClientRect().top.toFixed(0);
      if (
        cordenadas[1] + cordenadas[3] >= obs[1] &&
        cordenadas[1] <= obs[1] + obs[3] &&
        cordenadas[0] + cordenadas[2] >= obs[0] &&
        cordenadas[0] <= obs[0] + obs[2]
      ) {
        [left, center, right].map((iten) => {
          iten.style.animationPlayState = "paused";
        });
        clearInterval(diff);
        let p = document.createElement("p");
        document.getElementById("pista").appendChild(p);
        p.innerHTML = `pontuaçao: ${ponto}`;
        p = document.createElement("div");
        document.getElementById("pista").appendChild(p);
        p.style.cssText =
          "position:absolute;" +
          "height:100px;" +
          "width: 200px;" +
          "border-radius: 20%;" +
          "background-color:gray;" +
          "top:40%; left:40%;" +
          "ransform: translate(-50% -50%);"+
          "text-align: center;" +
          "font-size:2em;" +
          "font-family:sans-serif;" +
          "padding-top: 25px"
        p.innerHTML = "Re-começar"
        clearInterval(dada);
        p.onmouseenter = () => {
          p.style.border = "5px solid black";
          p.style.cursor = "pointer"
        };
        p.onmouseleave = () => {
          p.style.border = "0px";
        };
        p.onmousedown = () => {
            window.location.reload()
        }
      }
      if (pos >= 800) {
        pos = 0;
        obstaculo.remove();
        ponto += 10;
      } else {
        pos += 3;
        obstaculo.style.top = `${pos}px`;
      }
    }, 5);
  }, 2500 - ponto * 100);

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
