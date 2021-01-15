# GULP

gulp is a toolkit that helps you automate painful or time-consuming tasks in your development workflow

## Insallation

```bash
npm i
gulp
```

## Usage

Gulp следит за папкой #src и рендерит дирректорию dist, сервер GULP смотрит в эту дирректорию

## Chat Dashboard Figma

https://www.figma.com/file/G0BvDPcpv36Wix6nGxbaB1/Chat-Dashboard?node-id=0%3A1


## Основные функции

1. Регистрация, авторизация (jwt?)
2. Страница пользователя

## Side bar

1. CHAT
Поиск по телу сообщения
Создание группового чата
2. CONTACT
Найти по идентификатору человека и модалка с отправкой соообщения, вкл/выкл звукового уведомления с изменением title, просмотром всех вложений
3. SETTINGS
Возможность пользотвателя отредактировать свой профиль (поменять аватарку)


## STACK
1. GraphQL 
usecase: (отправка/получение сообщений. Различные уведомления, статусы)
2. React, TypeScript, Redux
3. Postgres (хранение сообщений/профилей/ссылок на файлы)
4. Django/DjangoORM/graphene-django
Модель пользователя/диалога

