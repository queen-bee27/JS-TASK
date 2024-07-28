const doSomething = (callback) => {
    setTimeout(() => {
      const skills = ['HTML', 'CSS', 'JS'];
      const success = Math.random() > 0.5; // Simulate a 50/50 chance of success
  
      if (success) {
        callback(null, skills);
      } else {
        callback('It did not go well');
      }
    }, 2000);
  };
  
  const callback = (err, result) => {
    if (err) {
      return console.log(err);
    }
    return console.log(result);
  };
  
  doSomething(callback);
  
  // After 2 seconds, it will print either:
  // It did not go well
  // or
  // ['HTML', 'CSS', 'JS']
  