import { useState } from 'react'
import CategoryPick from 'components/CategoryPick'
import { PageLoader } from 'components/PageLoader'
import MessagesList from 'components/MessageList'
import MessageForm from 'components/MessageForm'
import { MessagesProvider } from 'utils/useMessages'

const ChatBot = () => {
  const [categoryClicked, setCategoryClicked] = useState('')
  const [loading, setLoading] = useState(false)

  function handleClickedCategory(category) {
    setCategoryClicked(category)
    setTimeout(() => {
      setLoading(true)
    }, 3000)
  }

  return (
    <MessagesProvider>
      {categoryClicked == '' ? (
        <CategoryPick handleClickedCategory={handleClickedCategory} />
      ) : !loading ? (
        <PageLoader />
      ) : (
        <div>
          <MessagesList />
          <div className="fixed bottom-0 right-0 left-0">
            <MessageForm category={categoryClicked} />
          </div>
        </div>
      )}
    </MessagesProvider>
  )
}

export default ChatBot
