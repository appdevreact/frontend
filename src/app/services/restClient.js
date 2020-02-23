
cldsexport function post(resourcePath) { 
  const url = resourcePath;
  const settings = {
   
    method: "POST",
    credentials: "same-origin",
   
  };
  console.log('>>>>>>>Settings>>>>>>',settings);
  return fetch(url,settings);
}
// export function post(resourcePath, requestBody,serviceAccount,rememberMe) { 
//   const url = resourcePath;
//   const settings = {
//     headers: {
//       "Content-type": data.contentType,
//       "X-AOS-ServiceAccount": serviceAccount,     
//       "X-AOS-RememberMe":rememberMe,
//       "cache-control":"no-cache",
     
//     },
//     method: data.methodType,
//     credentials: "same-origin",
//     body: requestBody,
//   };
//   console.log('>>>>>>>Settings>>>>>>',settings);
//   return fetch(url,settings);
// }
export function get(url) {
  console.log('>>>>url>>>>>>>',url)
  return new Promise((resolve, reject) => {
    try {
      fetch(url, {
        method: "GET",
       
      })
        .then(response => {
          response.json().then(json => {
          
          resolve(json.data);
          })
        })
        
    } catch (error) {}
  });
}

