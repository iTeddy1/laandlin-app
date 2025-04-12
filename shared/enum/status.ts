import { IDLE_STATUS, LOADING_STATUS, SUCCESS_STATUS, FAILURE_STATUS } from "@/shared/constants/status";

export type TStatus = typeof IDLE_STATUS | typeof LOADING_STATUS | typeof SUCCESS_STATUS | typeof FAILURE_STATUS;
