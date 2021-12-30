import c3 from "c3";
let chart, chartTwo, chartThree;
window.loadChart = (json) => {
  const obj = JSON.parse(json);
  const columns = obj.columns;
  const categories = obj.categories;
  chart = c3.generate({
    bindto: "#chart",
    axis: { x: { type: "category", categories: categories } },
    data: {
      onclick: function (d, element) {
        const i = d.index;
        const id = d.id;
        const month = categories[i];
        console.log(month);
        const data = { month, id };
        const json = JSON.stringify(data);
        FileMaker.PerformScript("GetData", json);
      },
      columns: columns,
      type: "bar",
    },
  });
};

window.loadNewData = (json) => {
  const obj = JSON.parse(json);
  const columns = obj.columns;
  chart.load({ columns: columns });
  chart.unload({ ids: ["Apples"] });
};
