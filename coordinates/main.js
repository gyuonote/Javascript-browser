/* let screenLog = document.querySelector(".screen-log");

document.addEventListener("mousemove", (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  screenLog = `${mouseX},${mouseY}`;
});
 */

const vertical = document.querySelector(".vertical");
const horizontal = document.querySelector(".horizontal");
const target = document.querySelector(".target");
const tag = document.querySelector(".tag");

addEventListener("load", () => {
  const targetRect = target.getBoundingClientRect();
  const targetHalfWidth = targetRect.width / 2;
  const targetHalfHight = targetRect.height / 2;

  document.addEventListener("mousemove", (event) => {
    const x = event.clientX;
    const y = event.clientY;
    console.log(`${x},${y}`);

    vertical.style.transform = `translateX(${x}px)`;
    horizontal.style.transform = `translateY(${y}px)`;
    target.style.transform = `translate(${x - targetHalfWidth}px, ${
      y - targetHalfHight
    }px)`;
    tag.style.transform = `translate(${x + 20}px, ${y + 20}px)`;
    tag.innerHTML = `${x}px,${y}px`;
  });
});
