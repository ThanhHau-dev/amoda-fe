import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  IconButton,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const Delete_Dialog = ({ open, handleClose, func = () => {}, title = "" }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullScreen={fullScreen}
      PaperProps={{
        sx: {
          borderRadius: fullScreen ? 0 : "10px",
          padding: "16px",
          width: "100%",
          maxWidth:"450px"
        },
      }}
    >
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: "absolute",
          right: 16,
          top: 16,
          color: (theme) => theme.palette.grey[900],
        }}
      >
        <CloseIcon />
      </IconButton>

      <DialogTitle sx={{ pb: 0, pt: 2 }}>
        <Typography variant="span" fontWeight="600" color="error">
          Xác nhận xóa
        </Typography>
      </DialogTitle>

      <DialogContent sx={{ mt: 3 }}>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ lineHeight: 1.6 }}
        >
          Bạn có chắc muốn xóa form {title} không?
        </Typography>
      </DialogContent>

      <DialogActions sx={{ justifyContent: "flex-end", gap: 1, px: 3, pb: 2 }}>
        <Button
          onClick={handleClose}
          variant="outlined"
          sx={{
            borderRadius: 2,
            textTransform: "none",
            px: 3,
            borderColor: "#6c5ce7",
            color: "#6c5ce7",
            "&:hover": { borderColor: "#5a4ad1" },
          }}
        >
          Hủy
        </Button>

        <Button
          onClick={() => {
            func();
          }}
          variant="contained"
          sx={{
            borderRadius: 2,
            textTransform: "none",
            px: 3,
            bgcolor: "#ff3231",
            "&:hover": { bgcolor: "#d50808" },
          }}
        >
          Xóa
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Delete_Dialog;
