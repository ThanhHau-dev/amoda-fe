import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  Paper,
  Card,
  CardContent,
  Typography,
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const DynamicTable = ({ columns, data }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  if (isMobile) {
    return (
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {data.map((row, index) => (
          <Card key={row.id || index} sx={{ boxShadow: 3 }}>
            <CardContent>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mb: 2 }}>
                {columns
                  .filter((col) => col.key !== "option")
                  .map((col) => (
                    <Box key={col.key} sx={{ minWidth: 0, flex: "1 1 auto" }}>
                      <Typography
                        variant="subtitle2"
                        sx={{ fontWeight: "bold" }}
                      >
                        {col.label}:
                      </Typography>
                      <Typography variant="body2">
                        {col.render
                          ? col.render(row[col.key], row)
                          : row[col.key]}
                      </Typography>
                    </Box>
                  ))}
              </Box>
              {columns.find((col) => col.key === "option") && (
                <Box sx={{ display: "flex", gap: 1, flexDirection: "column" }}>
                  {columns
                    .find((col) => col.key === "option")
                    .render(null, row)}
                </Box>
              )}
            </CardContent>
          </Card>
        ))}
      </Box>
    );
  }

  return (
    <TableContainer
      component={Paper}
      sx={{ boxShadow: 3, overflowX: "auto" }}
      style={{ borderRadius: 2 }}
    >
      <Table sx={{ minWidth: 650 }} aria-label="dynamic table">
        <TableHead sx={{ backgroundColor: "#f5f5f5" }}>
          <tr>
            {columns.map((col) => (
              <TableCell
                key={col.key}
                align={col.align || "left"}
                sx={{ fontWeight: "bold", ...col.sx }}
              >
                {col.label}
              </TableCell>
            ))}
          </tr>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <tr key={row.id || index}>
              {columns.map((col) => (
                <TableCell
                  key={col.key}
                  align={col.align || "left"}
                  sx={col.sx}
                >
                  {col.render ? col.render(row[col.key], row) : row[col.key]}
                </TableCell>
              ))}
            </tr>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DynamicTable;
