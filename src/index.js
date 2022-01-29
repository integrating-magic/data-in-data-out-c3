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
      colors: {
        Apples: "purple",
        Peaches: "green",
        Bananas: "yellow",
        Plums: "purple",
      },
    },
  });
  chart2 = c3.generate({
    bindto: "#chart2",
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

      type: "line",
      colors: {
        Apples: "red",
        Peaches: "blue",
        Bananas: "yellow",
        Plums: "purple",
      },
    },
  });
};

window.loadNewData = (json) => {
  const obj = JSON.parse(json);
  const columns = obj.columns;
  chart2.load({ columns: columns });
};
