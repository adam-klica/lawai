import { useState } from 'react'
import axios from 'axios'

const CasePrediction = () => {
  const [file, setFile] = useState(null)
  const [fileName, setFileName] = useState(null)

  const handleFileChange = async (e) => {
    setFile(e.target.files[0])
    setFileName(e.target.files[0].name)
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault()
    const reader = new FileReader()
    const formData = new FormData()

    await reader.readAsDataURL(file)
    console.log(reader)
    if (reader.result === null) {
      return
    }

    formData.append('file', reader.result)
    formData.append('filename', file.name)

    axios({
      method: 'post',
      url: '/api/upload',
      data: formData,
      headers: { 'Content-Type': 'multipart/form-data' }
    })
      .then(function (response) {
        //handle success
        console.log(response)
      })
      .catch(function (response) {
        //handle error
        console.log(response)
      })
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-4 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-medium mb-4">Upload a Document</h1>
        <form onSubmit={handleFormSubmit} encType="multipart/form-data">
          <div className="mb-4">
            <label htmlFor="file" className="font-medium block mb-1">
              Select a file:
            </label>
            <input
              type="file"
              name="file"
              id="file"
              onChange={handleFileChange}
              className="border border-gray-300 py-2 px-3 w-full rounded-md"
            />
          </div>
          {fileName && (
            <div className="mb-4">
              <p className="font-medium mb-1">Selected file:</p>
              <p>{fileName}</p>
            </div>
          )}
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
            disabled={!file}
          >
            Upload
          </button>
        </form>
      </div>
    </div>
  )
}

export default CasePrediction
