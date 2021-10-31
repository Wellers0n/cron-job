interface Response {
  error: boolean
  status: string
}

function GetHealthService(): Response {
  return { error: false, status: 'ok' }
}

export { GetHealthService }
