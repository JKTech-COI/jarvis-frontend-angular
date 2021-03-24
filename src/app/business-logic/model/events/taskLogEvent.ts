/**
 * events
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 2.9
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import { LogLevelEnum } from './logLevelEnum';


/**
 * A log event associated with a task.
 */
export interface TaskLogEvent {
    /**
     * Epoch milliseconds UTC, will be set by the server if not set.
     */
    timestamp?: number;
    /**
     * \'log\'
     */
    type: object;
    /**
     * Task ID (required)
     */
    task: string;
    level?: LogLevelEnum;
    /**
     * Name of machine running the task.
     */
    worker?: string;
    /**
     * Log message.
     */
    msg?: string;
}