(function () {
  var darkenButton = document.getElementById('darken');
  var brightenButton = document.getElementById('brighten');
  var body = document.body;

  darkenButton.addEventListener('click', function(e) {
    e.preventDefault();
    body.classList.add('dark');
    darkenButton.style.display = 'none';
    brightenButton.style.display = 'block';
  });

  brightenButton.addEventListener('click', function(e) {
    e.preventDefault();
    body.classList.remove('dark');
    brightenButton.style.display = 'none';
    darkenButton.style.display = 'block';
  });
})();
