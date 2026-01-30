import AdminLayout from './layout'
export default function Dashboard() {
  return (
    <div>Comming soon</div>
  )
}

Dashboard.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};