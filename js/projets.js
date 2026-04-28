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