import api from "../../shared/lib/api";
import type { ProcessingError } from "./types";

export async function getProcessingErrors(): Promise<ProcessingError[]> {
    const response = await api.get<ProcessingError[]>('/errors')
    return response.data
}