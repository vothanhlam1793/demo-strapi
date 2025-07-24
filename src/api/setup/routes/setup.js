'use strict';

/**
 * setup router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::setup.setup');
