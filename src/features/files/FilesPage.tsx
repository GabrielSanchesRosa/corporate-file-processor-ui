import { Chip, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import { useProcessedFiles } from "./useProcessedFiles"
import type { FileStatus } from "./types"
import { useNavigate } from "react-router-dom"

const statusColorMap: Record<FileStatus, 'success' | 'error' | 'warning' | 'default'> = {
  COMPLETED: 'success',
  FAILED: 'error',
  COMPLETED_WITH_ERRORS: 'warning',
  RECEIVED: 'default',
  PROCESSING: 'default'
}

function FilesPage() {
  const { data, isLoading, isError } = useProcessedFiles()
  const navigate = useNavigate()

  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Error loading data.</p>

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>File Name</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Total Records</TableCell>
            <TableCell>Received At</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((file) => (
            <TableRow 
              key={file.id}
              hover
              sx={{ cursor: 'pointer' }}
              onClick={() => navigate(`/files/${file.id}`)}
            >
              <TableCell>{file.fileName}</TableCell>
              <TableCell>
                <Chip 
                label={file.status}
                color={statusColorMap[file.status]}
                size="small"
                />
              </TableCell>
              <TableCell>{file.totalRecords}</TableCell>
              <TableCell>
                {new Date(file.receivedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: '2-digit',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default FilesPage