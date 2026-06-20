
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

// get data from the server
export const getData = async (path) => {
  try {
    const res = await fetch(`${baseUrl}${path}`);

    if (!res.ok) {
      throw new Error(`HTTP Error ${res.status}`);
    }

    const text = await res.text();

    if (!text) {
      return null;
    }

    return JSON.parse(text);
  } catch (error) {
    console.error("GET DATA ERROR:", error);
    return null;
  }
};






// post data to the server
export const postData = async (api,data) => {
  const res = await fetch(`${baseUrl}${api}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  return res.json();
};