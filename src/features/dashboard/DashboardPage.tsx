import { Grid } from "@mui/material"
import { useDashboardStats } from "./useDashboardStats"
import StatCard from "../../shared/components/StatCard"

function DashboardPage() {
    const { data, isLoading, isError } = useDashboardStats()

    if (isLoading) return <p>Loading...</p>
    if (isError) return <p>Error loading data.</p>

    return (
        <Grid container spacing={3}>
            <Grid size={3}>
                <StatCard title="Total files" value={data?.totalFiles ?? 0}></StatCard>
            </Grid>
            <Grid size={3}>
                <StatCard title="Total errors" value={data?.totalErrors ?? 0}></StatCard>
            </Grid>
            <Grid size={3}>
                <StatCard title="Total records" value={data?.totalRecordsProcessed ?? 0}></StatCard>
            </Grid>
            <Grid size={3}>
                <StatCard title="Average time" value={`${(data?.averageProcessingTimeInSeconds ?? 0).toFixed(2)}s`}></StatCard>
            </Grid>
        </Grid>
    )
}

export default DashboardPage