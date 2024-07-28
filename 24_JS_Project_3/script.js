// script.js

function addPlayer() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const country = document.getElementById('country').value;
    const playerScore = document.getElementById('playerScore').value;
  
    if (firstName && lastName && country && playerScore) {
      const tbody = document.getElementById('leaderboardBody');
      const tr = document.createElement('tr');
  
      tr.innerHTML = `
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${country}</td>
        <td>${playerScore}</td>
        <td class="actions">
          <button onclick="increaseScore(this)">+5</button>
          <button onclick="decreaseScore(this)">-5</button>
        </td>
      `;
  
      tbody.appendChild(tr);
  
      document.getElementById('firstName').value = '';
      document.getElementById('lastName').value = '';
      document.getElementById('country').value = '';
      document.getElementById('playerScore').value = '';
    }
  }
  
  function increaseScore(button) {
    const row = button.closest('tr');
    const scoreCell = row.cells[3];
    const currentScore = parseInt(scoreCell.textContent);
    scoreCell.textContent = currentScore + 5;
  }
  
  function decreaseScore(button) {
    const row = button.closest('tr');
    const scoreCell = row.cells[3];
    const currentScore = parseInt(scoreCell.textContent);
    scoreCell.textContent = currentScore - 5;
  }
  