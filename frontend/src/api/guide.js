const API_URL = import.meta.env.VITE_API_URL;

if (!API_URL) {
  throw new Error('VITE_API_URL is not defined');
}

const request = async (url) => {
  const res = await fetch(url);

  let data = null;

  try {
    data = await res.json();
  } catch {
    data = null;
  }

  if (!res.ok) {
    throw new Error(data?.message || 'Request failed');
  }

  return data;
};

export const getGuideSecrets = async (token) => {
  return request(`${API_URL}/api/guide/${token}/secrets`);
};

export const getReservation = async (token) => {
  return request(`${API_URL}/api/guide/${token}`);
};
