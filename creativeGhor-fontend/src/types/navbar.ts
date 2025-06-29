export interface NavItem {
  title: string
  href: string
  icon?: React.ComponentType<{ className?: string }>
}

export interface CategoryGroup {
  title: string
  items: NavItem[]
}

export interface NavbarProps {
  className?: string
}

export interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}
