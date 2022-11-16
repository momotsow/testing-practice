function length(string) {
  if(string.length < 1 || string.length > 10)
  return "Error";
  return string.split('').reduce((length) => length + 1, 0);
} 

module.exports = length;