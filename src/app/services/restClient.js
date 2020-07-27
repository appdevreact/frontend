export function post(resourcePath) {
  const url = resourcePath;
  const settings = {
    method: "POST",
    credentials: "same-origin",
  };

  return fetch(url, settings);
}

export function get(url) {
  console.log(">>>>url>>>>>>>", url);
  return new Promise((resolve, reject) => {
    try {
      fetch(url, {
        method: "GET",
      }).then((response) => {
        console.log(">>>>>>>>>>>.Response>>>>>>", response);
        response.json().then((json) => {
          console.log(">>>>>>>>>>>.json>>>>>>", json);
          resolve(json);
        });
      });
    } catch (error) {}
  });
}
