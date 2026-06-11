import api from "../../shared/lib/api";
import type { UploadResponse } from "./types";

export async function uploadFiles(files: File[]): Promise<UploadResponse> {
    const formData = new FormData()
    files.forEach(file => formData.append('files', file))

    const response = await api.post<UploadResponse>('/upload', formData)
    return response.data
}