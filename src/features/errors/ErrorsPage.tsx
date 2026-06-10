import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import { useProcessingErrors } from "./useProcessingErrors"

function ErrorsPage() {
  const { data, isLoading, isError } = useProcessingErrors()

  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Error loading data.</p>

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>File Name</TableCell>
            <TableCell>Line Number</TableCell>
            <TableCell>Error Message</TableCell>
            <TableCell>Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((error) => (
            <TableRow key={error.id}>
              <TableCell>{error.fileProcess.fileName}</TableCell>
              <TableCell>{error.lineNumber}</TableCell>
              <TableCell>{error.errorMessage}</TableCell>
              <TableCell>
                {new Date(error.createdAt).toLocaleDateString('en-US', {
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

export default ErrorsPage