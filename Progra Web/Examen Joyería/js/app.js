
particlesJS('particles-js', {

    //particulas
      "particles": {
        "number": {      	
          //cantidad de elementos
          "value": 30,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
  
        //color de la forma
        "color":  {
          "value": "#99bdff"
        },
  
        //formas
        "shape": {      
          //tipos de efectos en la forma: circle-triangle-star-polygon-edge	
          "type": "polygon",
          "stroke": {
            "width": 0,
            "color": "#dbeff9"
          },
  
    
          "polygon": {
            "nb_sides": 5
          },
  
    
          "image": {
            "src": "../imagenes/logo.png",
            "width": 100,
            "height": 100
          }
        },
  
    
        "opacity": {
            "value": 0.3,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
  
    
        "size": {
          "value": 6,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 5,
            "sync": false
          }
        },
  
    
        "line_linked": {
          "enable": false,
          "distance": 150,
          //color por defecto #fffffff
          "color": "#ffffff",
          //por defecto 0.4
          "opacity": 0.5,
          //ancho por defecto 1
          "width": 2
        },
  
    
        "move": {
          "enable": true,
          "speed": 0.5,
          "direction": "top",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
  
    
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": false,
            "mode": "repulse"
          },
          "onclick": {
            "enable": false,
            "mode": "push"
          },
          "resize": false
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true,
      "config_demo": {
        "hide_card": false,
        "background_color": "#b61924",
        "background_image": "",
        "background_position": "50% 50%",
        "background_repeat": "no-repeat",
        "background_size": "cover"
      }
    }
  
  );