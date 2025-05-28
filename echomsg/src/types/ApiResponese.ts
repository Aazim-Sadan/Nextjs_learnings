import { Message } from "@/model/User";

export interface ApiResponse{
    success: boolean,
    message: string,
    user: string,
    isAcceptingMessage: boolean, 
    messages?: Array<Message>
}