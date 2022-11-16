const reverse = (string) => {
   const splitString = string.split("");
   const reverseString = splitString.reverse();
   const joinString = reverseString.join("");
   return joinString
}

module.exports = reverse;