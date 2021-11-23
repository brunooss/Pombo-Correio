export interface Message {
    id: number | null;
    senderUser: number;
    text: string;
    timestamp: Date;
}