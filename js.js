const modal = document.querySelector('.js-modal')
const buyBtns = document.querySelector('.js-buy-ticket')

function showbuyticket() {
    alert("adsdas");
}
for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showbuyticket)
}