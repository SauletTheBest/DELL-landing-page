document.addEventListener('DOMContentLoaded', () => {
    // Находим все кнопки с классом track-cta
    const ctaButtons = document.querySelectorAll('.track-cta');

    ctaButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Получаем название кнопки из атрибута data-cta-name
            const buttonName = e.target.getAttribute('data-cta-name') || 'Unknown_CTA';
            
            // Инициализируем dataLayer, если он еще не создан GTM
            window.dataLayer = window.dataLayer || [];
            
            // Отправляем событие в GTM
            window.dataLayer.push({
                'event': 'cta_button_click',
                'button_name': buttonName
            });

            console.log(`Событие отправлено: ${buttonName}`);
        });
    });
});
