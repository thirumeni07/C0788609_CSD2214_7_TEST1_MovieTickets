const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const price = document.getElementById('price');
const movieSelect = document.getElementById('movie');
let ticketPrice = +movieSelect.value;
var ticket_amt=0;

selectedMovie = (movieIndex, moviePrice) => {
  localStorage.setItem('selectedMovieIndex', movieIndex);
  localStorage.setItem('selectedMoviePrice', moviePrice);
};

const updateSelectedSeatsCount = () => {
  const selectedSeats = document.querySelectorAll('.row .selected');

  const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));

  localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

  const selectedSeatsCount = selectedSeats.length;

  count.innerText = selectedSeatsCount;
  ticket_amt = selectedSeatsCount * ticketPrice;
  localStorage.setItem("storageName",ticket_amt);
  price.innerText = selectedSeatsCount * ticketPrice;
  var movie_name = $( "#movie option:selected" ).text();
  document.getElementById('movie_choice').innerText = movie_name.substring(0,movie_name.indexOf("("));
};

// Seat select event
container.addEventListener('click', e => {
  if (
    e.target.classList.contains('seat') &&
    !e.target.classList.contains('occupied')
  ) {
    e.target.classList.toggle('selected');

    updateSelectedSeatsCount();
  }
});

// Movie select event
movieSelect.addEventListener('change', e => {
  $('.row').find('*').removeClass('selected');
  $('.row').find('*').removeClass('occupied');
  $('.row').find('*').addClass('seat');
  ticketPrice = +e.target.value;
  selectedMovie(e.target.selectedIndex, e.target.value);

  updateSelectedSeatsCount();
});


function save_price() {
    localStorage.setItem("storageName",ticket_amt);
  }
