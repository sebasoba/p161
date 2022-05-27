const { PRIORITY_BELOW_NORMAL } = require("constants");

AFRAME.registerComponent("throw",{
    keyDown: function(){
    var camera = document.querySelector("#camera").object3D;
    var direction = new THREE.Vector3();
    camera.getWorldDirection(direction);

    ball.setAttribute("velocity",direction.multiplyScalar(-10)) 
    }
}) 