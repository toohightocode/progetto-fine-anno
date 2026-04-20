document.addEventListener('DOMContentLoaded', () => {
    const nav = document.getElementById('navbar');
    const links = nav.querySelectorAll('a');
    const ind = document.createElement('div');

    // Sovrascrittura con !important per superare Tailwind
    nav.style.setProperty('top', '-56px', 'important');
    nav.style.position = 'fixed';

    ind.className = 'absolute bg-gray-200 rounded-lg transition-all duration-300';
    nav.appendChild(ind);

    const move = (element) => {
        ind.style.cssText = `width:${element.offsetWidth}px;height:${element.offsetHeight}px;left:${element.offsetLeft}px;top:${element.offsetTop}px`;
        links.forEach(l => l.className = 'relative z-10 px-2 py-1');
        element.className = 'relative z-10 px-2 py-1 text-black';
    };

    const startPos = -56;   // -top-14
    const endPos = 16;
    const scrollRange = 200;

    window.onscroll = () => {
        const y = window.scrollY;
        const progress = Math.min(1, y / scrollRange);
        nav.style.setProperty('top', (startPos + ((endPos - startPos) * progress)) + 'px', 'important');

        links.forEach(a => {
            const s = document.querySelector(a.hash);
            if (y + innerHeight / 2 >= s.offsetTop && y + innerHeight / 2 < s.offsetTop + s.offsetHeight) move(a);
        });
    };

    links.forEach(a => a.onclick = e => { e.preventDefault(); document.querySelector(a.hash).scrollIntoView({ behavior: 'smooth' }); });

    move(links[0]);
});