import { connectToDatabase, getDb } from '../../lib/mongodb'
import multer from 'multer'

const upload = multer({ storage: multer.memoryStorage() })
const uploadFile = upload.single('file')

export default async function handler(req, res) {
  console.log('reqa', req.data)
  // Connect to database
  await connectToDatabase()

  let db = await getDb()

  // Call the `uploadFile` middleware before the route handler
  uploadFile(req, res, async (err) => {
    if (err) {
      return res.status(400).send({ error: err.message })
    }

    // Get file data from the request object
    const fileData = req.file

    const result = await db.collection('files').insertOne({
      filename: fileData.originalname,
      contentType: fileData.mimetype,
      size: fileData.size,
      data: fileData.buffer
    })

    // Send response to client
    res.status(200).send({ message: 'File uploaded successfully!' })
  })
}
