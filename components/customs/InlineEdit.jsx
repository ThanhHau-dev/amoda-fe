import React, { useState } from "react";
import { Typography, TextField, Box } from "@mui/material";
import { formatNumber } from "../../utils/formartNumber";

const InlineEdit = ({ value, onSave, variant = "h4", sx = {}, type = "text" }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [currentValue, setCurrentValue] = useState(value);

  const handleBlur = () => {
    setIsEditing(false);
    if (String(currentValue).trim() == "") setCurrentValue(value);
    onSave(currentValue);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setIsEditing(false);
      onSave(currentValue);
    }
  };

  return (
    <Box sx={{ cursor: "pointer", ...sx }}>
      {isEditing ? (
        <TextField
          value={currentValue}
          onChange={(e) => setCurrentValue(e.target.value)}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          autoFocus
          multiline
          variant="standard"
          fullWidth
          type={type}
        />
      ) : (
        <Typography
          variant={variant}
          onClick={() => setIsEditing(true)}
          sx={{ "&:hover": { bgcolor: "#f5f5f5", borderRadius: "4px" }, ...sx }}
        >
         {String(currentValue).trim() === "" || currentValue == null ? "Rỗng" : formatNumber(currentValue) != "NaN" ? formatNumber(currentValue) : currentValue }
        </Typography>
      )}
    </Box>
  );
};

export default InlineEdit;
