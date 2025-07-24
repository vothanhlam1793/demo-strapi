'use strict';

/**
 * setup controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::setup.setup');
