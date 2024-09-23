function handleDonation(cardNumber) {
  const inputAmount = document.getElementById(`input-amount-${cardNumber}`);
  const donationAmount = document.getElementById(`donation-amount-${cardNumber}`);
  const totalAmount = document.getElementById('navbar-total-amount');
  const modal = document.getElementById(`modal-${cardNumber}`);

  const donationValue = parseInt(inputAmount.value);
  const totalBalence = parseInt(totalAmount.textContent)
  
  if (isNaN(donationValue) || donationValue <= 0) {
    alert('Please enter a valid donation amount');
    return;
  }
  if (totalBalence < donationValue) {
    alert('insufficient balence');
    return;
  }

  const currentDonation = parseInt(donationAmount.textContent);
  donationAmount.textContent = currentDonation + donationValue;

  const currentTotal = parseInt(totalAmount.textContent);
  totalAmount.textContent = currentTotal - donationValue;

  modal.showModal();
  inputAmount.value = '';
}

document.getElementById('donate-button-1').addEventListener('click', function () {
  handleDonation(1);
});

document.getElementById('donate-button-2').addEventListener('click', function () {
  handleDonation(2);
});

document.getElementById('donate-button-3').addEventListener('click', function () {
  handleDonation(3);
});
