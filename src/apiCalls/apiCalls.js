import axios from "axios"

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

export const createAdvice = async (advice, email, name) => {
  axios.post('https://us-central1-advizer-development.cloudfunctions.net/user', {
    advice: advice,
    email: email,
    name: name
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}

export const getAdviceSlips = async () => {
  return axios.get(
    "https://us-central1-advizer-development.cloudfunctions.net/user"
  );
};
