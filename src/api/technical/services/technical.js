'use strict';

/**
 * technical service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::technical.technical');
