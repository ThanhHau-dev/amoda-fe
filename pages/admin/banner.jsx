import React, { useEffect, useState } from "react";
import AdminLayout from "./layout";
import DynamicTable from "../../components/table/dynamicTable";
import Delete_Dialog from "../../components/dialogs/delete";
import { Box, Button, InputAdornment, Stack, TextField } from "@mui/material";
import { Add, FilterList, Search } from "@mui/icons-material";
import Image from "next/image";
import defaultImage from "../../public/image/default-placeholder.png";
import { toast } from "react-toastify";
import CreateBanner_Dialog from "../../components/dialogs/form_banner";

const BE_URL = process.env.NEXT_PUBLIC_BE_URL;
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
const mockdata = [
  {
    imgLink: "",
    nameTitle: "",
    order: 1,
    __v: 0,
    _id: "",
  },
];

export default function Banner() {
  const [openForm, setOpenForm] = useState({
    editForm: false,
    item: {},
    open: false,
  });
  const [openDelete, setOpenDelete] = useState({
    title: "",
    id: "",
    open: false,
  });
  const [listData, setListData] = useState([]);
  const Columns = [
    {
      key: "imgLink",
      label: "Hình ảnh",
      render: (value) => (
        <Box borderRadius={2}>
          <Image
            alt="hình ảnh banner"
            borderRadius={2}
            objectFit="cover"
            width={50}
            height={50}
            src={value || defaultImage}
          />
        </Box>
      ),
    },
    { key: "nameTitle", label: "Tên tiêu đề" },
    { key: "order", label: "Thứ tự" },
    {
      key: "option",
      label: "",
      render: (_, row) => (
        <Box display="flex" justifyContent="right" gap={1}>
          <Button
            onClick={() =>
              setOpenForm({ open: true, editForm: true, item: row })
            }
            variant="contained"
            sx={{
              borderRadius: 2,
              textTransform: "none",
              bgcolor: "#635BFF",
              "&:hover": { bgcolor: "#5249f0" },
            }}
          >
            Sửa
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              setOpenDelete({ id: row._id, title: row.nameTitle, open: true });
            }}
            sx={{
              borderRadius: 2,
              textTransform: "none",
              bgcolor: "#ff3231",
              "&:hover": { bgcolor: "#d50808" },
            }}
          >
            Xóa
          </Button>
        </Box>
      ),
    },
  ];

  const fecthData = () =>
    fetch(`${BE_URL}/bannerHome?limit=1000`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
    })
      .then((res) => res.json())
      .then((respone) => {
        if (respone) {
          setListData(respone || []);
        }
      });

  useEffect(() => {
    fecthData();
  }, []);

  const handleDelete = (slug) => {
    if (openDelete.open) {
      if (!slug) return;
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      fetch(`${BE_URL}/bannerHome/deleteBanner/${slug}`, {
        method: "DELETE",
        headers: myHeaders,
      })
        .then((res) => {
          if (!res.ok) {
            toast.error("Lỗi khi xóa banner");
            return;
          }
          toast.success("Xóa banner thành công");
          setOpenDelete({ title: "", id: "", open: false });
          fecthData();
          return res.json();
        })
        .catch((err) => {
          toast.error(err);
        });
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={2}
        justifyContent="space-between"
        alignItems={{ xs: "stretch", md: "center" }}
        sx={{ mb: 3 }}
      >
        <TextField
          placeholder="Tìm kiếm..."
          size="small"
          sx={{
            bgcolor: "white",
            borderRadius: 2,
            width: { md: 300 },
            "& .MuiOutlinedInput-notchedOutline": { borderColor: "#E0E4EC" },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search sx={{ color: "text.secondary" }} />
              </InputAdornment>
            ),
          }}
        />
        <Stack direction="row" spacing={1}>
          <Button
            variant="outlined"
            startIcon={<FilterList />}
            sx={{
              borderRadius: 2,
              textTransform: "none",
              color: "#333",
              borderColor: "#E0E4EC",
            }}
          >
            Lọc
          </Button>
          <Button
            variant="contained"
            startIcon={<Add />}
            onClick={() => setOpenForm((pre) => ({ ...pre, open: true }))}
            sx={{
              borderRadius: 2,
              textTransform: "none",
              bgcolor: "#635BFF",
              "&:hover": { bgcolor: "#5249f0" },
            }}
          >
            Tạo
          </Button>
        </Stack>
      </Stack>
      <DynamicTable columns={Columns} data={listData} />
      <CreateBanner_Dialog
        open={openForm.open}
        handleClose={() =>
          setOpenForm({ editForm: false, item: {}, open: false })
        }
        editForm={openForm.editForm}
        item={openForm.item}
        reload={()=>fecthData()}
      />
      <Delete_Dialog
        open={openDelete.open}
        handleClose={() => setOpenDelete({ title: "", id: "", open: false })}
        title={openDelete.title}
        func={() => handleDelete(openDelete.id)}
      />
    </Box>
  );
}

Banner.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};
