const countElem = document.querySelector('#count');

updateVisitCount();

function updateVisitCount() {
    const url = 'https://api.countapi.xyz/update/sinisavukmirovic/github/?amount=1';

    fetch(url)
    .then(res => res.json())
    .then(res => {
        countElem.innerHTML = res.value;
    });
}