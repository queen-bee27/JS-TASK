function is_valid_variable(variableName) {
    // Regular expression to check if the string is a valid variable name
    const isValid = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(variableName);
    return isValid;
  }
  
  // Test cases
  console.log(is_valid_variable('first_name'));   // true
  console.log(is_valid_variable('first-name'));   // false
  console.log(is_valid_variable('1first_name'));  // false
  console.log(is_valid_variable('firstname'));    // true
  