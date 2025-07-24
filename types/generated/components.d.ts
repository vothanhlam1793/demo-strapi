import type { Schema, Attribute } from '@strapi/strapi';

export interface BannerItembanner extends Schema.Component {
  collectionName: 'components_banner_itembanners';
  info: {
    displayName: 'itembanner';
  };
  attributes: {
    index: Attribute.String;
    url: Attribute.String;
    image: Attribute.Media;
  };
}

export interface FooterItemContactHot extends Schema.Component {
  collectionName: 'components_footer_item_contact_hots';
  info: {
    displayName: 'contactHot';
    icon: 'bell';
    description: '';
  };
  attributes: {
    phoneNumber: Attribute.String;
    name: Attribute.String;
    variant: Attribute.String;
  };
}

export interface FooterItemFooter extends Schema.Component {
  collectionName: 'components_footer_item_footers';
  info: {
    displayName: 'footer';
  };
  attributes: {
    title: Attribute.String;
    type: Attribute.String;
    description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    menu: Attribute.Relation<
      'footer-item.footer',
      'oneToOne',
      'api::menu.menu'
    >;
  };
}

export interface HomepageShelves extends Schema.Component {
  collectionName: 'components_homepage_shelves';
  info: {
    displayName: 'shelves';
    icon: 'apps';
  };
  attributes: {
    enable: Attribute.Boolean;
    title: Attribute.String;
    category_product: Attribute.Relation<
      'homepage.shelves',
      'oneToOne',
      'api::category.category'
    >;
    col: Attribute.Integer;
    row: Attribute.Integer;
  };
}

export interface MenuItemMenu extends Schema.Component {
  collectionName: 'components_menu_item_menus';
  info: {
    displayName: 'Item-Menu';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    url: Attribute.String;
    index: Attribute.String;
    target: Attribute.String;
  };
}

export interface MenuItemsidebar extends Schema.Component {
  collectionName: 'components_menu_itemsidebars';
  info: {
    displayName: 'itemsidebar';
  };
  attributes: {
    index: Attribute.String;
    menu: Attribute.Relation<'menu.itemsidebar', 'oneToOne', 'api::menu.menu'>;
  };
}

export interface ProductAttribute extends Schema.Component {
  collectionName: 'components_product_attributes';
  info: {
    displayName: 'Attribute';
  };
  attributes: {
    name: Attribute.String;
    value: Attribute.Component<'product.value', true>;
  };
}

export interface ProductPriceWhole extends Schema.Component {
  collectionName: 'components_product_price_wholes';
  info: {
    displayName: 'priceWhole';
    description: '';
  };
  attributes: {
    type: Attribute.String;
    price: Attribute.String;
  };
}

export interface ProductTagProduct extends Schema.Component {
  collectionName: 'components_product_tag_products';
  info: {
    displayName: 'tagProduct';
    icon: 'heart';
  };
  attributes: {
    variant: Attribute.String;
    content: Attribute.String;
  };
}

export interface ProductValue extends Schema.Component {
  collectionName: 'components_product_values';
  info: {
    displayName: 'value';
  };
  attributes: {
    name: Attribute.String;
  };
}

export interface TableProductProducts extends Schema.Component {
  collectionName: 'components_table_product_products';
  info: {
    displayName: 'products';
  };
  attributes: {
    name: Attribute.String;
    price: Attribute.Integer;
    product: Attribute.Relation<
      'table-product.products',
      'oneToOne',
      'api::product.product'
    >;
    image: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'banner.itembanner': BannerItembanner;
      'footer-item.contact-hot': FooterItemContactHot;
      'footer-item.footer': FooterItemFooter;
      'homepage.shelves': HomepageShelves;
      'menu.item-menu': MenuItemMenu;
      'menu.itemsidebar': MenuItemsidebar;
      'product.attribute': ProductAttribute;
      'product.price-whole': ProductPriceWhole;
      'product.tag-product': ProductTagProduct;
      'product.value': ProductValue;
      'table-product.products': TableProductProducts;
    }
  }
}
