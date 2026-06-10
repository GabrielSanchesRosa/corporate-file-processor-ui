import { useQuery } from "@tanstack/react-query";
import { getDashboardStats } from "./dashboardService";

export function useDashboardStats() {
    return useQuery({
        queryKey: ['dashboard-stats'],
        queryFn: getDashboardStats
    })
}