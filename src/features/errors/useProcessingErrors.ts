import { useQuery } from "@tanstack/react-query";
import { getProcessingErrors } from "./errorsService";

export function useProcessingErrors() {
    return useQuery({
        queryKey: ['processing-errors'],
        queryFn: getProcessingErrors
    })
}