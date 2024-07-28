const doPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const skills = ['HTML', 'CSS', 'JS'];
      if (skills.includes('Node')) {
        resolve('fullstack developer');
      } else {
        reject('Something wrong has happened');
      }
    }, 2000);
  });
  
  doPromise
    .then(result => {
      console.log(result);
    })
    .catch(error => console.error(error));
  
  // After 2 seconds it will print:
  // Something wrong has happened
  