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
  ticket_amt = selectedSeatsCount * ticketPrice;;
  price.innerText = selectedSeatsCount * ticketPrice;
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

function myFunction() {
    document.getElementById("amount").innerText = sessionStorage.getItem("total_price");
  }

(function (global) {
    document.getElementById("buy").addEventListener("click", function () {
        global.localStorage.setItem("mySharedData", ticket_amt);
    }, false);
}(window));

(function (global) {
    document.getElementById("amount").value = global.localStorage.getItem("mySharedData");
}(window));