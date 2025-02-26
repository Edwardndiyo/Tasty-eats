"use client"

import * as React from "react"
import styled from "styled-components"
import { Upload, Video, X } from "react-feather"

const Container = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
`

const UploadArea = styled.div`
  border: 2px dashed ${({ theme }) => theme.colors.text.secondary}33;
  border-radius: 12px;
  padding: ${({ theme }) => theme.spacing.xl};
  text-align: center;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.default};

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.primary}11;
  }
`

const MediaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.xl};
`

const MediaCard = styled.div`
  position: relative;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.sm};
`

const MediaPreview = styled.div`
  position: relative;
  padding-top: 100%;
  background: ${({ theme }) => theme.colors.text.secondary}11;
`

const MediaImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const MediaInfo = styled.div`
  padding: ${({ theme }) => theme.spacing.sm};
`

const DeleteButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: ${({ theme }) => theme.colors.status.error};
  color: white;
  border: none;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0;
  transition: opacity ${({ theme }) => theme.transitions.default};

  ${MediaCard}:hover & {
    opacity: 1;
  }
`

interface MediaItem {
  id: string
  type: "image" | "video"
  url: string
  name: string
}

export const MediaManagement = () => {
  const [mediaItems, setMediaItems] = React.useState<MediaItem[]>([
    {
      id: "1",
      type: "image",
      url: "/placeholder.svg",
      name: "Restaurant Interior",
    },
    // Add more items as needed
  ])

  const fileInputRef = React.useRef<HTMLInputElement>(null)

  const handleUploadClick = () => {
    fileInputRef.current?.click()
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files) {
      // Handle file upload
      console.log("Files selected:", files)
    }
  }

  const handleDelete = (id: string) => {
    setMediaItems(mediaItems.filter((item) => item.id !== id))
  }

  return (
    <Container>
      <h2>Media Management</h2>

      <UploadArea onClick={handleUploadClick}>
        <Upload size={48} style={{ color: "#666", marginBottom: "16px" }} />
        <p>Click or drag files to upload</p>
        <p style={{ fontSize: "14px", color: "#666", marginTop: "8px" }}>Supports: JPG, PNG, MP4 (max 10MB)</p>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*,video/*"
          multiple
          onChange={handleFileChange}
          style={{ display: "none" }}
        />
      </UploadArea>

      <MediaGrid>
        {mediaItems.map((item) => (
          <MediaCard key={item.id}>
            <MediaPreview>
              {item.type === "image" ? (
                <MediaImage src={item.url} alt={item.name} />
              ) : (
                <Video
                  size={48}
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    color: "#666",
                  }}
                />
              )}
              <DeleteButton onClick={() => handleDelete(item.id)}>
                <X size={16} />
              </DeleteButton>
            </MediaPreview>
            <MediaInfo>
              <div style={{ fontSize: "14px", marginBottom: "4px" }}>{item.name}</div>
              <div style={{ fontSize: "12px", color: "#666" }}>{item.type === "image" ? "Image" : "Video"}</div>
            </MediaInfo>
          </MediaCard>
        ))}
      </MediaGrid>
    </Container>
  )
}

