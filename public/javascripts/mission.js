function flip(){
    document.querySelectorAll('.card').forEach(card => {
    const inner = card.querySelector('.card-inner');
    let flipped = false;

    card.addEventListener('click', () => {
        flipped = !flipped;
        inner.style.transform = `rotateY(${flipped ? 180 : 0}deg)`;
    });
    });
}
flip()