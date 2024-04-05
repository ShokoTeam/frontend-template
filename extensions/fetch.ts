export const apiFetch = async (request: any, opts?: unknown) => {
  const baseURL = process.env.API_URL || 'http://192.168.125.20:8080'
  console.log(baseURL, 'HELLO bASE url')
  const fetch = $fetch.create({
    baseURL
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
