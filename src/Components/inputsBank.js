import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";

const keysBank = [
  {
    keyDisplayed: "AC",
    id: "clear",
    darkColor: "colors",
    keyStyleCol: "col p-0 mb-2 me-2",
    keyStyleBtn: "btn-secondary w-100 buttons-size",
    value: null
  },
  {
    keyDisplayed: <FontAwesomeIcon icon={faDeleteLeft} />,
    id: "clear-one",
    darkColor: "colors",
    keyStyleCol: "col p-0 mb-2 me-2",
    keyStyleBtn: "btn-secondary w-100 buttons-size",
    value: "back"
  },
  {
    keyDisplayed: "%",
    id: "percentage",
    darkColor: "colors",
    keyStyleCol: "col p-0 mb-2 me-2",
    keyStyleBtn: "btn-secondary w-100 buttons-size",
    value: "%"
  },
  {
    keyDisplayed: "÷",
    id: "divide",
    darkColor: "colors",
    keyStyleCol: "col p-0 mb-2 me-2",
    keyStyleBtn: "btn-secondary w-100 buttons-size",
    value: "÷"
  },
  {
    keyDisplayed: "7",
    id: "seven",
    darkColor: "",
    keyStyleCol: "col p-0 mb-2 me-2",
    keyStyleBtn: "btn-secondary w-100 buttons-size",
    value: 7
  },
  {
    keyDisplayed: "8",
    id: "eight",
    darkColor: "",
    keyStyleCol: "col p-0 mb-2 me-2",
    keyStyleBtn: "btn-secondary w-100 buttons-size",
    value: 8
  },
  {
    keyDisplayed: "9",
    id: "nine",
    darkColor: "",
    keyStyleCol: "col p-0 mb-2 me-2",
    keyStyleBtn: "btn-secondary w-100 buttons-size",
    value: 9
  },
  {
    keyDisplayed: "x",
    id: "multiply",
    darkColor: "colors",
    keyStyleCol: "col p-0 mb-2 me-2",
    keyStyleBtn: "btn-secondary w-100 buttons-size",
    value: "x"
  },
  {
    keyDisplayed: "4",
    id: "four",
    darkColor: "",
    keyStyleCol: "col p-0 mb-2 me-2",
    keyStyleBtn: "btn-secondary w-100 buttons-size",
    value: 4
  },
  {
    keyDisplayed: "5",
    id: "five",
    darkColor: "",
    keyStyleCol: "col p-0 mb-2 me-2",
    keyStyleBtn: "btn-secondary w-100 buttons-size",
    value: 5
  },
  {
    keyDisplayed: "6",
    id: "six",
    darkColor: "",
    keyStyleCol: "col p-0 mb-2 me-2",
    keyStyleBtn: "btn-secondary w-100 buttons-size",
    value: 6
  },
  {
    keyDisplayed: "-",
    id: "substract",
    darkColor: "colors",
    keyStyleCol: "col p-0 mb-2 me-2",
    keyStyleBtn: "btn-secondary w-100 buttons-size",
    value: "-"
  },
  {
    keyDisplayed: "1",
    id: "one",
    darkColor: "",
    keyStyleCol: "col p-0 mb-2 me-2",
    keyStyleBtn: "btn-secondary w-100 buttons-size",
    value: 1
  },
  {
    keyDisplayed: "2",
    id: "two",
    darkColor: "",
    keyStyleCol: "col p-0 mb-2 me-2",
    keyStyleBtn: "btn-secondary w-100 buttons-size",
    value: 2
  },
  {
    keyDisplayed: "3",
    id: "three",
    darkColor: "",
    keyStyleCol: "col p-0 mb-2 me-2",
    keyStyleBtn: "btn-secondary w-100 buttons-size",
    value: 3
  },
  {
    keyDisplayed: "+",
    id: "add",
    darkColor: "colors",
    keyStyleCol: "col p-0 mb-2 me-2",
    keyStyleBtn: "btn-secondary w-100 buttons-size",
    value: "+"
  },
  {
    keyDisplayed: "0",
    id: "zero",
    darkColor: "",
    keyStyleCol: "col p-0 mb-2 me-2",
    keyStyleBtn: "btn-secondary w-100 buttons-size",
    value: 0
  },
  {
    keyDisplayed: ".",
    id: "decimal",
    darkColor: "",
    keyStyleCol: "col p-0 mb-2 me-2",
    keyStyleBtn: "btn-secondary w-100 buttons-size",
    value: "."
  },
  {
    keyDisplayed: "=",
    id: "equals",
    darkColor: "",
    keyStyleCol: "col-6 p-0",
    keyStyleBtn: "equals-width",
    value: "="
  },
];

export default keysBank;
