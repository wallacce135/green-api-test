# Тестовое задание Green API

## Задача

>Алгоритм работы:
>1. Пользователь заходит в личный кабинет GREEN-API и создает новый инстанс
>на бесплатном аккаунте разработчика.
>2. Пользователь сканирует QR-код и подключает свой номер телефона к
>инстансу.
>3. Пользователь заходит на разработанную Вами страницу в Интернете и вводит
>параметры подключения к инстансу - idInstance и ApiTokenInstance 4.
>Пользователь последовательно нажимает на кнопки «getSettings»,
>«sendMessage» и видит результат работы – сообщения отправляются, ответ
>методов отображается на странице.

> Готовое решение можно посмотреть <a href="https://green-api-test-zeta.vercel.app/">тут</a> даже не собирая проект.

## Требования

1. Требуется разработать HTML-страницу с вызовами методов GREEN-API:
• getSettings
• getStateInstance
• sendMessage
• sendFileByUrl
2. Требуется разместить на странице параметры подключения к инстансу -
idInstance и ApiTokenInstance
3. Требуется вывести ответ методов в отдельное поле на странице только для
чтения.
4. Требуется придерживаться макета – см. рис. ниже.

## Запуск проекта

1. Установка пакетов node_modules
```
    npm install
```
2. Запуск проекта из корневой директории (на уровне package.json)
```
    npm run dev
```
или (если ваша текущая версия node.js ниже 20.0.0 и предустановлен nvm)
```
    nvm use 20 && npm run dev
```
Если у вас отсутствует версия node.js 20.0.0, вы можете установить её с помощью <a target="_blank" href="https://github.com/nvm-sh/nvm/blob/master/README.md">nvm</a>

3. Открыть проект в веб

После запуска, проект доступен по адресу <a href="http://localhost:8080">localhost:8080</a>