import CustomerPageDashboard from "../../pages/CustomerPage/Dashboard/Dashboard";

import CustomerPageAccountEdit from "../../pages/CustomerPage/Account/Edit/EditAccount";
import CustomerPageAccountChangePassword from "../../pages/CustomerPage/Account/ChangePassword/ChangePassword";

export default [
  { path: "/customer", component: CustomerPageDashboard },
  { path: "/customer/account", component: CustomerPageAccountEdit },
  { path: "/customer/account/edit", component: CustomerPageAccountEdit },
  {
    path: "/customer/account/changePassword",
    component: CustomerPageAccountChangePassword,
  },
];
