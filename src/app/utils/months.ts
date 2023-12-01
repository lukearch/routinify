import _months from "../../assets/json/months.json";

export default function months() {
  return _months as {
    [key: number | string]: string;
  };
}
