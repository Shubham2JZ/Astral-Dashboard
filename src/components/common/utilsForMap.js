const getRandomInt100to250 = () => {
  return parseInt(Math.floor(Math.random() * (250 - 100 + 1) + 100));
};
export const getRandomInt150to200 = () => {
  return parseInt(Math.floor(Math.random() * (200 - 150 + 1) + 150));
};
const getRandomIntn20to20 = () => {
  return parseInt(Math.floor(Math.random() * (20 - -20 + 1) + -20));
};

export const getAchievedTargetData = (achievement, target) =>
  (achievement / target) * 100;

export const getHeatMapData = () => {
  return [
    {
      id: "AP",
      state: "Andhra Pradesh",
      data: {
        value: getRandomInt100to250(),
        target: getRandomInt150to200(),
        achievement: getRandomInt100to250(),
        mtdSale: getRandomInt100to250(),
        monthlyGrowth: getRandomIntn20to20(),
        yearlyGrowth: getRandomIntn20to20(),
      },
    },
    {
      id: "AR",
      state: "Arunachal Pradesh",
      data: {
        value: getRandomInt100to250(),
        target: getRandomInt150to200(),
        achievement: getRandomInt100to250(),
        mtdSale: getRandomInt100to250(),
        monthlyGrowth: getRandomIntn20to20(),
        yearlyGrowth: getRandomIntn20to20(),
      },
    },
    {
      id: "AS",
      state: "Assam",
      data: {
        value: getRandomInt100to250(),
        target: getRandomInt150to200(),
        achievement: getRandomInt100to250(),
        mtdSale: getRandomInt100to250(),
        monthlyGrowth: getRandomIntn20to20(),
        yearlyGrowth: getRandomIntn20to20(),
      },
    },
    {
      id: "BR",
      state: "Bihar",
      data: {
        value: getRandomInt100to250(),
        target: getRandomInt150to200(),
        achievement: getRandomInt100to250(),
        mtdSale: getRandomInt100to250(),
        monthlyGrowth: getRandomIntn20to20(),
        yearlyGrowth: getRandomIntn20to20(),
      },
    },
    {
      id: "CT",
      state: "Chhattisgarh",
      data: {
        value: getRandomInt100to250(),
        target: getRandomInt150to200(),
        achievement: getRandomInt100to250(),
        mtdSale: getRandomInt100to250(),
        monthlyGrowth: getRandomIntn20to20(),
        yearlyGrowth: getRandomIntn20to20(),
      },
    },
    {
      id: "GA",
      state: "Goa",
      data: {
        value: 21,
        target: getRandomInt150to200(),
        achievement: getRandomInt100to250(),
        mtdSale: getRandomInt100to250(),
        monthlyGrowth: getRandomIntn20to20(),
        yearlyGrowth: getRandomIntn20to20(),
      },
    },
    {
      id: "GJ",
      state: "Gujarat",
      data: {
        value: 22,
        target: getRandomInt150to200(),
        achievement: getRandomInt100to250(),
        mtdSale: getRandomInt100to250(),
        monthlyGrowth: getRandomIntn20to20(),
        yearlyGrowth: getRandomIntn20to20(),
      },
    },
    {
      id: "HR",
      state: "Haryana",
      data: {
        value: getRandomInt100to250(),
        target: getRandomInt150to200(),
        achievement: getRandomInt100to250(),
        mtdSale: getRandomInt100to250(),
        monthlyGrowth: getRandomIntn20to20(),
        yearlyGrowth: getRandomIntn20to20(),
      },
    },
    {
      id: "HP",
      state: "Himachal Pradesh",
      data: {
        value: 24,
        target: getRandomInt150to200(),
        achievement: getRandomInt100to250(),
        mtdSale: getRandomInt100to250(),
        monthlyGrowth: getRandomIntn20to20(),
        yearlyGrowth: getRandomIntn20to20(),
      },
    },
    {
      id: "JH",
      state: "Jharkhand",
      data: {
        value: 26,
        target: getRandomInt150to200(),
        achievement: getRandomInt100to250(),
        mtdSale: getRandomInt100to250(),
        monthlyGrowth: getRandomIntn20to20(),
        yearlyGrowth: getRandomIntn20to20(),
      },
    },
    {
      id: "KA",
      state: "Karnataka",
      data: {
        value: 27,
        target: getRandomInt150to200(),
        achievement: getRandomInt100to250(),
        mtdSale: getRandomInt100to250(),
        monthlyGrowth: getRandomIntn20to20(),
        yearlyGrowth: getRandomIntn20to20(),
      },
    },
    {
      id: "KL",
      state: "Kerala",
      data: {
        value: getRandomInt100to250(),
        target: getRandomInt150to200(),
        achievement: getRandomInt100to250(),
        mtdSale: getRandomInt100to250(),
        monthlyGrowth: getRandomIntn20to20(),
        yearlyGrowth: getRandomIntn20to20(),
      },
    },
    {
      id: "MP",
      state: "Madhya Pradesh",
      data: {
        value: getRandomInt100to250(),
        target: getRandomInt150to200(),
        achievement: getRandomInt100to250(),
        mtdSale: getRandomInt100to250(),
        monthlyGrowth: getRandomIntn20to20(),
        yearlyGrowth: getRandomIntn20to20(),
      },
    },
    {
      id: "MH",
      state: "Maharashtra",
      data: {
        value: getRandomInt100to250(),
        target: getRandomInt150to200(),
        achievement: getRandomInt100to250(),
        mtdSale: getRandomInt100to250(),
        monthlyGrowth: getRandomIntn20to20(),
        yearlyGrowth: getRandomIntn20to20(),
      },
    },
    {
      id: "MN",
      state: "Manipur",
      data: {
        value: getRandomInt100to250(),
        target: getRandomInt150to200(),
        achievement: getRandomInt100to250(),
        mtdSale: getRandomInt100to250(),
        monthlyGrowth: getRandomIntn20to20(),
        yearlyGrowth: getRandomIntn20to20(),
      },
    },
    {
      id: "ML",
      state: "Meghalaya",
      data: {
        value: 59,
        target: getRandomInt150to200(),
        achievement: getRandomInt100to250(),
        mtdSale: getRandomInt100to250(),
        monthlyGrowth: getRandomIntn20to20(),
        yearlyGrowth: getRandomIntn20to20(),
      },
    },
    {
      id: "MZ",
      state: "Mizoram",
      data: {
        value: getRandomInt100to250(),
        target: getRandomInt150to200(),
        achievement: getRandomInt100to250(),
        mtdSale: getRandomInt100to250(),
        monthlyGrowth: getRandomIntn20to20(),
        yearlyGrowth: getRandomIntn20to20(),
      },
    },
    {
      id: "NL",
      state: "Nagaland",
      data: {
        value: 59,
        target: getRandomInt150to200(),
        achievement: getRandomInt100to250(),
        mtdSale: getRandomInt100to250(),
        monthlyGrowth: getRandomIntn20to20(),
        yearlyGrowth: getRandomIntn20to20(),
      },
    },
    {
      id: "OD",
      state: "Odisha",
      data: {
        value: 54,
        target: getRandomInt150to200(),
        achievement: getRandomInt100to250(),
        mtdSale: getRandomInt100to250(),
        monthlyGrowth: getRandomIntn20to20(),
        yearlyGrowth: getRandomIntn20to20(),
      },
    },
    {
      id: "PB",
      state: "Punjab",
      data: {
        value: getRandomInt100to250(),
        target: getRandomInt150to200(),
        achievement: getRandomInt100to250(),
        mtdSale: getRandomInt100to250(),
        monthlyGrowth: getRandomIntn20to20(),
        yearlyGrowth: getRandomIntn20to20(),
      },
    },
    {
      id: "RJ",
      state: "Rajasthan",
      data: {
        value: getRandomInt100to250(),
        target: getRandomInt150to200(),
        achievement: getRandomInt100to250(),
        mtdSale: getRandomInt100to250(),
        monthlyGrowth: getRandomIntn20to20(),
        yearlyGrowth: getRandomIntn20to20(),
      },
    },
    {
      id: "SK",
      state: "Sikkim",
      data: {
        value: getRandomInt100to250(),
        target: getRandomInt150to200(),
        achievement: getRandomInt100to250(),
        mtdSale: getRandomInt100to250(),
        monthlyGrowth: getRandomIntn20to20(),
        yearlyGrowth: getRandomIntn20to20(),
      },
    },
    {
      id: "TN",
      state: "Tamil Nadu",
      data: {
        value: getRandomInt100to250(),
        target: getRandomInt150to200(),
        achievement: getRandomInt100to250(),
        mtdSale: getRandomInt100to250(),
        monthlyGrowth: getRandomIntn20to20(),
        yearlyGrowth: getRandomIntn20to20(),
      },
    },
    {
      id: "TS",
      state: "Telangana",
      data: {
        value: getRandomInt100to250(),
        target: getRandomInt150to200(),
        achievement: getRandomInt100to250(),
        mtdSale: getRandomInt100to250(),
        monthlyGrowth: getRandomIntn20to20(),
        yearlyGrowth: getRandomIntn20to20(),
      },
    },
    {
      id: "TR",
      state: "Tripura",
      data: {
        value: 30,
        target: getRandomInt150to200(),
        achievement: getRandomInt100to250(),
        mtdSale: getRandomInt100to250(),
        monthlyGrowth: getRandomIntn20to20(),
        yearlyGrowth: getRandomIntn20to20(),
      },
    },
    {
      id: "UK",
      state: "Uttarakhand",
      data: {
        value: getRandomInt100to250(),
        target: getRandomInt150to200(),
        achievement: getRandomInt100to250(),
        mtdSale: getRandomInt100to250(),
        monthlyGrowth: getRandomIntn20to20(),
        yearlyGrowth: getRandomIntn20to20(),
      },
    },
    {
      id: "UP",
      state: "Uttar Pradesh",
      data: {
        value: 30,
        target: getRandomInt150to200(),
        achievement: getRandomInt100to250(),
        mtdSale: getRandomInt100to250(),
        monthlyGrowth: getRandomIntn20to20(),
        yearlyGrowth: getRandomIntn20to20(),
      },
    },
    {
      id: "WB",
      state: "West Bengal",
      data: {
        value: 35,
        target: getRandomInt150to200(),
        achievement: getRandomInt100to250(),
        mtdSale: getRandomInt100to250(),
        monthlyGrowth: getRandomIntn20to20(),
        yearlyGrowth: getRandomIntn20to20(),
      },
    },
    {
      id: "AN",
      state: "Andaman and Nicobar Islands",
      data: {
        value: getRandomInt100to250(),
        target: getRandomInt150to200(),
        achievement: getRandomInt100to250(),
        mtdSale: getRandomInt100to250(),
        monthlyGrowth: getRandomIntn20to20(),
        yearlyGrowth: getRandomIntn20to20(),
      },
    },
    {
      id: "CH",
      state: "Chandigarh",
      data: {
        value: getRandomInt100to250(),
        target: getRandomInt150to200(),
        achievement: getRandomInt100to250(),
        mtdSale: getRandomInt100to250(),
        monthlyGrowth: getRandomIntn20to20(),
        yearlyGrowth: getRandomIntn20to20(),
      },
    },
    {
      id: "DL",
      state: "Delhi",
      data: {
        value: 59,
        target: getRandomInt150to200(),
        achievement: getRandomInt100to250(),
        mtdSale: getRandomInt100to250(),
        monthlyGrowth: getRandomIntn20to20(),
        yearlyGrowth: getRandomIntn20to20(),
      },
    },
    {
      id: "JK",
      state: "Jammu and Kashmir",
      data: {
        value: 25,
        target: getRandomInt150to200(),
        achievement: getRandomInt100to250(),
        mtdSale: getRandomInt100to250(),
        monthlyGrowth: getRandomIntn20to20(),
        yearlyGrowth: getRandomIntn20to20(),
      },
    },
    {
      id: "LA",
      state: "Ladakh",
      data: {
        value: getRandomInt100to250(),
        target: getRandomInt150to200(),
        achievement: getRandomInt100to250(),
        mtdSale: getRandomInt100to250(),
        monthlyGrowth: getRandomIntn20to20(),
        yearlyGrowth: getRandomIntn20to20(),
      },
    },
    {
      id: "LD",
      state: "Lakshadweep",
      data: {
        value: getRandomInt100to250(),
        target: getRandomInt150to200(),
        achievement: getRandomInt100to250(),
        mtdSale: getRandomInt100to250(),
        monthlyGrowth: getRandomIntn20to20(),
        yearlyGrowth: getRandomIntn20to20(),
      },
    },
  ];
};

export const colors = ["#EF0000", "#FFB800", "#004B97"];

const projectionConfigForStates = {
  andamannicobar: { scale: 400, center: [81, 22] },
  andhrapradesh: { scale: 1000, center: [81, 16] },
  arunachalpradesh: { scale: 1500, center: [94.5, 27.5] },
  assam: { scale: 1500, center: [93, 25.5] },
  bihar: { scale: 1800, center: [85.5, 25.5] },
  chandigarh: { scale: 400, center: [81, 22] },
  chhattisgarh: { scale: 1300, center: [82, 20] },
  goa: { scale: 4000, center: [74, 15] },
  gujarat: { scale: 1500, center: [72, 22] },
  haryana: { scale: 1800, center: [76, 28.5] },
  himachalpradesh: { scale: 1700, center: [77, 31] },
  jammuandkashmir: { scale: 1200, center: [77, 34] },
  jharkhand: { scale: 1500, center: [85, 23] },
  karnataka: { scale: 1200, center: [76, 14] },
  kerala: { scale: 1700, center: [76, 10] },
  ladakh: { scale: 400, center: [81, 22] },
  lakshadweep: { scale: 400, center: [81, 22] },
  madhyapradesh: { scale: 1200, center: [78, 23] },
  maharashtra: { scale: 1200, center: [76.5, 19] },
  manipur: { scale: 400, center: [81, 22] },
  meghalaya: { scale: 2000, center: [91, 25] },
  mizoram: { scale: 400, center: [81, 22] },
  nagaland: { scale: 400, center: [81, 22] },
  delhi: { scale: 8000, center: [77.1, 28.4] },
  odisha: { scale: 400, center: [81, 22] },
  punjab: { scale: 1900, center: [75.6, 30.5] },
  rajasthan: { scale: 1000, center: [74, 26] },
  sikkim: { scale: 3000, center: [88.2, 27] },
  tamilnadu: { scale: 1500, center: [78, 10.5] },
  telangana: { scale: 1500, center: [79, 18] },
  tripura: { scale: 400, center: [81, 22] },
  uttarakhand: { scale: 1900, center: [79, 29.5] },
  uttarpradesh: { scale: 1100, center: [81, 26] },
  westbengal: { scale: 1400, center: [87, 23] },
};

export const stateProjection = (x) => {
  let y = x.replace(/\s/g, "").toLowerCase();
  return projectionConfigForStates[y];
};
