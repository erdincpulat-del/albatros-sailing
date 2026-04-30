import type { StcwQuestion } from "./quiz-types";

import { PART1 } from "./questions/part1";
import { PART2 } from "./questions/part2";
import { PART3 } from "./questions/part3";
import { PART4 } from "./questions/part4";
import { PART5 } from "./questions/part5";

export const STCW_QUESTIONS: StcwQuestion[] = [
  ...PART1,
  ...PART2,
  ...PART3,
  ...PART4,
  ...PART5,
];
console.log("PART1:", PART1.length);
console.log("PART2:", PART2.length);
console.log("PART3:", PART3.length);
console.log("PART4:", PART4.length);
console.log("PART5:", PART5.length);
console.log("TOTAL:", STCW_QUESTIONS.length);