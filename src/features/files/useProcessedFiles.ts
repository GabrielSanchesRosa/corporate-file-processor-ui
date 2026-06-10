import { useQuery } from "@tanstack/react-query";
import { getProcessedFiles } from "./filesService";

export function useProcessedFiles() {
    return useQuery({
        queryKey: ['processed-files'],
        queryFn: getProcessedFiles
    })
}