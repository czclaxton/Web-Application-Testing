import { strike, ball, foul, hit } from "./Dashboard";
import { setStrikes } from "../App";

describe("Dashboard.js", () => {
  describe("strike()", () => {
    it("should return the current strike count within the correct parameters", () => {
      expect(setStrikes(2)).toBe(2);
    });
  });
});
