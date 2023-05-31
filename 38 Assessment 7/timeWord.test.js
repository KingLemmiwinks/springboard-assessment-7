const timeWord = require("./timeWord");

describe("#timeword", () => {
  test("it is a function", () => {
    expect(typeof timeWord).toBe("function");
  });

  test("midnight", () => {
    expect(timeWord("00:00")).toEqual("Midnight");
  });

  test("twelve twelve am", () => {
    expect(timeWord("00:12")).toEqual("Twelve Twelve am");
  });

  test("one o'clock am", () => {
    expect(timeWord("01:00")).toEqual("One o'clock am");
  });

  test("six oh one am", () => {
    expect(timeWord("06:01")).toEqual("Six oh One am");
  });

  test("six ten am", () => {
    expect(timeWord("06:10")).toEqual("Six Ten am");
  });

  test("six eighteen am", () => {
    expect(timeWord("06:18")).toEqual("Six Eighteen am");
  });

  test("six thirty am", () => {
    expect(timeWord("06:30")).toEqual("Six Thirty am");
  });

  test("ten thirty four am", () => {
    expect(timeWord("10:34")).toEqual("Ten Thirty Four am");
  });

  test("noon", () => {
    expect(timeWord("12:00")).toEqual("Noon");
  });

  test("twelve oh nine pm", () => {
    expect(timeWord("12:09")).toEqual("Twelve oh Nine pm");
  });

  test("eleven twenty three pm", () => {
    expect(timeWord("23:23")).toEqual("Eleven Twenty Three pm");
  });
});