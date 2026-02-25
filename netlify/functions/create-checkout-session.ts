import type { Handler } from "@netlify/functions";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? "", {
  apiVersion: "2025-04-30.basil",
});

interface CheckoutBody {
  priceId: string;
  productName: string;
  amount: number;
  currency: string;
}

const handler: Handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: JSON.stringify({ error: "Method not allowed" }) };
  }

  try {
    const { priceId, productName, amount, currency } =
      JSON.parse(event.body ?? "{}") as CheckoutBody;

    if (!priceId || !amount) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Missing priceId or amount" }),
      };
    }

    const origin = event.headers.origin ?? event.headers.referer ?? "http://localhost:5173";

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency,
            product_data: { name: productName },
            unit_amount: amount,
          },
          quantity: 1,
        },
      ],
      success_url: `${origin}?session_id={CHECKOUT_SESSION_ID}&status=success`,
      cancel_url: `${origin}?status=cancelled`,
      metadata: { priceId },
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ url: session.url, sessionId: session.id }),
    };
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Internal server error";
    console.error("Stripe checkout error:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: message }),
    };
  }
};

export { handler };
