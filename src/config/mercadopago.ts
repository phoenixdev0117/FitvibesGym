import { MercadoPagoConfig} from "mercadopago";

export const clientMp = new MercadoPagoConfig({
    accessToken: process.env.NEXT_ACCESS_TOKEN_MP!,
  });