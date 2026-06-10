import { useNavigate, useParams } from "react-router-dom"
import { useFileById } from "./useFileById"

function FileDetailPage() {
    const { id } = useParams<{ id: string }>()
    const { data, isLoading, isError } = useFileById(id!)
    const navigate = useNavigate()

    if (isLoading) return <p>Loading...</p>
    if (isError) return <p>Error loading file.</p>

    return (
        <div>
            <button onClick={() => navigate('/files')}>Back to Files</button>
            <h1>{data?.fileName}</h1>
            <p>Status: {data?.status}</p>
            <p>Total Records: {data?.totalRecords}</p>
            <p>Success Records: {data?.successRecords}</p>
            <p>Failed Records: {data?.failedRecords}</p>
            <p>
                Received At: {new Date(data?.receivedAt ?? '').toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: '2-digit',
                    hour: '2-digit',
                    minute: '2-digit'
                })}
            </p>
        </div>
    )
}

export default FileDetailPage