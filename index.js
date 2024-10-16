// Your code here
const dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#000000";
dodger.style.backgroundColor = "#FF69B4";
dodger.style.bottom = "0px"

function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

function moveDodgerRight() {
    const RightNumbers = dodger.style.right.replace("px", "");
    const Right = parseInt(RightNumbers, 10);
  
    if (Right > 0) {
      dodger.style.Right = `${Right + 1}px`;
    }
  }


  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
  });
  