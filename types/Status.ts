import { FAILURE_STATUS, IDLE_STATUS, LOADING_STATUS, SUCCESS_STATUS } from "../config/status";

export type TStatus = typeof IDLE_STATUS | typeof LOADING_STATUS | typeof SUCCESS_STATUS | typeof FAILURE_STATUS;
