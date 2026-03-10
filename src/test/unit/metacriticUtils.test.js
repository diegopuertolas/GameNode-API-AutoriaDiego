const { getMetacriticTier } = require("../../utils/metacriticUtils");

describe("Utils: metacriticUtils", () => {

  test("You should return 'Obra Maestra' if the score is 95 or above", () => {
    expect(getMetacriticTier(95)).toBe("Obra Maestra");
    expect(getMetacriticTier(100)).toBe("Obra Maestra");
  });

  test("You should return 'Sobresaliente' if the score is between 90 and 94", () => {
    expect(getMetacriticTier(90)).toBe("Sobresaliente");
    expect(getMetacriticTier(94)).toBe("Sobresaliente");
  });

  test("You should return 'Notable Alto' if the score is between 80 and 89", () => {
    expect(getMetacriticTier(80)).toBe("Notable Alto");
    expect(getMetacriticTier(89)).toBe("Notable Alto");
  });

  test("You should return 'Notable' if the score is between 70 and 79", () => {
    expect(getMetacriticTier(70)).toBe("Notable");
    expect(getMetacriticTier(79)).toBe("Notable");
  });

  test("You should return 'Bien' if the score is between 60 and 69", () => {
    expect(getMetacriticTier(60)).toBe("Bien");
    expect(getMetacriticTier(69)).toBe("Bien");
  });

  test("You should return 'Suficiente' if the score is between 50 and 59", () => { 
    expect(getMetacriticTier(50)).toBe("Suficiente");
    expect(getMetacriticTier(59)).toBe("Suficiente");
  });

  test("You should return 'Not Recommended' if the score is below 50", () => {
    expect(getMetacriticTier(0)).toBe("Not Recommended");
    expect(getMetacriticTier(49)).toBe("Not Recommended");
  });

  test("You should return 'N/A' if the score is null or undefined", () => {
    expect(getMetacriticTier(null)).toBe("N/A");
    expect(getMetacriticTier(undefined)).toBe("N/A");
  });

  test("You should return 'Invalid Score' if the score is not a number", () => {
    expect(getMetacriticTier("not a number")).toBe("Invalid Score");
    expect(getMetacriticTier({})).toBe("Invalid Score");
  });

  test("You should return 'Out of Range' if the score is below 0 or above 100", () => {
    expect(getMetacriticTier(-1)).toBe("Out of Range");
    expect(getMetacriticTier(101)).toBe("Out of Range");
  });
});