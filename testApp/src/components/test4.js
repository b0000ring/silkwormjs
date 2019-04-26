function test4() {
 	return {
		type: 'div',
    attributes: {
      class: 'test4',
    },
		content: [
			'ТЕСТ4',
			{
				type: 'p',
				class: '',
				content: [
					'ВЛОЖЕННЫЙ КОМПОНЕНТ'
				]
			}
		]
	}
}

export default test4