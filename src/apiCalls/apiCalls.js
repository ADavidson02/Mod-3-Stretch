
export const getNewRandom = async () => {
  const response = await fetch("https://api.adviceslip.com/advice");
  if (response.status >= 200 && response.status <= 299 ) {
    const jsonResponse = await response.json();
    return jsonResponse
  } else {
    console.log(`Error ${response.status}`)
    return response.status;
  }
}