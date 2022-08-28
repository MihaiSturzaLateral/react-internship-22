export const Count = "COUNT";
export function count(number) {
  return {
    type: "COUNT",
    payload: number,
  };
}
