function test1() {
  console.log('test1')
  return {
		type: 'div',
		class: 'test1',
		content: [
			'$CHILDREN$'	
		]
	}
}

export default test1