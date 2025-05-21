const defaultHeaders = {
  'Content-Type': 'application/json'
};

// Función interna común
async function request(method, url, data = null, onSuccess, onError) {
  try {
    const options = {
      method,
      headers: defaultHeaders
    };

    if (data && method !== 'GET') {
      options.body = JSON.stringify(data);
    }

    const response = await fetch(url, options);

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText || 'Error en la solicitud');
    }

    const contentType = response.headers.get("content-type");
    const responseData = contentType?.includes("application/json")
      ? await response.json()
      : await response.text();

    onSuccess?.(responseData);
    return responseData;
  } catch (error) {
    onError?.(error);
    return null;
  }
}

// Funciones públicas
export const apiService = {
  get: (url, onSuccess, onError) => request('GET', url, null, onSuccess, onError),
  post: (url, data, onSuccess, onError) => request('POST', url, data, onSuccess, onError),
  put: (url, data, onSuccess, onError) => request('PUT', url, data, onSuccess, onError),
  del: (url, data, onSuccess, onError) => request('DELETE', url, data, onSuccess, onError)
};