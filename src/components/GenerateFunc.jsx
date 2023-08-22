export const GenerateFunc = (checkboxData, length, setPassword) => {
  let chrset = "";
  let pass = "";

  const selectedOption = checkboxData.filter((data) => data.checked);
  if (selectedOption.length === 0) {
    alert("select at least on checkbox");
    setPassword("");
    return;
  }
  selectedOption.forEach((option) => {
    switch (option.name) {
      case "Include Symbols":
        chrset += "!@#$%^&*()_+~`|}{[]:;?><,./-=";
        break;

      case "Include Numbers":
        chrset += "0123456789";
        break;

      case "Include LowerCase":
        chrset += "abcdefghijklmnopqrstuvwxyz";
        break;

      case "Include UpperCase":
        chrset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        break;
      default:
        break;
    }
  });
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chrset.length);
    pass += chrset[randomIndex];
  }
  setPassword(pass);
};
