function test1() {
	return {
    type: 'div',
    attributes: {
      class: 'test1',
    },
		content: [
			'$CHILDREN$'
		]
	}
}

export default test1