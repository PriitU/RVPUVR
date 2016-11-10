AFRAME.registerComponent('cursor-listener', {
  init: function () {
    var COLORS = ['red', 'green', 'blue'];
    var camera = document.querySelector('a-entity[camera]').components.camera.camera;

    this.el.addEventListener('click', function (evt) {
      var randomIndex = Math.floor(Math.random() * COLORS.length);
      this.setAttribute('material', 'color', COLORS[randomIndex]);
      console.log(document.querySelector('a-entity[camera]').getAttribute('rotation'));
      //console.log(document.querySelector('a-entity[camera]').getAttribute('position'));
      //console.log('I was clicked at: ', evt.detail.intersection); //.point);  - something wrong with .point
    });
  }
});

//console.log(THREE);

var objekt = document.querySelector('a-box');
var mudel =  document.querySelector('#target1');
var rotX;
var rotY;

//console.log(objekt.getAttribute('rotation'));
//objekt.setAttribute("rotation", "0 45 0");
//console.log(objekt.getAttribute('rotation').y);
var cam = document.querySelector('a-entity[camera]');
//console.log(document.querySelector('a-entity[camera]').getAttribute('rotation'));
var scene = document.querySelector('a-scene');
//var cylinder = document.createElement('a-cylinder');
var text = document.createElement('a-entity');

//text.setAttribute('bmfont-text',"text: HELLO!; color: #FFF")     -- text element
//text.setAttribute('position',"1 0 1")
//scene.appendChild(text);

//cylinder.setAttribute('color', '#FF9500');
//cylinder.setAttribute('height', '2');
//cylinder.setAttribute('radius', '0.75');
//cylinder.setAttribute('position', '3 1 0');
//scene.appendChild(cylinder);
//console.log(cam.far);
var t = 0;
function render() {
  t += 0.01;
  requestAnimationFrame(render);
  //cylinder.setAttribute('position', '3 '+(Math.sin(t*2)+1)+' 0');   --moves the cylinder up and down
  rotX = document.querySelector('a-entity[camera]').getAttribute('rotation').x;
  rotY = document.querySelector('a-entity[camera]').getAttribute('rotation').y;

  //console.log(rotX);
  objekt.setAttribute("rotation", (0-rotX) +" "+ (0-rotY) +" 0");
  mudel.setAttribute("rotation", (0-rotX) +" "+ (0-rotY) +" 0");
  //text.setAttribute('bmfont-text', "text: "+(Math.sin(t*2)+1)+"; color: #FFF");     -- this prints new text at every frame
}
render();
