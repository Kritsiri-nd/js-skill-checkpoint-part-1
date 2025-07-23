// Question #3
let userPassword = "";
// console.log(userPassword);
// เริ่มเขียนโค้ดตรงนี้
function checkPasswordStrength(userPassword){
    if (userPassword>10){
      return "Strong";
    } else if (userPassword>=6){
      return "Medium";
    } else {
      return "Weak";
    }
  }
console.log(checkPasswordStrength(userPassword));
