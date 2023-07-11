let input = document.getElementById("input");

document.addEventListener("DOMContentLoaded", () => {
  let buttons = document.getElementsByTagName("button");
  for(const button of buttons) {
    button.addEventListener("click", () => {
      if(button.innerText !== "="){
        input.value += button.innerText;
      }else{
        let expression = input.value;
        if(expression){
          try{
            input.value = eval(expression);
          }catch(error){
            alert("inavlid value passed");
          }
        }else{
          alert("empty ! ! !");
        }
      }
    });
  }
});