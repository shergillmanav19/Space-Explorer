const getImagesFromAPI = async ({
  start_date = "",
  end_date = "",
  count = "",
  thumbs = "",
}) => {
  let data = { status: "loading", data: {} };
  try {
    const response = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}&count=${count}&start_date=${start_date}&end_date=${end_date}&thumbs=${thumbs}`
    );
    const response_data = await response.json();
    data["status"] = "Success";
    data["data"] = response_data;
    console.log(data);
    return data;
  } catch (e) {
    data["status"] = "Error";
    console.warn(e);
    return data;
  }
};

export default getImagesFromAPI;
