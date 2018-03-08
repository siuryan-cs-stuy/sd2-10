var svg = document.getElementById("pic");

var radius = 20;
var height = 500;
var width = 500;

var createSvg = function(x, y, r, c, element) {
  var obj = {
    x: x,
    y: y,
    r: r,
    c: c,
    element: document.createElementNS("http://www.w3.org/2000/svg", element),
    display: function() {
      this.element.setAttribute("cx", this.x);
      this.element.setAttribute("cy", this.y);
      this.element.setAttribute("r", this.r);
      this.element.setAttribute("fill", this.c);
      svg.appendChild(this.element);

      this.element.addEventListener("click", this.changeColor);
    },
    changeColor: function(e) {
      this.setAttribute("fill", "red");
      e.stopPropagation();
      this.addEventListener("click", this.remove);
    },
    remove: function() {
      svg.removeChild(this.element);
      var newElement = createSvg(Math.random() * width, Math.random() * height, radius, "blue", "circle");
      console.log(newElement);
      newElement.display();
    }
  }

  return obj;
}

svg.addEventListener("click", function() {
  var circle = createSvg(event.offsetX, event.offsetY, radius, "lightsteelblue", "circle");
  console.log(circle);
  circle.display();
});

var clearButton = document.getElementById("clearButton");
clearButton.addEventListener("click", function() {
  svg.innerHTML = "";
});
