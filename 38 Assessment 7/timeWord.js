function timeWord(time) {
    let timeWord = "";

    const timeArr = time.split(":");
    const hour = timeArr[0];
    let min = timeArr[1];

    if (hour === "00" && min ==="00") {
        return "Midnight";
    }
    else if (hour === "12" && min === "00") {
        return "Noon";
    }

    if (hour === "00" || hour === "12") timeWord += "Twelve ";
    if (hour === "01" || hour === "13") timeWord += "One ";
    if (hour === "02" || hour === "14") timeWord += "Two ";
    if (hour === "03" || hour === "15") timeWord += "Three ";
    if (hour === "04" || hour === "16") timeWord += "Four ";
    if (hour === "05" || hour === "17") timeWord += "Five ";
    if (hour === "06" || hour === "18") timeWord += "Six ";
    if (hour === "07" || hour === "19") timeWord += "Seven ";
    if (hour === "08" || hour === "20") timeWord += "Eight ";
    if (hour === "09" || hour === "21") timeWord += "Nine ";
    if (hour === "10" || hour === "22") timeWord += "Ten ";
    if (hour === "11" || hour === "23") timeWord += "Eleven ";

    if (min === "00") {
    timeWord += "o'clock";
  } else if (min === "01") {
    timeWord += "oh One";
  } else if (min === "02") {
    timeWord += "oh Two";
  } else if (min === "03") {
    timeWord += "oh Three";
  } else if (min === "04") {
    timeWord += "oh Four";
  } else if (min === "05") {
    timeWord += "oh Five";
  } else if (min === "06") {
    timeWord += "oh Six";
  } else if (min === "07") {
    timeWord += "oh Seven";
  } else if (min === "08") {
    timeWord += "oh Eight";
  } else if (min === "09") {
    timeWord += "oh Nine";
  } else if (min === "10") {
    timeWord += "Ten";
  } else if (min === "11") {
    timeWord += "Eleven";
  } else if (min === "12") {
    timeWord += "Twelve";
  } else if (min === "13") {
    timeWord += "Thirteen";
  } else if (min === "14") {
    timeWord += "Fourteen";
  } else if (min === "15") {
    timeWord += "Fifteen";
  } else if (min === "16") {
    timeWord += "Sixteen";
  } else if (min === "17") {
    timeWord += "Seventeen";
  } else if (min === "18") {
    timeWord += "Eighteen";
  } else if (min === "19") {
    timeWord += "Nineteen";
  }

  else {

    if (min[0] === "2" && min[1] !== "0") {
      timeWord += "Twenty ";
    }
    else if (min[0] === "2") timeWord += "Twenty";

    if (min[0] === "3" && min[1] !== "0") {
      timeWord += "Thirty ";
    }
    else if (min[0] === "3") timeWord += "Thirty";

    if (min[0] === "4" && min[1] !== "0") {
      timeWord += "Forty ";
    }
    else if (min[0] === "4") timeWord += "forty";

    if (min[0] === "5" && min[1] !== "0") {
      timeWord += "Fifty ";
    }
    else if (min[0] === "5") timeWord += "Fifty";

    if (min[1] === "1") timeWord += "One";
    if (min[1] === "2") timeWord += "Two";
    if (min[1] === "3") timeWord += "Three";
    if (min[1] === "4") timeWord += "Four";
    if (min[1] === "5") timeWord += "Five";
    if (min[1] === "6") timeWord += "Six";
    if (min[1] === "7") timeWord += "Seven";
    if (min[1] === "8") timeWord += "Eight";
    if (min[1] === "9") timeWord += "Nine";
  }

  12 <= +hour ? (timeWord += " pm") : (timeWord += " am");
  return timeWord;
}

module.exports = timeWord;