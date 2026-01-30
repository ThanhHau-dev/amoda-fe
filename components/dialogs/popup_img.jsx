import { Box, CardMedia, Dialog, DialogContent, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import React from 'react'

export default function PopupImage({ open, handleClose, imageUrl, altText }) {
  return (
    <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
          <Box display="flex" justifyContent="flex-end">
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>
  
          <DialogContent sx={{ padding: 0 }}>
            <CardMedia
              component="img"
              image={imageUrl}
              alt={altText}
              sx={{
                maxHeight: '80vh',
                width: '100%',
                objectFit: 'cover',
              }}
            />
          </DialogContent>
        </Dialog>
  )
}
