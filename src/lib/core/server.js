
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

// get data from the server
export const getData=async(path)=>{
 const res=await fetch(`${baseUrl}${path}`);
 const data=await res.json();
 return data;
}








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