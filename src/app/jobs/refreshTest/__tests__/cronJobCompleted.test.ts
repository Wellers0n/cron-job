import cronJobCompleted from '../cronJobCompleted'

describe('cronJobCompleted Test case', () => {
  it('Should be an instance of a function', () => {
    expect(cronJobCompleted).toBeInstanceOf(Function)
  })

  it('Should return null', () => {
    const response = cronJobCompleted()
    expect(response).toBeNull()
  })
})
