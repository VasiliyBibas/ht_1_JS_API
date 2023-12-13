// Статическая веб-страница с динамическими элементами:
// Создайте HTML-страницу с заголовком "Расписание занятий".

// Таблица с информацией о занятиях:
// Используйте JavaScript для динамического создания таблицы на основе JSON-данных.
// Каждая строка таблицы должна содержать информацию о занятии: название, время проведения, максимальное и текущее количество участников.
// 3. Кнопки "Записаться" и "Отменить запись":

// Рядом с каждым занятием добавьте кнопку "Записаться".
// Если максимальное количество участников достигнуто, сделайте кнопку неактивной.
// Предусмотрите кнопку "Отменить запись", которая появляется после записи на занятие.
// 4. Интерактивность с JavaScript:

// При нажатии на кнопку "Записаться" увеличьте количество записанных участников.
// Если пользователь нажимает "Отменить запись", уменьшите количество записанных участников.
// Обновляйте состояние кнопок и количество участников в реальном времени.
// 5. Дополнительно: Хранение данных в Local Storage:

// Сохраняйте изменения в Local Storage, чтобы они сохранялись при перезагрузке страницы.



fetch("products.json")
	.then(function (response) {
		return response.json();
	})
	.then(function (products) {
		let placeholder = document.querySelector("#data-output");
		let out = "";
		for (let product of products) {
			out += `
         <tr>
				 		<td>${product.id}</td>
            <td>${product.name} <button id="addBtn">Записаться</button> <button id="delBtn">Отменить запись</button></td>
            <td>${product.time}</td>
            <td>${product.maxParticipants}</td>
            <td>${product.currentParticipants}</td>
         </tr>
      `;
		}

		placeholder.innerHTML = out;

		const addBtn = document.getElementById('addBtn');
		const delBtn = document.getElementById('delBtn');

		addBtn.addEventListener('click', () => {
			let newNote = product.currentParticipants.value;
			console.log(newNote);
			if (newNote >= product.maxParticipants.value) {
				alert('Записи больше нет!');
			} else {
				product.currentParticipants.innerHTML = newNote;
				newNote++;
			}
			localStorage.setItem('Записи', placeholder.innerHTML);
		});

		delBtn.addEventListener('click', () => {
			if (product.maxParticipants.value < 0) {
				alert('Превышено минимальное значение!');
			} else {
				product.currentParticipants.innerHTML = newNote;
				product.maxParticipants.value--;
			}
			localStorage.setItem('Записи', placeholder.innerHTML);
		});
	});



