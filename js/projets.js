document.addEventListener('DOMContentLoaded', () => {
    const filterBtns = document.querySelectorAll('.filter')
    const filterItems = document.querySelectorAll('.filter-item')

    const filterProjects = (cat) => {
        filterItems.forEach(item => {
            project = item.firstElementChild
            if (cat !== 'all' && !project.classList.contains(cat)) {
                item.classList.add('hide')
            } else {
                item.classList.remove('hide')
            }
        })
    };

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
        filterBtns.forEach(btn => btn.classList.remove('active', 'web', 'prog', 'design', 'three-d'))
        btn.classList.add('active')
        const filterValue = btn.getAttribute('data-filter')
        btn.classList.add(filterValue)
        filterProjects(filterValue)
        });
    });

    filterProjects('all')
});

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