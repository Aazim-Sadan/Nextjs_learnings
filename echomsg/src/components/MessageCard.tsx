'use client'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "./ui/button"
import { X } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import axios from "axios"
import { ApiResponse } from "@/types/ApiResponese"
import { Message } from "@/model/User"

type MessageCardProps = {
    message: Message;
    onMessageDelete: (messageId: string) => void
}


const MessageCard = ({ message, onMessageDelete }: MessageCardProps) => {
    const { toast } = useToast()
    

    const handleDeleteConfirm = async () => {
        const response = await axios.delete<ApiResponse>(`/api/delete-message/${message._id}`)
        console.log("response", response);
        
        toast({
            title: response.data.message
        })
        onMessageDelete(message._id as string)
    }
    return (
        <Card>
            <CardHeader>
                <CardTitle>{message.content}</CardTitle>
                <AlertDialog>
                    <AlertDialogTrigger asChild>
                        <Button variant="destructive"><X className="w-5 h-5" /></Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                            <AlertDialogDescription>
                                This action cannot be undone. This will permanently delete your
                                account and remove your data from our servers.
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction onClick={handleDeleteConfirm}>Continue</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
                <CardDescription>{message.createdAt.toLocaleString(undefined, {
                    year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'
                })}</CardDescription>
            </CardHeader>
            <CardContent>
            </CardContent>
        </Card>
    )
}

export default MessageCard