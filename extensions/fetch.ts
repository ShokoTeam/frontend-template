export const apiFetch = async (request: any, opts?: unknown, token?: string | null) => {
  const baseURL = process.env.API_URL || 'http://89.111.170.200:8080'
  if (baseURL === '') {
    throw new Error('API_URL is not defined')
  }
  const fetch = $fetch.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  })

  return await fetch(request, opts || undefined).catch((e) => {
    const error = e
    error.details = {}

    if (e.response && e.response._data) {
      error.message = e.response._data.error
      error.details = e.response._data.details
    }
    throw error
  })
}
