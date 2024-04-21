interface MenuItem {
    categoryId: number;
    name: string;
    image: string;
    content: MenuContentItem[];
  }
  
  interface MenuContentItem {
    id: number;
    image: string;
    name: string;
    description: string;
    price: number;
  }