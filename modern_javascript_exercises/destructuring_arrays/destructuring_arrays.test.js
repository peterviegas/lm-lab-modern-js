import { sequence } from "./destructuring_arrays";

test("it returns the correct order from an array", () => {
    const order = ["First", "Second", "Third"];
    expect(sequence(order)).toBe("First, Second, Third");
});
test("it returns the correct order from an array", () => {
    const order = ["First", "Second", "Third", "Four"];
    expect(sequence(order)).toBe("First, Second, Third, Four");
});