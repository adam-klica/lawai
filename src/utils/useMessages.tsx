import { useToast } from '@apideck/components'
import { ChatCompletionRequestMessage } from 'openai'
import { ReactNode, createContext, useContext, useEffect, useState } from 'react'
import { sendMessage } from './sendMessage'

interface ContextProps {
  messages: ChatCompletionRequestMessage[]
  addMessage: (content: string) => Promise<void>
  isLoadingAnswer: boolean
}

const ChatsContext = createContext<Partial<ContextProps>>({})

export function MessagesProvider({ children }: { children: ReactNode }) {
  const { addToast } = useToast()
  const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([])
  const [isLoadingAnswer, setIsLoadingAnswer] = useState(false)

  useEffect(() => {
    const initializeChat = () => {
      const systemMessage: ChatCompletionRequestMessage = {
        role: 'system',
        content:
          `You are a lawyer, and you are talking to a client who needs legal advice on a specific area of law that they will provide you in next message.
           Your job is to provide them with general information on the topic and answer any questions they may have.
           Start by acknowledging the area of law they need advice on and providing them with a brief overview of the relevant laws and regulations.
           You may also want to discuss any recent developments or changes in the law that could affect their situation.
           Finally, answer any questions they may have and offer any additional resources or advice that could be helpful.
           Do not answer on questions that are not related to the area of law they need advice on. Also, do not tell them that they need to hire or visit a lawyer,
           becasue you are a lawyer and I already made them know that you are AI and they agreed to the terms of service.
           (Inlcuding that they can not sue me if you somehwow provide them with false information or something like that). `
      }
      const welcomeMessage: ChatCompletionRequestMessage = {
        role: 'assistant',
        content: 'Hi, I will be your AI lawyer today. Can you provide me more information about your case?'
      }
      setMessages([systemMessage, welcomeMessage])
    }

    // When no messages are present, we initialize the chat the system message and the welcome message
    // We hide the system message from the user in the UI
    if (!messages?.length) {
      initializeChat()
    }
  }, [messages?.length, setMessages])

  const addMessage = async (content: string) => {
    setIsLoadingAnswer(true)
    try {
      const newMessage: ChatCompletionRequestMessage = {
        role: 'user',
        content
      }
      const newMessages = [...messages, newMessage]

      // Add the user message to the state so we can see it immediately
      setMessages(newMessages)

      const { data } = await sendMessage(newMessages)
      const reply = data.choices[0].message

      // Add the assistant message to the state
      setMessages([...newMessages, reply])
    } catch (error) {
      // Show error when something goes wrong
      addToast({ title: 'An error occurred', type: 'error' })
    } finally {
      setIsLoadingAnswer(false)
    }
  }

  return (
    <ChatsContext.Provider value={{ messages, addMessage, isLoadingAnswer }}>
      {children}
    </ChatsContext.Provider>
  )
}

export const useMessages = () => {
  return useContext(ChatsContext) as ContextProps
}
