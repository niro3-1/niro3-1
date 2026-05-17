// Code to verify Stripe-Signature header in webhook handler

const crypto = require('crypto');

function verifyStripeSignature(req, res, next) {
    const signature = req.headers['stripe-signature'];
    const payload = JSON.stringify(req.body);
    const secret = process.env.STRIPE_WEBHOOK_SECRET;

    const expectedSignature = crypto
        .createHmac('sha256', secret)
        .update(payload, 'utf8')
        .digest('hex');

    if (signature !== expectedSignature) {
        return res.status(400).send('Invalid signature');
    }
    next();
}