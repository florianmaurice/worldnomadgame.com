window.addEventListener('load', function() {
    if (typeof navigator.serviceWorker !== 'undefined') {
        // caches.keys().then(function(cacheNames) {
        //     cacheNames.forEach(function(cacheName) {
        //         caches.delete(cacheName);
        //     });
        // });

        navigator.serviceWorker.register('/sw.js?v=2', { scope: '/' });
    }
});


window.addEventListener('load', function () {

    if (typeof navigator.serviceWorker !== 'undefined') {
        navigator.serviceWorker.register('/sw.js?v=2', { scope: '/' });
    }

    updateDigitalSamplesMenu();

});


function updateDigitalSamplesMenu() {

    const menuItem = `
        <li class="menu__item has-subnav">
            <a class="menu__link has-subnav" href="#">
                <span>Цифровые образцы</span>
                <svg class="icon icon--arrow icon--arrow-down">
                    <use/>
                </svg>
            </a>

            <ul class="menu__subnav">
                <li class="menu__subnav-item">
                    <a class="menu__subnav-link" data-link-anchor href="/digital-samples/bank-card/index.html">
                        Банковская карта
                    </a>
                </li>

                <li class="menu__subnav-item">
                    <a class="menu__subnav-link" data-link-anchor href="/digital-samples/car-title/index.html">
                        Технический паспорт автомобиля
                    </a>
                </li>

                <li class="menu__subnav-item">
                    <a class="menu__subnav-link" data-link-anchor href="/digital-samples/certificate/index.html">
                        Сертификат
                    </a>
                </li>

                <li class="menu__subnav-item">
                    <a class="menu__subnav-link" data-link-anchor href="/digital-samples/driving-license/index.html">
                        Водительское удостоверение
                    </a>
                </li>

                <li class="menu__subnav-item">
                    <a class="menu__subnav-link" data-link-anchor href="/digital-samples/id-card/index.html">
                        Удостоверение личности
                    </a>
                </li>

                <li class="menu__subnav-item">
                    <a class="menu__subnav-link" data-link-anchor href="/digital-samples/passport/index.html">
                        Паспорт
                    </a>
                </li>

                <li class="menu__subnav-item">
                    <a class="menu__subnav-link" data-link-anchor href="/digital-samples/passport-mockup/index.html">
                        Макет паспорта
                    </a>
                </li>

                <li class="menu__subnav-item">
                    <a class="menu__subnav-link" data-link-anchor href="/digital-samples/residence-permit/index.html">
                        Вид на жительство
                    </a>
                </li>

                <li class="menu__subnav-item">
                    <a class="menu__subnav-link" data-link-anchor href="/digital-samples/ssn/index.html">
                        Номер социального страхования
                    </a>
                </li>

                <li class="menu__subnav-item">
                    <a class="menu__subnav-link" data-link-anchor href="/digital-samples/travel-visa/index.html">
                        Туристическая виза
                    </a>
                </li>
            </ul>
        </li>
    `;

    document.querySelectorAll('nav.menu__nav > ul.menu__list').forEach(function (menu) {

        // Don't add twice
        if (menu.querySelector('a[href="/digital-samples/"]')) {
            return;
        }

        // Adds it before </ul>
        menu.insertAdjacentHTML('beforeend', menuItem);
    });
}