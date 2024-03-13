function reverterString(string) {
  let gnirts = "";
  for (let i = string.length - 1; i >= 0; i--) {
    gnirts += string[i];
  }
  console.log(gnirts);
}

reverterString("string");
