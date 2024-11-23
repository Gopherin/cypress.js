describe('Покупка аватара', function () {                                
    it('Покупка доступного аватара для тренера', function () {   
         cy.visit('https://pokemonbattle.ru/');                                                     // Захожу на сайт покемонов
         cy.get(':nth-child(1) > .auth__input').should('be.visible');                               // Проверяю видимость                                        
         cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN');                                 // Ввожу логин
         cy.get('#password').should('be.visible');                                                  // Проверяю видимость
         cy.get('#password').type('USER_PASSWORD');                                                 // Ввожу пароль
         cy.get('button[type="submit"]').should('be.visible');                                      // Проверяю видимость              
         cy.get('button[type="submit"]').click();                                                   // Нажимаю на кнопку "Войти"
         cy.wait(2000);                                                                             // Ждем прогрузки экрана 
         cy.get('.header__container > .header__id').should('be.visible');                           // Проверяю видимость
         cy.get('.header__container > .header__id').click({ force: true });                         // Жмав на ID тренера
         cy.get('[href="/shop"]').should('be.visible');                                             // Проверяю видимость
         cy.get('[href="/shop"]').click({force: true});                                             // Жмав на кнопку "Сменить аватар"
         cy.get('.available > button').last().click({ force: true });                               // Жмав на последнюю долступную кнопку аватара
         cy.wait(1000);                                                                             // Жду прогрузки страницы с вводом карты
         cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').should('be.visible');      // Проверяю видимость
         cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4620869113632996');  // Ввожу номер карты
         cy.get(':nth-child(1) > .pay_base-input-v2').should('be.visible');                         // Проверяю видимость
         cy.get(':nth-child(1) > .pay_base-input-v2').type('1225');                                 // Ввожу срок годности карты
         cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').should('be.visible');       // Проверяю видимость
         cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');                // Ввожу CCV
         cy.get('.pay__input-box-last-of > .pay_base-input-v2').should('be.visible');               // Проверяю видимость
         cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('GERMAN DOLNIKOV');            // Ввожу держателя карты
         cy.get('.pay-btn').should('be.visible');                                                   // Проверяю видимость
         cy.get('.pay-btn').click();                                                                // Жмав на кнопку оплатить
         cy.get('#cardnumber').should('be.visible');                                                // Проверяю видимость
         cy.get('#cardnumber').type('56456');                                                       // Ввожу код из SMS
         cy.get('.payment__submit-button').should('be.visible');                                    // Проверяю видимость
         cy.get('.payment__submit-button').click();                                                 // Жмав на кнопку "Оплатить"
         cy.get('.payment__font-for-success').contains('Покупка прошла успешно');                   // Фиксируем прибыль Германа
     });
 });