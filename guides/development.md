Все команды запускаем либо из терминала переходя в нужную директорию, либо из package.json. 

Для локальной разработки нужно:

1. После клонирования репозитория, запускаем из корня скрипт npm run build:all:dev, это запустит
   сборщики для всех модулей с актуальной на данный момент версией, если по какой-то причине нам нужна 
   более ранняя версия модуля, то переходим в ветку с нужным релизом, переходим в директорию нужного модуля
   и запускаем команду npm run build:dev .
2. Из корня проекта запускаем команду npm run start:dev, это запустит докер контейнер
   с Nginx, который раздает статику из модулей. В файле nginx.dev.conf прописаны алеасы
   откуда берется статика, изменяя номер можно подставлять разные версии модулей,
   либо можем запроксировать, например если нам надо подтянуть какой-то модуль из релиза во время разработки .
3. Что бы запустить девсервер, переходим в нужный модуль и запускаем команду npm run devserver.

   