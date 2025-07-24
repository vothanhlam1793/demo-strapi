'use strict';

/**
 * tag-product service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::tag-product.tag-product');
