// server.ts
'use server';
import { Pago } from "../../interfaces/pagos.interfaces";

export const getEstadoPago = async (code: string | null): Promise<Pago> => {
  if (!code) {
    throw new Error('Code is required');
  }
  try {
    const response = await fetch(`https://${process.env.NEXT_PUBLIC_URL_PAYMENT}/v1/checkouts/${code}/payment`, {
      method: 'GET',
    });

    const data = await response.json() as Pago;

    return data;
  } catch (error: any) {
    console.error('Error fetching estado de pago:', error);
    throw new Error(`Failed to fetch estado de pago: ${error.message}`);
  }
}