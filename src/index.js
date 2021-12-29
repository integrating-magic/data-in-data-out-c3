import c3 from "c3";
let chart;
window.loadChart = (json) => {
  const obj = JSON.parse(json);
  const columns = obj.columns;
  const categories = obj.categories;
  cats = categories;
  chart = c3.generate({
    bindto: "#chart",
    axis: { x: { type: "category", categories: categories } },
    data: {
      columns: columns,
      type: "line",
    },
  });
};
