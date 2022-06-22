import rover from "./index";

describe("north", () => {
  const initialDirection = "N";
  const initialLocation = [0, 0];
  const move = rover(initialLocation, initialDirection);

  it("should return current location when no input", function () {
    const result = move("");
    expect(result).toEqual([0, 0]);
  });

  it('should move forward when input is "f"', function () {
    const result = move("f");
    expect(result).toEqual([0, 1]);
  });

  it('should move backward when input is "b"', function () {
    const result = move("b");
    expect(result).toEqual([0, -1]);
  });

  it('should not move when input is "fb"', function () {
    const result = move("fb");
    expect(result).toEqual([0, 0]);
  });

  it('should move 2 steps backward when input is "bb"', function () {
    const result = move("bb");
    expect(result).toEqual([0, -2]);
  });

  it('should move left side when input is "l"', function () {
    const result = move("l");
    expect(result).toEqual([-1, 0]);
  });

  it('should move right side when input is "r"', function () {
    const result = move("r");
    expect(result).toEqual([1, 0]);
  });

  it('should move right side when input is "r"', function () {
    const result = move("r", "N");
    expect(result).toEqual([1, 0]);
  });
});
