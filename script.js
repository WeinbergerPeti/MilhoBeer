$(function()
{
    console.log("csecs");
});

document.addEventListener('DOMContentLoaded', function() {
    var beer = document.querySelector('.beer');
  
    // Amikor a linkre kattintasz
    document.querySelector('a').addEventListener('click', function(event) {
      event.preventDefault(); // Megakadályozza az alapértelmezett navigációt
  
      // Sör feltöltése
      beer.classList.add('full');
      setTimeout(function() {
        beer.classList.add('top');
        // 5 másodperc után az oldal kiürítése
        setTimeout(function() {
            beer.classList.remove('top');
            beer.classList.remove('full');
          window.location.href = "marka.html"; // Az új oldal URL-jére navigál
        }, 1000);
      }, 500);
    });
  });
  