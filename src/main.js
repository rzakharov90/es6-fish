
/* Памятка для себя - чтобы не забыть

    require('es6-promise').polyfill(); -- подключает поддержку промисов старыми браузерами
    
    import Helper from './Helper'; -- Статичное подключение модуля с помощью es6
     let cartPopup = require( "./CartPopup");  -- Статичное подключение модуля в сборку с помощью webpack
    exports.Helper = Helper; -- экспорт класса в глобальную переменную
    
    
    require.ensure([], function (require) {
            require([ "./Filter"]);  -- динамическое подключение модуля
        });
        

    let Helper = home.Helper; - подключение глобальной переменной в подключаемом модуле
    module.exports = cartPopup; -- экспорт переменной из модуля
        
        
*/