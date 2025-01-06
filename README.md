# next-boilerplate

## Краткое описание вашего проекта

## Предварительные требования

Убедитесь, что у вас установлены следующие инструменты:

- [Node.js](https://nodejs.org/) (версия 18 или выше)
- [npm](https://www.npmjs.com/get-npm) (обычно устанавливается вместе с Node.js)

## Инструкции по установке

1. Клонируйте репозиторий:

   ```
   git clone https://github.com/savorskaya-alisa/next-boilerplate
   cd next-boilerplate
   ```

2. Установите зависимости:

   ```
   npm install
   ```

3. Создайте файл .env:
   Скопируйте файл `.env.example` в `.env` и заполните его необходимыми значениями.

4. Запустите проект:
   ```
   npm run dev
   ```
   Теперь приложение доступно по адресу [http://localhost:3000](http://localhost:3000).

## Структура проекта

root/
├── public/ # Статические файлы (доступ через URL)
│ ├── images/ # Изображения
│ ├── icons/ # Иконки
│ ├── fonts/ # Шрифты
│ └── favicon.ico # Фавикон
├── src/ # Исходный код приложения
│ ├── app/ # Новая маршрутизация (Next.js 14 App Router)
│ │ ├── layout.tsx # Главный макет (Server Component)
│ │ ├── page.tsx # Главная страница
│ │ ├── feature-name/ # Директория для конкретной фичи
│ │ │ ├── page.tsx # Страница фичи
│ │ │ └── components/ # Компоненты, специфичные для фичи
│ ├── components/ # Повторно используемые компоненты
│ │ ├── ui/ # Компоненты интерфейса (Button, Input)
│ │ ├── layout/ # Header, Footer, Sidebar
│ │ └── shared/ # Другие общие компоненты
│ ├── hooks/ # Кастомные хуки React
│ ├── store/ # Глобальное состояние Redux
│ │ ├── index.ts # Конфигурация Redux Store
│ │ ├── api/ # Подключение API
│ │ ├── reducers/ # Redux Slice-файлы
│ │ └── configs/ # Configs
│ ├── services/ # Работа с API
│ │ └── api-client.ts # HTTP-клиент (например, axios)
│ ├── styles/ # Глобальные и модульные стили
│ │ ├── globals.css # Глобальные стили
│ │ └── feature-name.module.css # Модульные стили для конкретной фичи
│ ├── utils/ # Общие утилиты и хелперы
│ │ ├── constants.ts # Константы приложения
│ │ ├── helpers.ts # Общие функции-хелперы
│ │ └── validators.ts # Валидаторы
├── .env # Переменные окружения
├── .eslintrc.js # Настройки ESLint
├── .prettierrc # Настройки Prettier
├── tsconfig.json # Настройки TypeScript
├── package.json # Информация о проекте и зависимости
└── README.md # Документация проекта
