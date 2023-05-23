import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

let db

export async function connectToDatabase() {
  try {
    await client.connect()
    console.log('Connected to MongoDB')
  } catch (error) {
    console.log('Error connecting to MongoDB: ' + error.message)
  }
  db = client.db('lemiclemic')
}

export function getDb() {
  return db
}
