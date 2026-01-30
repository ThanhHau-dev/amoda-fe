import { useState } from "react";
import {
  Box,
  CssBaseline,
  Drawer,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SidebarContent from "../../components/admin/sidebar";

export default function AdminLayout({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const drawerWidth = isMdUp ? 260 : isSmUp ? 220 : 200;
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  return (
    <div suppressHydrationWarning={true}>
      <Box sx={{ display: "flex", bgcolor: "#F8F9FE", minHeight: "100vh" }}>
        <CssBaseline />
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >
          <Drawer
            variant={isMobile ? "temporary" : "permanent"}
            open={isMobile ? mobileOpen : true}
            onClose={handleDrawerToggle}
            sx={{
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
                borderRight: "1px solid #E0E4EC",
              },
            }}
          >
            <SidebarContent closeSidebarMobile={()=>setMobileOpen(false)} isMobile={isMobile}/>
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: { xs: 1, sm: 2, md: 3, lg: 4 },
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ ml: 0, mb: 1 }}
            >
              <MenuIcon />
            </IconButton>
          )}
          {children}
        </Box>
      </Box>
    </div>
  );
}


