const submitData= function(userName, userEmail) {
    return fetch("http://localhost:3000/users",{
        method:"POST",
        headers: {
            "Content-Type":"application/json",
            "Accept":"application/json",
        },
        body:JSON.stringify({
            "name":userName,
            "email":userEmail
        })
    }).then(response=> response.json())
    .then(data=>renderId(data))
    .catch((error)=> {
        const span=document.createElement("span")
        span.innerHTML=error.message;
        document.body.append(span)
})
}
const renderId=data=> {
    const span=document.createElement("span")
    span.innerHTML=data.id;
    document.body.append(span)
}


// const submitData = {
//     userName: "name",
//     userEmail: "email"
//   };
  
//   const configurationObject = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json"
//     },
//     body: JSON.stringify(formData)
//   };
  
//   fetch("http://localhost:3000/users", configurationObject)
//     .then(function(response) {
//       return response.json();
//     })
//     .then(function(object) {
//       console.log(object);
//     }); 
  
 