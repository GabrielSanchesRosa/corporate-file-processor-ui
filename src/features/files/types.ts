export type FileStatus = 
    | 'RECEIVED'
    | 'PROCESSING'
    | 'COMPLETED'
    | 'COMPLETED_WITH_ERRORS'
    | 'FAILED'

export interface ProcessedFile {
    id: string
    fileName: string
    receivedAt: string
    processedAt: string
    status: FileStatus
    totalRecords: number
    successRecords: number
    failedRecords: number
}