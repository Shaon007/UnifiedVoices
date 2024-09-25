function handleDonation(cardNumber) {
  const inputAmount = document.getElementById(`input-amount-${cardNumber}`);
  const donationAmount = document.getElementById(`donation-amount-${cardNumber}`);
  const totalAmount = document.getElementById('navbar-total-amount');
  const modal = document.getElementById(`modal-${cardNumber}`);

  const donationValue = parseFloat(inputAmount.value);
  const totalBalence = parseFloat(totalAmount.textContent)

  if (isNaN(donationValue) || donationValue <= 0) {
    alert('Please enter a valid donation amount');
    return;
  }
  else if (totalBalence < donationValue) {
    alert('insufficient balence');
    return;
  }

  else {
    const currentDonation = parseFloat(donationAmount.textContent);
    donationAmount.textContent = currentDonation + donationValue;

    const currentTotal = parseFloat(totalAmount.textContent);
    totalAmount.textContent = currentTotal - donationValue;

    modal.showModal();
    inputAmount.value = '';
    let sectorMessage = '';

    if (cardNumber === 1) {
      sectorMessage = `${donationValue} Taka is Donated for famine-2024 at Noakhali, Bangladesh`
    } else if (cardNumber === 2) {
      sectorMessage = `${donationValue} Taka is Donated for Flood Relief in Feni, Bangladesh`;
    } else if (cardNumber === 3) {
      sectorMessage = `${donationValue} Taka is Donated for Aid for injured in the Quota Movement, Bangladesh`;
    }

    const histItem = document.createElement('div')
    histItem.className = "w-5/6 mx-auto bg-white p-5 rounded-lg border-2 border-gray-200"
    histItem.innerHTML = `
      <p class="text-xl font-bold text-black py-2">${sectorMessage}</p>
      <p class="text-base text-slate-600">Date: ${new Date().toString()}</p>
    `;
    historyContent.insertBefore(histItem, historyContent.firstChild)
  }

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
const histButton = document.getElementById('history-tab-button');
const donatButton = document.getElementById('donate-tab-button');
const historyContent = document.getElementById('history-list');
const donateCard = document.getElementById('donation-cards')
const historyContainer = document.getElementById('history-container');
const historySection = document.getElementById('history-section')

function historyButton() {
  donatButton.classList.remove('bg-green-400')
  histButton.classList.add('bg-green-400');
  donateCard.classList.add('hidden')
  historySection.classList.remove('hidden')

}
function donationButton() {
  histButton.classList.remove('bg-green-400')
  donatButton.classList.add('bg-green-400');
  donateCard.classList.remove('hidden')
  historySection.classList.add('hidden')
}
