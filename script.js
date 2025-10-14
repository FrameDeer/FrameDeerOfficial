// Tournament state
let currentTournament = null;
let currentRound = 0;
let currentMatchups = [];
let winners = [];

// DOM elements
const tournamentSelector = document.getElementById('tournamentSelector');
const tournamentMain = document.getElementById('tournamentMain');
const tournamentBracket = document.getElementById('tournamentBracket');
const roundTitle = document.getElementById('roundTitle');
const roundDescription = document.getElementById('roundDescription');
const resetBtn = document.getElementById('resetBtn');
const celebrationModal = document.getElementById('celebrationModal');
const modalClose = document.getElementById('modalClose');

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
  initializeEventListeners();
});

function initializeEventListeners() {
  // Tournament size selection
  tournamentSelector.addEventListener('click', function(e) {
    if (e.target.classList.contains('tournament-btn')) {
      const size = parseInt(e.target.dataset.size);
      startTournament(size);
    }
  });

  // Reset button
  resetBtn.addEventListener('click', resetTournament);

  // Modal close
  modalClose.addEventListener('click', closeModal);
  celebrationModal.addEventListener('click', function(e) {
    if (e.target === celebrationModal) {
      closeModal();
    }
  });

  // Share buttons
  document.getElementById('shareTwitter').addEventListener('click', shareOnTwitter);
  document.getElementById('shareFacebook').addEventListener('click', shareOnFacebook);
  document.getElementById('shareGeneric').addEventListener('click', copyLink);
}

function startTournament(size) {
  // Update UI
  document.querySelectorAll('.tournament-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  document.querySelector(`[data-size="${size}"]`).classList.add('active');

  // Initialize tournament
  const movies = getRandomMovies(size);
  currentTournament = createBracket(movies);
  currentRound = 0;
  winners = [];
  
  // Show tournament area
  tournamentMain.style.display = 'block';
  
  // Generate first round
  generateRound();
}

function generateRound() {
  const round = currentTournament[currentRound];
  const roundNames = {
    64: ['Round of 64', 'Round of 32', 'Round of 16', 'Quarterfinals', 'Semifinals', 'Final'],
    32: ['Round of 32', 'Round of 16', 'Quarterfinals', 'Semifinals', 'Final'],
    16: ['Round of 16', 'Quarterfinals', 'Semifinals', 'Final'],
    8: ['Quarterfinals', 'Semifinals', 'Final'],
    4: ['Semifinals', 'Final'],
    2: ['Final']
  };

  const currentRoundName = roundNames[round.length] ? roundNames[round.length][0] : 'Final';
  
  // Update title
  roundTitle.textContent = currentRoundName;
  roundDescription.textContent = round.length === 2 ? 
    'Choose the ultimate winner!' : 
    'Choose the winner of each matchup';

  // Generate matchups
  currentMatchups = [];
  for (let i = 0; i < round.length; i += 2) {
    if (round[i + 1]) {
      currentMatchups.push([round[i], round[i + 1]]);
    }
  }

  // Render matches
  renderMatches();
}

function renderMatches() {
  const bracketHTML = `
    <div class="bracket-round fade-in">
      <div class="matches-grid">
        ${currentMatchups.map((matchup, index) => `
          <div class="match">
            <div class="match-title">Match ${index + 1}</div>
            <div class="match-movies">
              ${matchup.map(movie => `
                <div class="movie-card" data-movie-id="${movie.id}" data-match-index="${index}">
                  <img src="${movie.poster}" alt="${movie.title}" class="movie-poster">
                  <div class="movie-info">
                    <div class="movie-title">${movie.title}</div>
                    <div class="movie-year">${movie.year}</div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  tournamentBracket.innerHTML = bracketHTML;

  // Add click listeners to movie cards
  document.querySelectorAll('.movie-card').forEach(card => {
    card.addEventListener('click', handleMovieSelection);
  });
}

function handleMovieSelection(e) {
  const card = e.currentTarget;
  const movieId = parseInt(card.dataset.movieId);
  const matchIndex = parseInt(card.dataset.matchIndex);
  
  // Find the movie object
  const movie = currentMatchups[matchIndex].find(m => m.id === movieId);
  
  // Mark winner and loser
  const matchElement = card.closest('.match');
  const allCards = matchElement.querySelectorAll('.movie-card');
  
  allCards.forEach(movieCard => {
    if (movieCard === card) {
      movieCard.classList.add('winner', 'winner-animation');
    } else {
      movieCard.classList.add('eliminated');
    }
    movieCard.style.pointerEvents = 'none';
  });

  // Add winner to array
  winners.push(movie);

  // Check if all matches in round are complete
  setTimeout(() => {
    if (winners.length === currentMatchups.length) {
      advanceToNextRound();
    }
  }, 1000);
}

function advanceToNextRound() {
  // Check if tournament is complete
  if (winners.length === 1) {
    showCelebration(winners[0]);
    return;
  }

  // Update tournament data for next round
  currentRound++;
  if (currentRound < currentTournament.length) {
    // Copy winners to next round
    for (let i = 0; i < winners.length; i++) {
      currentTournament[currentRound][i] = winners[i];
    }
  }

  // Reset for next round
  winners = [];
  
  // Generate next round after a delay
  setTimeout(() => {
    generateRound();
  }, 1500);
}

function showCelebration(winner) {
  // Trigger confetti
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });

  // Show modal with winner
  document.getElementById('winnerPoster').src = winner.poster;
  document.getElementById('winnerTitle').textContent = winner.title;
  document.getElementById('winnerYear').textContent = `${winner.year} • ${winner.genre}`;
  
  celebrationModal.style.display = 'flex';
  
  // Additional confetti bursts
  setTimeout(() => {
    confetti({
      particleCount: 50,
      angle: 60,
      spread: 55,
      origin: { x: 0 }
    });
  }, 200);
  
  setTimeout(() => {
    confetti({
      particleCount: 50,
      angle: 120,
      spread: 55,
      origin: { x: 1 }
    });
  }, 400);
}

function closeModal() {
  celebrationModal.style.display = 'none';
}

function resetTournament() {
  currentTournament = null;
  currentRound = 0;
  currentMatchups = [];
  winners = [];
  
  // Hide tournament area
  tournamentMain.style.display = 'none';
  
  // Reset buttons
  document.querySelectorAll('.tournament-btn').forEach(btn => {
    btn.classList.remove('active');
  });
}

function shareOnTwitter() {
  const winner = getCurrentWinner();
  const text = `I just discovered my favorite movie: ${winner.title} (${winner.year})! 🎬 Try the Movie Knockout Tournament and find yours!`;
  const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(window.location.href)}`;
  window.open(url, '_blank');
}

function shareOnFacebook() {
  const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`;
  window.open(url, '_blank');
}

function copyLink() {
  navigator.clipboard.writeText(window.location.href).then(() => {
    const btn = document.getElementById('shareGeneric');
    const originalText = btn.textContent;
    btn.textContent = 'Copied!';
    setTimeout(() => {
      btn.textContent = originalText;
    }, 2000);
  });
}

function getCurrentWinner() {
  const title = document.getElementById('winnerTitle').textContent;
  const yearText = document.getElementById('winnerYear').textContent;
  const year = yearText.split(' • ')[0];
  
  return {
    title: title,
    year: parseInt(year)
  };
}