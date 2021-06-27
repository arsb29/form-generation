<h1 align="center">Тестовое задание для стажёра в команду фронтенд-инфраструктуры</h1>

## Демо
Демо версию проекта можно посмотреть [здесь](https://arsb29.github.io/form-generation/).

## Подключение
Для подключения генератора формы необходимо импортировать функцию и передать в качестве аргументов элемент, который будет контейнером для формы, и json, в котором находятся поля формы
```js
import { render } from './js/form.js';

const elem = document.querySelector('.module');

render(elem, json);
```

## Структура JSON
JSON имеет два объекта:
<ul>
    <li>inputs - поля формы</li>
    <li>submit - инфо по отправки формы</li>
</ul>

```js
{
    "inputs": [
    {
        "label": "Фамилия",
        "type": "text" | "checkbox" | "date" | "email" | "password" | "number" | "tel" | "textarea",
        "id": "last_name",
        "placeholder": "Беляев",
        "required": 1 | 0
    },
    {
        "label": "Ваша машина",
        "type": "select",
        "id": "cars",
        "options": ['Volvo', 'Saab', 'Opel', 'Audi']
    }
    ]
    "submit": {
        "url": "www.example.com",
        "text": "Отправить"
    }
}
```

## Темная тема
Чтобы поменять тему необходимо третьим параметром передать название темы
```js
render(elem, json, 'dark');
```
![Темная тема](https://user-images.githubusercontent.com/47639785/123540152-3a41b780-d746-11eb-8706-70dae743d756.gif)
