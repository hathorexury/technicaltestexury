import { SidebarItem } from "@/domain/models/sidebar-item";
import * as icons from "@/domain/constants/icons.constant";

export const SIDEBAR_LINKS: SidebarItem[] = [
  {
    title: "Buy Crypto",
    icon: icons.CART_ICON,
    route: "/buy-crypto",
    show: false,
  },
  { title: "Discover us", icon: "mdi-earth", route: "/discover", show: true },
  {
    title: "How it works",
    icon: icons.CURRENCY_ICON,
    route: "/how-it-works",
    show: true,
  },
  {
    title: "Community",
    icon: icons.ACCOUNT_ICON_GROUP,
    route: "/community",
    show: true,
  },
  { title: "Blog", icon: "mdi-file-document", route: "/blog", show: true },
  {
    title: "FAQ",
    icon: icons.FAQ_ICON,
    route: "/faq",
    show: true,
  },
  {
    title: "Company",
    icon: icons.OFFICE_BUILDING_ICON,
    route: "/company",
    show: true,
  },
  {
    title: "Contact",
    icon: icons.ACCOUNT_BOX_ICON,
    route: "/contact",
    show: true,
  },
];
