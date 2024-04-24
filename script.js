const button = document.getElementById("btn");
const result = document.getElementById("result");

function isPalindromeCheck(val) {
  let isPalindrome;
  if (val === "") {
    alert("Please input a value!");
    return;
  }
  for (let i = 0; i < val.length; i++) {
    if (val[i] !== val[val.length - i - 1]) {
      isPalindrome = `${val} is not a palindrome.`;
      break;
    } else {
      isPalindrome = `${val} is a palindrome.`;
    }
  }
  return isPalindrome;
}

button.addEventListener("click", () => {
  const input = document.getElementById("input").value;
  const inputVal = isPalindromeCheck(input);
  result.innerText = inputVal === undefined ? "" : inputVal;
  document.getElementById("input").value = "";
})
