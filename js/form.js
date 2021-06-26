export function render(parent, json) {
	const div = document.createElement('div');
	div.attachShadow({ mode: 'open' });
	div.shadowRoot.innerHTML = `<style>
		* {
			font-family: sans-serif;
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

		.btn:hover {
			background-color: #eee;
		}
	</style>`;

	const form = document.createElement('form');
	form.setAttribute('action', json.submit.url);
	json.inputs.forEach(element => {
		switch (element.type) {
			case 'select':
				form.innerHTML += `<div class='item'>
				<label class='item__label' for=${element.id}>${element.label}</label>
				<select class='item__input' id=${element.id} name=${element.id + '_list'} >
					${element.options.map(value => `<option value=${value} >${value}</option>`).join('')}
				</select>
		</div>`
				break;

			case 'textarea':
				form.innerHTML += `<div class='item'>
				<label class='item__label item__label-textarea' for=${element.id}>${element.label}</label>
				<textarea class='item__input item__input-textarea' type=${element.type} id=${element.id} >${element.placeholder ? element.placeholder : ''}</textarea>
		</div>`
				break;

			case 'checkbox':
				form.innerHTML += `<div class='item'>
				<input class='item__input-checkbox ' type=${element.type} id=${element.id} ${element.required ? "required" : ""} />
				<label class='item__label-checkbox' for=${element.id}>${element.label}</label>
		</div>`
				break;

			default:
				form.innerHTML += `<div class='item'>
				<label class='item__label' for=${element.id}>${element.label}</label>
				<input class='item__input' type=${element.type} id=${element.id} ${element.placeholder ? 'placeholder=' + element.placeholder : ''} ${element.required ? "required" : ""} />
		</div>`
		}
	})
	form.innerHTML += `<button class="btn" type="submit">${json.submit.text}</button>`

	div.shadowRoot.appendChild(form)
	parent.appendChild(div)
}