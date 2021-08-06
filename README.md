<h1 align="center">1Тестовое задание для стажёра в команду фронтенд-инфраструктуры</h1>

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

<b>inputs</b> содержит массив объектов, каждый из которых это поле формы. Поле формы может быть разных типов:
<ul>
    <li>text</li>
    <li>checkbox</li>
    <li>date</li>
    <li>email</li>
    <li>password</li>
    <li>number</li>
    <li>tel</li>
    <li>textarea</li>
    <li>select</li>
</ul>

В последнем случае следует передать options - массив возможных вариантов.

Кроме типа поля можно передать <b>label</b> - название поля, <b>id</b>, <b>placeholder</b> - подсказка при вводе, <b>required</b> - обязательное ли поле для ввода (1 - да, 0 - нет).

Объект <b>submit</b> содержит <b>url</b> для отправки и <b>text</b> - текст, который будет отображаться на кнопке

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
