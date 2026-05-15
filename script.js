const revealOnScroll = () => {
    const observerOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s ease-out';
        observer.observe(el);
    });
};

const style = document.createElement('style');
style.innerHTML = `
    .reveal.active {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);

const headerScroll = () => {
    const header = document.querySelector('header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 10px 30px -10px rgba(2, 12, 27, 0.7)';
            header.style.height = '70px';
        } else {
            header.style.boxShadow = 'none';
            header.style.height = '80px';
        }
    });
};

const mobileMenu = () => {
    const menuBtn = document.querySelector('.menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');

    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });

    document.querySelectorAll('.mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    });
};

const typingEffect = () => {
    const title = document.querySelector('.main-title');
    const text = title.textContent;

    title.textContent = '';

    let index = 0;

    const interval = setInterval(() => {
        title.textContent += text[index];
        index++;

        if (index === text.length) {
            clearInterval(interval);
        }
    }, 100);
};

window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

document.addEventListener('DOMContentLoaded', () => {
    revealOnScroll();
    headerScroll();
    mobileMenu();
    typingEffect();

    console.log('Portfólio carregado com sucesso 🚀');
});
```
