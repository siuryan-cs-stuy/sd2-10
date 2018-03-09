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
      this.element.addEventListener("click", this.changeColor);
      svg.appendChild(this.element);
    },
    changeColor: function(e) {
      if (this.getAttribute("fill") == "lightsteelblue") {
        console.log("change color of : " + this);
        this.setAttribute("fill", "red");
      } else {
        this.remove(e);
        var newElement = createSvg(Math.random() * width, Math.random() * height, radius, "lightsteelblue", "circle");
        newElement.display();
      }
      e.stopPropagation();
    },
    remove: function() {
      svg.removeChild(this.element);
    }
  }

  return obj;
};

svg.addEventListener("click", function() {
  var circle = createSvg(event.offsetX, event.offsetY, radius, "lightsteelblue", "circle");
  circle.display();
});

var clearButton = document.getElementById("clearButton");
clearButton.addEventListener("click", function() {
  while(svg.hasChildNodes()){
    svg.removeChild(svg.firstChild);
  }
});
