import { useState } from "react"
import { useUploadFiles } from "./useUploadFiles"
import { Alert, Box, Button, Typography } from "@mui/material"

function UploadPage() {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])
  const { mutate, isPending, isSuccess, isError, data } = useUploadFiles()

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(event.target.files ?? [])
    setSelectedFiles(files)
  }

  function handleUpload() {
    if (selectedFiles.length > 0) {
      mutate(selectedFiles)
    }
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 400 }}>
      <Typography variant="h5">Upload Files</Typography>

      <input type="file" multiple onChange={handleFileChange}/>

      <Button
        variant="contained"
        onClick={handleUpload}
        disabled={selectedFiles.length === 0 || isPending}
      >
        {isPending ? 'Uploading...' : 'Upload'}
      </Button>

      {isSuccess && (
        <Alert severity="success">
          {data.count} file(s) accepted: {data.accepted.join(', ')}
        </Alert>
      )}

      {isError && (
        <Alert severity="error">Upload failed. Please try again</Alert>
      )}
    </Box>
  )
}

export default UploadPage