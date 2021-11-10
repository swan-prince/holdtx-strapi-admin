// 'use strict';
const { sanitizeEntity } = require('strapi-utils');

module.exports = {
  async find(ctx) {
    let entities;
    if (ctx.query._q) {
      entities = await strapi.services.categories.search(ctx.query);
    } else {
      entities = await strapi.services.categories.find(ctx.query);
    }   
    // return entities.map(entity => sanitizeEntity(entity, { model: strapi.models.categories }));
    return entities.map(entity => {
      let category = sanitizeEntity(entity, {
        model: strapi.models.categories
      })
      if (category.blogs) {
        category.blogs = category.blogs.length;
      }
      return category;
    })
  }
};
