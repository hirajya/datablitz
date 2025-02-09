import connectToDatabase from '../../../../lib/db';
import Order from '../../../../models/order';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { orderId } = req.body;

  await connectToDatabase();

  try {
    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }

    if (order.status !== 'To Ship') {
      return res.status(400).json({ error: 'Only orders with status "To Ship" can be cancelled' });
    }

    order.status = 'Cancelled';
    await order.save();

    res.status(200).json({ message: 'Order cancelled successfully' });
  } catch (error) {
    console.error('Failed to cancel order:', error.message);
    console.error('Error stack:', error.stack);
    res.status(500).json({ error: 'Failed to cancel order', details: error.message });
  }
}
