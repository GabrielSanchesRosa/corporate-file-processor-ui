import api from "../../shared/lib/api";
import type { ProcessedFile } from "../../shared/types/file"; 

export async function getProcessedFiles(): Promise<ProcessedFile[]> {
    const response = await api.get<ProcessedFile[]>('/files')
    return response.data
}

export async function getFileById(id: string): Promise<ProcessedFile> {
    const response = await api.get<ProcessedFile>(`/files/${id}`)
    return response.data
}