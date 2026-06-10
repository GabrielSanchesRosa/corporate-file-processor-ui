import { useQuery } from "@tanstack/react-query";
import { getFileById } from "./filesService";

export function useFileById(id: string) {
    return useQuery({
        queryKey: ['file', id],
        queryFn: () => getFileById(id)
    })
}