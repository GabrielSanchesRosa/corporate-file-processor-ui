import { useDashboardStats } from "./useDashboardStats"

function DashboardPage() {
    const { data, isLoading, isError } = useDashboardStats()

    if (isLoading) return <p>Loading...</p>
    if (isError) return <p>Error loading data.</p>

    return (
        <div>
            <h1>Dashboard</h1>
            <p>Total files: {data?.totalFiles}</p>
            <p>Total errors: {data?.totalErrors}</p>
            <p>Total records: {data?.totalRecordsProcessed}</p>
            <p>Average time: {data?.averageProcessingTimeInSeconds}</p>
        </div>
    )
}

export default DashboardPage