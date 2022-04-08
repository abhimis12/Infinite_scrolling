let countnumber = 1;
function datashow() {
  for (let i = 0; i < 20; i++) {
    let element = document.createElement("h2");
    element.innerText = `Masai Student  ${countnumber++}`;
    document.querySelector(".element").append(element);
  }
}
datashow();

let box = document.querySelector(".element");
box.onscroll = () => {
  const elementmove = box.scrollHeight - box.scrollTop;
  const height = box.offsetHeight;
  const move = height - elementmove;
  console.log(move);
  if (move >= 1) {
    datashow();
  }
};
