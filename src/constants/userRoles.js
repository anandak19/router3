export const USER_ROLES = {
  ADMIN: "admin",
  SUB_ADMIN: "subAdmin",
  STAFF: "staff",
  PARTNER: "partner",
  CASH_COLLECTOR: "cashCollector",
  ACCOUNTANT: "accountant",
  COUPON_ADDING_STAFF: "couponAddingStaff",
};

export const userRoleList = Object.values(USER_ROLES);

export const siteUsers = [
  USER_ROLES.ADMIN,
  USER_ROLES.SUB_ADMIN,
  USER_ROLES.PARTNER,
  USER_ROLES.ACCOUNTANT,
  USER_ROLES.COUPON_ADDING_STAFF,
];

export const appUsers = [USER_ROLES.STAFF, USER_ROLES.CASH_COLLECTOR];
