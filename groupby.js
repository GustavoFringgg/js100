const data = [
  { Factory_SubID: 1, Factory_Name: "A公司", LineID: 101, LineName: "Line A1" },
  { Factory_SubID: 3, Factory_Name: "c公司", LineID: 102, LineName: "Line A2" },
  { Factory_SubID: 2, Factory_Name: "B公司", LineID: null, LineName: null },
];

const grouped = {};

data.forEach((item) => {
  if (!grouped[item.Factory_SubID]) {
    grouped[item.Factory_SubID] = {
      Factory_SubID: item.Factory_SubID,
      Factory_Name: item.Factory_Name,
      ProduceLines: [],
    };
  }
  if (item.LineID !== null) {
    grouped[item.Factory_SubID].ProduceLines.push({
      LineID: item.LineID,
      LineName: item.LineName,
    });
  }
});
// const result = Object.values(grouped);
console.log("result", JSON.stringify(grouped, null, 2));
