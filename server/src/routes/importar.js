function importar(...fns) {
  for (let i = 0; i < fns.length; i++) {
    return new Promise(resolve =>
      fetch(`http://localhost:3000/dinamicAPI/getFunctionById?id=${fns[i]}`, {
        headers: {
          "Content-Type": "text/javascript",
        },
      }).then(response => {
        resolve(response.text());
      })
    );
  }
}
