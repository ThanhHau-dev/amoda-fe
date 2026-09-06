import AdminLayout from "./layout";
import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { DeleteSweep, Refresh } from "@mui/icons-material";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { clearStats, readStats } from "../../utils/tracker";

const RANGES = [
  { value: 7, label: "7 ngày" },
  { value: 14, label: "14 ngày" },
  { value: 30, label: "30 ngày" },
];

const startOfDay = (d) => new Date(d.getFullYear(), d.getMonth(), d.getDate());
const addDays = (d, n) => {
  const next = new Date(d);
  next.setDate(next.getDate() + n);
  return next;
};
const formatDay = (d) =>
  d.toLocaleDateString("vi-VN", { day: "2-digit", month: "2-digit" });

const countByType = (list, type, dayStart) => {
  const key = dayStart.toDateString();
  let count = 0;
  for (const rec of list) {
    if (rec.type === type && startOfDay(new Date(rec.t)).toDateString() === key) {
      count += 1;
    }
  }
  return count;
};

export default function Dashboard() {
  const [range, setRange] = useState(7);
  const [stats, setStats] = useState([]);

  const reload = () => setStats(readStats());

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    reload();
  }, []);

  const todayStart = startOfDay(new Date());
  const rangeStart = addDays(todayStart, -(range - 1));

  const inRange = stats.filter(
    (rec) => startOfDay(new Date(rec.t)) >= rangeStart,
  );

  const series = [];
  for (let i = range - 1; i >= 0; i -= 1) {
    const day = addDays(todayStart, -i);
    series.push({
      label: formatDay(day),
      views: countByType(inRange, "view", day),
      actions: countByType(inRange, "action", day),
    });
  }

  const totalViews = stats.filter((rec) => rec.type === "view").length;
  const weekStart = addDays(todayStart, -6);

  const kpis = [
    {
      title: "Lượt truy cập hôm nay",
      value: countByType(stats, "view", todayStart),
      color: "#2563EB",
    },
    {
      title: "Thao tác hôm nay",
      value: countByType(stats, "action", todayStart),
      color: "#7C3AED",
    },
    {
      title: "Lượt truy cập 7 ngày",
      value: stats.filter(
        (rec) =>
          rec.type === "view" && startOfDay(new Date(rec.t)) >= weekStart,
      ).length,
      color: "#16A34A",
    },
    {
      title: "Tổng lượt truy cập",
      value: totalViews,
      color: "#EA580C",
    },
  ];

  const handleClear = () => {
    if (window.confirm("Xóa toàn bộ dữ liệu thống kê đã ghi nhận?")) {
      clearStats();
      reload();
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
        <Box>
          <Typography variant="h5" fontWeight="700">
            Thống kê lượt truy cập
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lượt truy cập được ghi nhận khi mở trang / chuyển trang; thao tác
            ghi nhận mỗi cú click trên web. Dữ liệu lưu tại trình duyệt
            (demo).
          </Typography>
        </Box>

        <Stack direction="row" spacing={1}>
          <Button
            variant="outlined"
            color="primary"
            startIcon={<Refresh />}
            onClick={reload}
            sx={{ textTransform: "none" }}
          >
            Làm mới
          </Button>
          <Button
            variant="outlined"
            color="error"
            startIcon={<DeleteSweep />}
            onClick={handleClear}
            sx={{ textTransform: "none" }}
          >
            Xóa dữ liệu
          </Button>
        </Stack>
      </Stack>

      <Grid container spacing={2} sx={{ mb: 3 }}>
        {kpis.map((kpi) => (
          <Grid key={kpi.title} size={{ xs: 12, sm: 6, md: 3 }}>
            <Card variant="outlined" sx={{ height: "100%" }}>
              <CardContent>
                <Typography
                  variant="caption"
                  color="text.secondary"
                  fontWeight="600"
                >
                  {kpi.title}
                </Typography>
                <Typography variant="h4" fontWeight="700" sx={{ color: kpi.color }}>
                  {kpi.value.toLocaleString("vi-VN")}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <ToggleButtonGroup
        value={range}
        exclusive
        size="small"
        onChange={(_, next) => next && setRange(next)}
        sx={{ mb: 2 }}
      >
        {RANGES.map((r) => (
          <ToggleButton key={r.value} value={r.value} sx={{ textTransform: "none" }}>
            {r.label}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>

      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="subtitle1" fontWeight="600" sx={{ mb: 2 }}>
                Lượt truy cập theo ngày
              </Typography>
              <Box sx={{ width: "100%", height: 280 }}>
                <ResponsiveContainer>
                  <AreaChart data={series} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="viewsFill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#2563EB" stopOpacity={0.35} />
                        <stop offset="100%" stopColor="#2563EB" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                    <XAxis dataKey="label" tick={{ fontSize: 12 }} />
                    <YAxis tick={{ fontSize: 12 }} allowDecimals={false} />
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="views"
                      name="Lượt truy cập"
                      stroke="#2563EB"
                      strokeWidth={2}
                      fill="url(#viewsFill)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="subtitle1" fontWeight="600" sx={{ mb: 2 }}>
                Thao tác (click) theo ngày
              </Typography>
              <Box sx={{ width: "100%", height: 280 }}>
                <ResponsiveContainer>
                  <BarChart data={series} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                    <XAxis dataKey="label" tick={{ fontSize: 12 }} />
                    <YAxis tick={{ fontSize: 12 }} allowDecimals={false} />
                    <Tooltip />
                    <Bar dataKey="actions" name="Thao tác" fill="#7C3AED" />
                  </BarChart>
                </ResponsiveContainer>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

Dashboard.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};