export interface Message {
  id: number
  senderId: number
  senderUsername: string
  senderPhotoUrl: string
  recipientId: number
  recipientUsername: string
  content: string
  recipientPhotoUrl: string
  dateRead: Date 
  messageSent: string
}