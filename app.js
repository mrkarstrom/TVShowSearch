const form = document.querySelector('#searchForm');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.dir(form.elements.query.value);
})