
const {stripe} = require('stripe')(process.env.STRIPE_SECRET_KEY);
'use strict';
const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController("api::order.order", ({ strapi }) => ({
  async create(ctx) {
    const user = ctx.state.user;
    if (!user) {
      return ctx.unauthorized("You are not authorized!");
    }
    const { address, amount, products, token, city, state } =
      ctx.request.body.data;

      const lineItems = await Promise.all(
        products.map(async (product) => {
          const item = await strapi.service("api::product.product").findOne(product.productId);
          return {
            price_data: {
              currency: 'usd',
              product_data: {
                name: item.title,
                images: [item.image]
              },
              unit_amount: item.price * 100,
            },
            quantity: product.quantity,
          };
        })
      );

    try {
        const session = stripe.checkout.sessions.create({
            mode: 'payment',
            payment_method_types: ['card'],
           line_items: lineItems,
           shipping_address_collection: {
            allowed_countries: ['US'],
        }
        })
        await strapi.service("api::order.order").create({
            products,strapiId: session.id, user: ctx.state.user.id, token:ctx.state.user.token
        })
    //   // Charge the customer
    //   await stripe.charges.create({
    //     amount: amount,
    //     currency: "usd",
    //     description: `Order ${new Date()} by ${ctx.state.user.id}`,
    //     source: token,
    //   });

    //   // Create the order
    //   const order = await strapi.service("api::order.order").create({
    //     data: {
    //       amount,
    //       address,
    //       products,
    //       city,
    //       state,
    //       token,
    //       user: ctx.state.user.id,
    //     },
    //   });
      return order;
    } catch (err) {
      // return 500 error
      console.log("err", err);
      ctx.response.status = 500;
      return {
        error: { message: "There was a problem creating the charge" },
        address,
        amount,
        products,
        token,
        city,
        state,
      };
    }
  },
}));