const list = document.getElementById("ingredient-list");
const wrap = document.getElementById("chart-wrap");
const title = document.getElementById("chart-title");
let selected = "ニンニク";
Object.keys(INGREDIENTS).forEach(name => {
  const button = document.createElement("button");
  button.className = "ingredient-button";
  button.textContent = name;
  button.addEventListener("click", () => {
    selected = name;
    document.querySelectorAll(".ingredient-button").forEach(b => b.classList.remove("active"));
    button.classList.add("active");
    render(name);
  });
  list.appendChild(button);
});
function render(name) {
  const item = INGREDIENTS[name];
  title.textContent = name;
  wrap.classList.remove("empty");
  let html = "<table><thead><tr><th>味・要素</th>";
  item.methods.forEach(method => html += `<th>${method}</th>`);
  html += "</tr></thead><tbody>";
  TASTES.forEach(taste => {
    html += `<tr><td class="row-label">${taste}</td>`;
    item.data[taste].forEach(value => {
      html += `<td class="bar-cell"><div class="bar"><span style="width:${value * 20}%"></span></div><div class="value">${value}</div></td>`;
    });
    html += "</tr>";
  });
  html += "</tbody></table>";
  wrap.innerHTML = html;
}
document.querySelector(".ingredient-button").classList.add("active");
render(selected);
