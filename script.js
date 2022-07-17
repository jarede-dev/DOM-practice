document.body.style.backgroundColor = "#D3D3D3";
document.body.setAttribute("style", "display: flex; flex-direction: column; align-items: center")

const redText = document.createElement("p");
redText.textContent = "Hey, I'm red!";
redText.style.color = "red";

document.body.appendChild(redText);

const blueH3 = document.createElement("h3");
blueH3.textContent = "I'm a blue H3!";
blueH3.style.color = "blue";

document.body.appendChild(blueH3);

const div = document.createElement("div");
div.setAttribute("style", "display: flex; flex-direction: column; align-items: center; border-style: solid; border-color: black; background: pink; padding: 20px; width: 200px");
const h1 = document.createElement("h1");
h1.textContent = "I'm in a div";
const p = document.createElement("p");
p.textContent = "ME TOO!";

div.appendChild(h1);
div.appendChild(p);

document.body.appendChild(div);