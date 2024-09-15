document.addEventListener('DOMContentLoaded', () => {
    main.categories();
    main.films(films);
});

const main = {
    categories: () => {
        // Находим контейнер для тегов
        const categoryContainer = document.querySelector('.category');

        // Добавляем теги в контейнер
        categories.tags.forEach((tag, index) => {
            const tagElement = document.createElement('div');
            tagElement.className = 'tag';
            tagElement.textContent = tag;
            categoryContainer.appendChild(tagElement);

            // По умолчанию активный класс для первого элемента
            if (index === 0) {
                tagElement.classList.add('active');
            }
        });

        // Вешаем обработчик на клики по тегам внутри контейнера
        categoryContainer.addEventListener('click', (event) => {
            if (event.target.classList.contains('tag')) {
                // Удаляем активный класс у всех
                document.querySelectorAll('.category .tag').forEach(t => t.classList.remove('active'));
                // Добавляем активный класс выбранному
                event.target.classList.add('active');

                const wrapper = document.querySelector('.wrapper');
                wrapper.innerHTML = '';

                const tag = event.target.innerText;
                const filmsSort = films.filter((film) => {
                    return film.category === tag || tag === 'Все';
                })

                if (filmsSort.length) {
                    main.films(filmsSort);
                } else {
                    wrapper.innerHTML = '<h3>Фильмы не найдены</h3>';
                }

            }
        });
    },
    films: (films) => {
        // Находим элемент wrapper
        const wrapper = document.querySelector('.wrapper');

        wrapper.innerHTML = '';

        // Функция для создания и добавления элементов фильма
        films.forEach(film => {
            const filmDiv = document.createElement('div');
            filmDiv.className = 'film';
            filmDiv.innerHTML = `
                    <img src="${film.img}" alt="film" />
                    <div class="title">${film.title}</div>
                    <div class="rating">Рейтинг: ${film.rating}</div>
                `;
            wrapper.appendChild(filmDiv);

            // Обработчик клика по фильму
            filmDiv.addEventListener('click', function() {
                const modalTrailer = document.querySelector('.modal-trailer');

                modalTrailer.classList.add("modal-trailer-active");

                const iframeVideo = document.querySelector('.iframe-video');
                iframeVideo.setAttribute('src', film.video);
            });
        });
    },
    sortFilmCategory: () => {

    }
}

function onCloseModalTrailer() {
    const modalTrailer = document.querySelector('.modal-trailer');

    modalTrailer.classList.remove("modal-trailer-active");
}

const categories = {
    tags: ['Все', 'Комедии', 'Боевики', 'Исторические', 'Фантастика']
};

const films = [
    {
        img: "https://devalex.ru/project/codik/course/css/image/films/1.jpg",
        title: "Отцовство (фильм, 2021)",
        rating: 7.9,
        category: 'Комедии',
        video: 'https://www.youtube.com/embed/kvu4g33aZXU?si=asFJ6pCtMs0LZ-4v'
    },
    {
        img: "https://devalex.ru/project/codik/course/css/image/films/2.jpg",
        title: "Не смотрите наверх | Don't Look Up (2021)",
        rating: 5.9,
        category: 'Фантастика',
        video: 'https://www.youtube.com/embed/X0O3G6QS8rY?si=cxIVk-3tbU-9iweg'
    },
    {
        img: "https://devalex.ru/project/codik/course/css/image/films/3.jpg",
        title: "Лжец лжец 1997",
        rating: 7.3,
        category: 'Комедии',
        video: 'https://www.youtube.com/embed/OxtpS66DP0I?si=MGl-Tp7sFu_jzuqD'
    },
    {
        img: "https://devalex.ru/project/codik/course/css/image/films/4.jpg",
        title: "Третий Лишний 2012",
        rating: 6.0,
        category: 'Боевики',
        video: 'https://www.youtube.com/embed/QW5-YOl1aQM?si=TOzQumzn8Poj5F1G'
    },
    {
        img: "https://devalex.ru/project/codik/course/css/image/films/5.jpg",
        title: "Исправь меня, если сможешь / Abbi Fede (2020)",
        rating: 4.3,
        category: 'Фантастика',
        video: 'https://www.youtube.com/embed/esL5iYYyxyw?si=le9fo1UFjiOL_s_b'
    },
    {
        img: "https://devalex.ru/project/codik/course/css/image/films/6.jpg",
        title: "Укради мою жену (2013)",
        rating: 7.9,
        category: 'Боевики',
        video: 'https://www.youtube.com/embed/IBskITTGYCY?si=RPs1brXMJPlqIV9r'
    }
];