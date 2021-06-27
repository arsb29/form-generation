export function render(parent, json, theme = 'light') {
	const div = document.createElement('div');

	div.attachShadow({ mode: 'open' });
	div.shadowRoot.innerHTML = `<style>
		* {
			font-family: sans-serif;
		}

		.container {
			padding: 15px;
		}

		.container-dark {
			background-color: #222;
		}
		
		.item {
			display: flex;
			margin: 0 0 17px;
			align-items: center;
		}

		.item__label {
			font-weight: bold;
			width: 190px;
			margin: 0 10px 0 0;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		.item__label-dark {
			color: #eee;
		}

		.item__label-checkbox {
			width: 300px;
			overflow: hidden;
			text-overflow: ellipsis;
			cursor: pointer;
		}

		.item__label-textarea {
			align-self: start;
		}

		.item__input {
			width: 300px;
			padding: 10px 15px;
			border-radius: 15px;
			border: 1px solid #aaa;
		}

		.item__input-dark {
			background-color: #666;
			border: none;
			color: #eee;
		}

		.item__input-dark::placeholder {
			color: #bbb;
		}

		.item__input-checkbox {
			cursor: pointer;
			margin: 0 10px 0 200px;
		}

		.item__input-textarea {
			height: 100px;
		}

		.btn {
			padding: 10px 15px;
			border-radius: 15px;
			border: 1px solid #aaa;
			margin: 0 0 0 200px;
			cursor: pointer;
			font-weight: bold;
			background-color: white;
			transition: all 0.5s ease 0s;
		}

		.btn-dark {
			background-color: #666;
			border: none;
			color: #eee;
		}

		.btn:hover {
			background-color: #eee;
		}

		.btn-dark:hover {
			background-color: #444;
		}
	</style>`;

	const form = document.createElement('form');
	form.setAttribute('action', json.submit.url);
	form.classList.add('container', `container-${theme}`)
	json.inputs.forEach(element => {
		switch (element.type) {
			case 'select':
				form.innerHTML += `<div class='item'>
				<label class='item__label item__label-${theme}' for=${element.id}>${element.label}</label>
				<select class='item__input item__input-${theme}' id=${element.id} name=${element.id + '_list'} >
					${element.options.map(value => `<option value=${value} >${value}</option>`).join('')}
				</select>
		</div>`
				break;

			case 'textarea':
				form.innerHTML += `<div class='item'>
				<label class='item__label item__label-textarea item__label-${theme}' for=${element.id}>${element.label}</label>
				<textarea class='item__input item__input-textarea item__input-${theme}' type=${element.type} id=${element.id} >${element.placeholder ? element.placeholder : ''}</textarea>
		</div>`
				break;

			case 'checkbox':
				form.innerHTML += `<div class='item'>
				<input class='item__input-checkbox' type=${element.type} id=${element.id} ${element.required ? "required" : ""} />
				<label class='item__label-checkbox item__label-${theme}' for=${element.id}>${element.label}</label>
		</div>`
				break;

			default:
				form.innerHTML += `<div class='item'>
				<label class='item__label item__label-${theme}' for=${element.id}>${element.label}</label>
				<input class='item__input item__input-${theme}' type=${element.type} id=${element.id} ${element.placeholder ? 'placeholder=' + element.placeholder : ''} ${element.required ? "required" : ""} />
		</div>`
		}
	})
	form.innerHTML += `<button class="btn btn-${theme}" type="submit">${json.submit.text}</button>`

	div.shadowRoot.appendChild(form)
	parent.appendChild(div)
}