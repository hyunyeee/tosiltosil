import { categoryHandlers } from "./categoryHandlers";
import { userHandlers } from "./userHandlers";

export const handlers = [...userHandlers, ...categoryHandlers];
