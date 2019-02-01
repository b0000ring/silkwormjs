function test4() {
  console.log('test4')
 	return {
		type: 'div',
		class: 'test4',
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