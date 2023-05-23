import { NextPage } from 'next'
import Layout from '../components/Layout'
import { useState } from 'react'
import ToolsPicker from './tools'

const IndexPage: NextPage = () => {
  const [loading, setLoading] = useState(false)

  return (
    <Layout>
      <div>
        <ToolsPicker />
      </div>
    </Layout>
  )
}

export default IndexPage
