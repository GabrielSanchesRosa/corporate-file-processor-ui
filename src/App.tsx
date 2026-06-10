import { Routes, Route } from "react-router-dom"
import DashboardPage from "./features/dashboard/DashboardPage"
import AppLayout from "./shared/layouts/AppLayout"
import FilesPage from "./features/files/FilesPage"
import UploadPage from "./features/upload/UploadPage"
import ErrorsPage from "./features/errors/ErrorsPage"
import FileDetailPage from "./features/files/FileDetailPage"

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/files" element={<FilesPage />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/errors" element={<ErrorsPage />} />
        <Route path="/files/:id" element={<FileDetailPage />} />
      </Route>
    </Routes>
  )
}

export default App