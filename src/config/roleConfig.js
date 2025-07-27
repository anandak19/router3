import { USER_ROLES } from "../constants/userRoles.js";

export const rolewiseMenu = {
  [USER_ROLES.ADMIN]: [
    { menu: "Dashboard", route: "/dashboard" },
    { menu: "Users", route: "/users" },
    { menu: "Reports", route: "/reports" },
    { menu: "Sales", route: "/sales" },
    { menu: "Sites", route: "/sites" },
    { menu: "Coupons", route: "/coupons" },
    { menu: "Settings", route: "/settings" },
  ],

  [USER_ROLES.STAFF]: [
    { menu: "Dashboard", route: "/dashboard" },
    { menu: "Sales", route: "/sales" },
  ],

  [USER_ROLES.SUB_ADMIN]: [
    { menu: "Dashboard", route: "/dashboard" },
    { menu: "Users", route: "/users" },
    { menu: "Reports", route: "/reports" },
  ],

  [USER_ROLES.ACCOUNTANT]: [
    { menu: "Dashboard", route: "/dashboard" },
    { menu: "Finance", route: "/finance" },
    { menu: "Cash Collection", route: "/cash-collection" },
  ],

  [USER_ROLES.PARTNER]: [
    { menu: "Dashboard", route: "/dashboard" },
    { menu: "Sales", route: "/sales" },
    { menu: "Reports", route: "/reports" },
  ],
};
