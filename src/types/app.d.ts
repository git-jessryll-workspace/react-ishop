interface IItem {
  name: string;
  href: string;
}

export interface ISection {
  id: string;
  name: string;
  items: IItem[];
}

export interface IFeatured {
  name: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
}

export interface ICategory {
  id: string;
  name: string;
  featured: IFeatured[];
  sections: ISection[];
}

export interface IPage {
  name: string;
  href: string;
}

export interface INavigation {
  categories: ICategory[];
  pages: IPage[];
}

export interface IProduct {
  id: number | string;
  name: string;
  href: string;
  price: string;
  imageSrc: string;
  imageAlt: string;
}

export type AppContextType = {
  openMenu: boolean;
  navigation: INavigation;
  products: IProduct[];
  toggleOpenMenu: (forceOpen: boolean) => void;
};
