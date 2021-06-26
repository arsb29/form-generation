<h1 align="center">Тестовое задание для стажёра в команду фронтенд-инфраструктуры</h1>

## Демо
Демо версию проекта можно посмотреть [здесь](https://arsb29.github.io/form-generation/).

## Подключение
Для подключения генератора формы необходимо импортировать функцию и передать в качестве аргументов элемент, который будет контейнером для формы, и json
```js
import { render } from './js/form.js';

const elem = document.querySelector('.module');

render(elem, json);
```

## Структура JSON
```
{
  "inputs": [
    {
    "label": "Фамилия",
    "type": "text" | "checkbox" | "date" | "email" | "password" | "number" | "tel",
    "id": "last_name",
    "placeholder": "Беляев"
    },
    {
    "label": "Возраст",
    "type": "number",
    "id": "age",
    "placeholder": "21"
    },
    "label": "Ваша машина",
    "type": "select",
    "id": "cars",
    "options": ['Volvo', 'Saab', 'Opel', 'Audi']
    },
    {
    "label": "О себе",
    "type": "textarea",
    "id": "textarea"
		},
   ]
  "submit": {
    "url": "www.example.com",
    "text": "Отправить"
  }
}
```
