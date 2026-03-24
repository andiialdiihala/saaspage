type MenuItem = {
  href: string;
  label: string;
  submenu?: SubmenuItem[];
};

type SubmenuItem = {
  href: string;
  icon: React.ReactNode;
  label: string;
  desc: string;
}

export type { MenuItem };