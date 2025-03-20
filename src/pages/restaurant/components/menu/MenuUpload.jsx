import { useState } from "react"
import styled from "styled-components"
import { Upload, X } from "lucide-react"

const Container = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  border: 1px solid ${(props) => props.theme.colors.border};
  padding: 1.5rem;
`

const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
`

const UploadArea = styled.div`
  border: 2px dashed ${(props) => props.theme.colors.border};
  border-radius: 0.5rem;
  padding: 2rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    border-color: ${(props) => props.theme.colors.primary};
    background-color: ${(props) => props.theme.colors.primaryLight};
  }
`

const UploadIcon = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.colors.primary};
`

const UploadText = styled.div`
  margin-bottom: 0.5rem;
  font-weight: 500;
`

const UploadSubtext = styled.div`
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.mutedForeground};
`

const PreviewContainer = styled.div`
  margin-top: 1.5rem;
`

const PreviewGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
`

const PreviewCard = styled.div`
  position: relative;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 0.375rem;
  overflow: hidden;
`

const PreviewImage = styled.img`
  width: 100%;
  height: 12rem;
  object-fit: cover;
`

const RemoveButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  width: 2rem;
  height: 2rem;
  border-radius: 9999px;
  background-color: white;
  border: 1px solid ${(props) => props.theme.colors.border};
  color: ${(props) => props.theme.colors.mutedForeground};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${(props) => props.theme.colors.destructive};
    border-color: ${(props) => props.theme.colors.destructive};
    color: white;
  }
`

export default function MenuUpload() {
  const [images, setImages] = useState([])

  const handleDrop = (e) => {
    e.preventDefault()
    const files = Array.from(e.dataTransfer.files)
    handleFiles(files)
  }

  const handleFileInput = (e) => {
    const files = Array.from(e.target.files)
    handleFiles(files)
  }

  const handleFiles = (files) => {
    const imageFiles = files.filter((file) => file.type.startsWith("image/"))
    const newImages = imageFiles.map((file) => ({
      id: Math.random().toString(36).substr(2, 9),
      url: URL.createObjectURL(file),
      file,
    }))
    setImages((prev) => [...prev, ...newImages])
  }

  const removeImage = (id) => {
    setImages((prev) => prev.filter((image) => image.id !== id))
  }

  return (
    <Container>
      <Title>Upload Menu Images</Title>

      <UploadArea
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        onClick={() => document.getElementById("file-input").click()}
      >
        <input
          type="file"
          id="file-input"
          multiple
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleFileInput}
        />
        <UploadIcon>
          <Upload size={40} />
        </UploadIcon>
        <UploadText>Drop images here or click to upload</UploadText>
        <UploadSubtext>Support for JPG, PNG files</UploadSubtext>
      </UploadArea>

      {images.length > 0 && (
        <PreviewContainer>
          <PreviewGrid>
            {images.map((image) => (
              <PreviewCard key={image.id}>
                <PreviewImage src={image.url} alt="Preview" />
                <RemoveButton onClick={() => removeImage(image.id)}>
                  <X size={16} />
                </RemoveButton>
              </PreviewCard>
            ))}
          </PreviewGrid>
        </PreviewContainer>
      )}
    </Container>
  )
}



