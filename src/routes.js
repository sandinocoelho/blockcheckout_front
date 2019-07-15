import Dashboard from "views/Dashboard.jsx";
import Icons from "views/Icons.jsx";
import Map from "views/Map.jsx";
import Notifications from "views/Notifications.jsx";
import Home from "views/Home.jsx";
import Rtl from "views/Rtl.jsx";
import TableList from "views/TableList.jsx";
import Typography from "views/Typography.jsx";
import UserProfile from "views/UserProfile.jsx";

var routes = [
  {
    path: "/",
    name: "Blockcheckout",
    rtlName: "",
    icon: "tim-icons icon-chart-pie-36",
    component: Home,
    layout: "/home",
    invisible: true
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/blocks",
    name: "Blocks",
    rtlName: "الرموز",
    icon: "tim-icons icon-app",
    component: Icons,
    layout: "/admin"
  },
  {
    path: "/checkouts",
    name: "Checkouts",
    rtlName: "خرائط",
    icon: "tim-icons icon-bag-16",
    component: Map,
    layout: "/admin"
  },
  {
    path: "/wallet",
    name: "Wallet",
    rtlName: "ملف تعريفي للمستخدم",
    icon: "tim-icons icon-wallet-43",
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/affiliate",
    name: "Affiliate Program",
    rtlName: "إخطارات",
    icon: "tim-icons icon-bell-55",
    component: Notifications,
    layout: "/admin"
  },
  {
    path: "/tables",
    name: "Table List",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-puzzle-10",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/typography",
    name: "Typography",
    rtlName: "طباعة",
    icon: "tim-icons icon-align-center",
    component: Typography,
    layout: "/admin"
  }
];
export default routes;
