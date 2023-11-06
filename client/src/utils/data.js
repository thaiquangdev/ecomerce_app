export const navbar = [
  {
    title: "HOME",
    path: "/",
  },
  {
    title: "SHOP",
    path: "/shop",
  },
  {
    title: "BLOG",
    path: "/blog",
  },
  {
    title: "CONTACT",
    path: "/contact",
  },
];

export const sideBar = [
  {
    title: "Men",
    path: "/product-category/men",
  },
  {
    title: "Women",
    path: "/product-category/women",
  },
  {
    title: "Kids",
    path: "/product-category/kids",
  },
  {
    title: "Baby",
    path: "/product-baby",
  },
  {
    title: "Shoes",
    path: "/product-category/shoes",
  },
  {
    title: "Bags",
    path: "/product-category/bags",
  },
  {
    title: "Accessories",
    path: "/product-category/accessories",
  },
  {
    title: "Watches",
    path: "/product-category/watches",
  },
  {
    title: "Cargo Trousers",
    path: "/product-category/cargo-trousers",
  },
  {
    title: "Outerwear",
    path: "/product-category/outerwear",
  },
  {
    title: "Wallets",
    path: "/product-category/-wallets",
  },
  {
    title: "Belts",
    path: "/product-category/belts",
  },
];

export const sliderBanner = [
  {
    title: "WINTER 2022 COLLECTION",
    des: (
      <>
        Street Fashion <br /> not only for the <br /> street
      </>
    ),
    link: (
      <>
        Shop Collection <ion-icon name="arrow-forward-outline"></ion-icon>
      </>
    ),
    path: "/shop",
    image: "/slider-01.jpg",
  },
  {
    title: "WINTER 2022 COLLECTION",
    des: (
      <>
        Making <br /> someone feel <br /> pretty is an art
      </>
    ),
    link: (
      <>
        Shop Collection <ion-icon name="arrow-forward-outline"></ion-icon>
      </>
    ),
    path: "/shop",
    image: "/slider-02.jpg",
  },
  {
    title: "WINTER 2022 COLLECTION",
    des: (
      <>
        Elegant designs <br /> to bloom your <br /> elegance
      </>
    ),
    link: (
      <>
        Shop Collection <ion-icon name="arrow-forward-outline"></ion-icon>
      </>
    ),
    path: "/shop",
    image: "/slider-03.jpg",
  },
];

export const widget = [
  {
    subTitle: "NEW SEASON",
    entryTitle: (
      <>
        Big patterns are <br /> back in fashion
      </>
    ),
    des: (
      <>
        Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do
        eiusmod.
      </>
    ),
    link: (
      <>
        Shop Now <ion-icon name="arrow-forward-outline"></ion-icon>
      </>
    ),
    path: "#",
    image: "/banner-01.jpg",
  },
  {
    subTitle: "NEW SEASON",
    entryTitle: (
      <>
        Tha latest men's <br /> trends this season
      </>
    ),
    des: <>Don't miss the opportunity.</>,
    link: (
      <>
        Shop Now <ion-icon name="arrow-forward-outline"></ion-icon>
      </>
    ),
    path: "#",
    image: "/banner-02.jpg",
  },
  {
    subTitle: "NEW SEASON",
    entryTitle: (
      <>
        Show your fashion <br /> with summer shoes
      </>
    ),
    des: <>Don't miss the opportunity.</>,
    link: (
      <>
        Shop Now <ion-icon name="arrow-forward-outline"></ion-icon>
      </>
    ),
    path: "#",
    image: "/banner-03.jpg",
  },
];

export const colors = [
  { style: "#9f1435", title: "Apple Red" },
  { style: "#003080", title: "Bio Blue" },
  { style: "#e1955b", title: "Sweet Orange" },
  { style: "#6e94bb", title: "Blue" },
  { style: "#016243", title: "Green" },
  { style: "#e2939a", title: "Pink" },
  { style: "#000000", title: "Black" },
  { style: "#e4e4e6", title: "White" },
];

export const sizes = [
  {
    title: "XXS",
  },
  {
    title: "XS",
  },
  {
    title: "S",
  },
  {
    title: "M",
  },
  {
    title: "L",
  },
  {
    title: "XL",
  },
  {
    title: "XXL",
  },
];

export const sosial = [
  {
    title: <ion-icon name="logo-facebook"></ion-icon>,
  },
  { title: <ion-icon name="logo-twitter"></ion-icon> },
  {
    title: <ion-icon name="logo-whatsapp"></ion-icon>,
  },
  {
    title: <ion-icon name="copy-outline"></ion-icon>,
  },
  {
    title: <ion-icon name="mail"></ion-icon>,
  },
];

export const adminSidebar = [
  {
    type: "single",
    title: "Dashboard",
    path: "/admin/",
    icon: <ion-icon name="podium-outline"></ion-icon>,
  },
  {
    type: "single",
    title: "Manager users",
    path: "/admin/users",
    icon: <ion-icon name="person-circle-outline"></ion-icon>,
  },
  {
    type: "single",
    title: "Manager orders",
    icon: <ion-icon name="cart-outline"></ion-icon>,
  },
  {
    type: "parent",
    title: "Manager products",
    icon: <ion-icon name="extension-puzzle-outline"></ion-icon>,
    submenu: [
      {
        title: "Create product",
        path: "/admin/create-product",
      },
      {
        title: "Product List",
        path: "/admin/product-list",
      },
    ],
  },
  {
    type: "parent",
    title: "Manager products categories",
    icon: <ion-icon name="extension-puzzle-outline"></ion-icon>,
    submenu: [
      {
        title: "Create product category",
        path: "/admin/create-product-category",
      },
      {
        title: "Product category list",
        path: "/admin/product-list-category",
      },
    ],
  },
  {
    type: "parent",
    title: "Manager colors",
    icon: <ion-icon name="extension-puzzle-outline"></ion-icon>,
    submenu: [
      {
        title: "Create color",
        path: "/admin/create-color",
      },
      {
        title: "Color list",
        path: "/admin/color-list",
      },
    ],
  },
  {
    type: "parent",
    title: "Manager sizes",
    icon: <ion-icon name="extension-puzzle-outline"></ion-icon>,
    submenu: [
      {
        title: "Create size",
        path: "/admin/create-size",
      },
      {
        title: "Size list",
        path: "/admin/size-list",
      },
    ],
  },
  {
    type: "parent",
    title: "Manager blogs",
    icon: <ion-icon name="save-outline"></ion-icon>,
    submenu: [
      {
        title: "Create blog",
        path: "/admin/create-blog",
      },
      {
        title: "Blog List",
        path: "/admin/blog-list",
      },
    ],
  },
  {
    type: "parent",
    title: "Manager blogs categories",
    icon: <ion-icon name="save-outline"></ion-icon>,
    submenu: [
      {
        title: "Create blog cateogry",
        path: "/admin/create-blog-category",
      },
      {
        title: "Blog List",
        path: "/admin/blog-category-list",
      },
    ],
  },
];
