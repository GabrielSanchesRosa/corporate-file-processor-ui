import type { ProcessedFile } from "../../shared/types/file"

export interface ProcessingError {
    id: string
    lineNumber: number
    errorMessage: string
    createdAt: string
    fileProcess: ProcessedFile
}