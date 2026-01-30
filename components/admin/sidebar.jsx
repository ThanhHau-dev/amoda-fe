"use client";
import { MdSpaceDashboard } from "react-icons/md";
import { AiFillProduct } from "react-icons/ai";
import { FaRegNewspaper } from "react-icons/fa6";
import { IoImagesOutline } from "react-icons/io5";

import logoImage from "../../public/image/logo-h.png";

import {
  Box,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";


const BE_URL = process.env.NEXT_PUBLIC_BE_URL;
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const sideBarConfigs = [
  {
    title: "Bảng thống kê",
    icon: <MdSpaceDashboard size={24} />,
    path: "/dashboard",
  },
  {
    title: "Sản phẩm",
    icon: <AiFillProduct size={24} />,
    path: "/products",
  },
  {
    title: "Bảng tin",
    icon: <FaRegNewspaper size={24} />,
    path: "/news",
  },
  {
    title: "Banner",
    icon: <IoImagesOutline size={24} />,
    path: "/banner",
  },
];

export default function SidebarContent({
  closeSidebarMobile = () => {},
  isMobile = false,
}) {
  const router = useRouter();
  const pathName = usePathname();


  const handleLogout = () => {

    

    fetch(`${BE_URL}/auth/logOut/ `, {
      method: "POST",
      headers: myHeaders,
    })
      .then((res) => {
        if (!res.ok) return;
        return res.json();
      })
      .catch((err) => {
        console.log(err);
      });

    localStorage.removeItem('accessToken');
    router.push('/admin/login');
  }



  return (
    <Box
      sx={{
        p: 2,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
      className="bg-sidebar"
      suppressHydrationWarning={true}
    >
      <Stack height="100%" direction={"column"} alignItems={"stretch"}>
        <Box
          mb={4}
          sx={{ padding: 1 }}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Image
            src={logoImage}
            width={isMobile ? 150 : 200}
            height={15}
            alt="logo"
          />
        </Box>
        <Typography
          variant="caption"
          sx={{ fontWeight: 700, px: 2, mb: 1 }}
          className="dim-text"
        >
          GENERAL
        </Typography>
        <List>
          {sideBarConfigs.map((item) => (
            <ListItem
              key={item.title}
              disablePadding
              sx={{ mb: 0.5 }}
              onClick={() => {
                router.push(`/admin${item.path}`);
                closeSidebarMobile();
              }}
            >
              <ListItemButton
                sx={{
                  borderRadius: 3,
                }}
                className={
                  pathName.includes(item.path)
                    ? "active-item"
                    : "no-active-item"
                }
              >
                <ListItemIcon
                  sx={{
                    minWidth: 40,
                  }}
                  className={
                    pathName.includes(item.path)
                      ? "active-item"
                      : "no-active-item"
                  }
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.title}
                  primaryTypographyProps={{
                    fontSize: "0.9rem",
                    fontWeight: pathName.includes(item.path) ? 700 : 500,
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Button onClick={handleLogout} sx={{margin: "auto 0 1rem",  borderRadius: 3}} className="btn-red-form">Đăng xuất</Button>
      </Stack>
    </Box>
  );
}
