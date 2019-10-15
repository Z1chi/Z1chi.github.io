$(document).ready(function () {
  let tirSize, // размер
    pricePapper = 0, //цена за бумагу
    priceForma = 0, // цена за форму
    pricePrint = 0, //цена за печать
    sum = 0, //итого
    color_format = "";
  let typePapper = {
    "Выберите бумагу": 0,
    "Мелованная бумага (белая)": 6.8,
    "Бумага повышенной белизны (SPLENDORGEL)": 40.5,
    "Prestige Лён (белый)": 45
  };
  let typeColor = {
    "Выберите цветность": { file: 0, print: 0 },
    "Односторонняя черно-белая": { file: 14, print: 110 },
    "Двусторонняя черно-белая": { file: 28, print: 220 },
    "Односторонняя цветная": { file: 37, print: 110 },
    "Цветная с лицевой, ч/б с оборотной": { file: 51, print: 220 },
    "Двусторонняя цветная": { file: 74, print: 220 }
  };
  function TypePaper() {
    let html = "";
    for (type in typePapper) {
      html += "<option value='" + typePapper[type] + "'>" + type + "</option>";
    }
    $("#papper").append(html);
  }

  function TypeColor() {
    let html = "";
    for (type in typeColor) {
      html += "<option value='" + type + "'>" + type + "</option > ";
    }
    $("#color").append(html);
  }
  TypePaper();
  TypeColor();
});
