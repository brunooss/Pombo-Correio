import { Message } from "./message";

export interface ServerResponse {
    timestamp: Date;
    statusCode: number;
    status: string;
    description: string;
    message: string;
    developerMessage: string;
    data: { messages?: Message[], message?: Message }
}