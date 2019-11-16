function importar(...fns) {
  for (let i = 0; i < fns.length; i++) {
    return new Promise(resolve =>
      fetch(`http://ec2-3-15-13-14.us-east-2.compute.amazonaws.com:5000/dinamicAPI/getFunctionById?id=${fns[i]}`, {
        headers: {
          "Content-Type": "text/javascript",
        },
      }).then(response => {
        resolve(response.text());
      })
    );
  }
}
