import { useMutation } from "@tanstack/react-query";
import { uploadFiles } from "./uploadService";

export function useUploadFiles() {
    return useMutation({
        mutationFn: uploadFiles
    })
}