const btns = document.querySelectorAll('[data-modal-target]');
console.log(btns)
const closeBtns = document.querySelectorAll('.close-popup');
const overlay = document.querySelector('.modal-overlay');

const openModal = (modal) => {
    if (modal == null) return
    modal.classList.add('open')
    overlay.classList.add('open')
}

const closeModal = (modal) => {
    if (modal == null) return
    modal.classList.remove('open')
    overlay.classList.remove('open')
}

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        const modal = document.querySelector(btn.dataset.modalTarget)
        openModal(modal)
    })
})

closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const modal = btn.closest('.modal')
        closeModal(modal)
    })
})