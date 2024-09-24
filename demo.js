function handleDonation(cardNumber, sector) {
  const inputAmount = document.getElementById(`input-amount-${cardNumber}`);
  const donationAmount = document.getElementById(`donation-amount-${cardNumber}`);
  const totalAmount = document.getElementById('navbar-total-amount');
  const modal = document.getElementById(`modal-${cardNumber}`);

  const donationValue = parseInt(inputAmount.value);
  const totalBalence = parseInt(totalAmount.textContent);

  if (isNaN(donationValue) || donationValue <= 0) {
    alert('Please enter a valid donation amount');
    return;
  }
  if (totalBalence < donationValue) {
    alert('Insufficient balance');
    return;
  }

  // Update the donation amount for the selected card
  const currentDonation = parseInt(donationAmount.textContent);
  donationAmount.textContent = currentDonation + donationValue;

  // Update the total balance
  totalAmount.textContent = totalBalence - donationValue;

  // Add the donation to the history section
  addToHistory(donationValue, sector);

  // Show confirmation modal
  modal.showModal();
  inputAmount.value = '';
}

function addToHistory(donationValue, sector) {
  // Create a new div for each history item
  const historyItem = document.createElement('div');
  historyItem.className = 'bg-white p-3 rounded-md border border-slate-200';

  // Add donation details
  historyItem.innerHTML = `
    <p class="text-black">${donationValue} BDT donated for ${sector}</p>
    <p class="text-xs text-gray-500">Date: ${new Date().toLocaleString('en-BD', { timeZone: 'Asia/Dhaka' })}</p>
  `;

  // Append the new history item to the list
  const historyContainer = document.getElementById('history-list');
  historyContainer.insertBefore(historyItem, historyContainer.firstChild); // Add to the top of the list
}

// Add event listeners for each donation button
document.getElementById('donate-button-1').addEventListener('click', function () {
  handleDonation(1, 'Flood Relief at Noakhali, Bangladesh');
});

document.getElementById('donate-button-2').addEventListener('click', function () {
  handleDonation(2, 'Flood Relief in Feni, Bangladesh');
});

document.getElementById('donate-button-3').addEventListener('click', function () {
  handleDonation(3, 'Aid for Injured in the Quota Movement');
});

// Handle tab switching between Donation and History
document.getElementById('history-tab-button').addEventListener('click', function () {
  donationButton();
  document.getElementById('history-section').style.display = 'block';
  document.querySelector('.space-y-6').style.display = 'none'; // Hide donation cards
});

document.getElementById('donate-tab-button').addEventListener('click', function () {
  historyButton();
  document.getElementById('history-section').style.display = 'none';
  document.querySelector('.space-y-6').style.display = 'block'; // Show donation cards
});

function historyButton() {
  document.getElementById('donate-tab-button').classList.remove('bg-green-400');
  document.getElementById('history-tab-button').classList.add('bg-green-400');
}

function donationButton() {
  document.getElementById('history-tab-button').classList.remove('bg-green-400');
  document.getElementById('donate-tab-button').classList.add('bg-green-400');
}
