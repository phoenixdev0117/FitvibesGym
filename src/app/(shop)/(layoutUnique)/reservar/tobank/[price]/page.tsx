"use client";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";
interface Props {
  params: {
    price: string;
  };
}
export default async function Home({ params }: Props) {
  const { price } = params;
  const infos = price.split('%26');
  const totalprice = infos[0];
  const name = decodeURIComponent(infos[1]) + " " + decodeURIComponent(infos[2]);
  const email = decodeURIComponent(infos[3]);
  const date = decodeURIComponent(infos[4]);
  const classNum = parseInt(infos[5]) + 1;
  const seatsList = decodeURIComponent(infos[6]);
  const gymClassName = decodeURIComponent(infos[7]);

  console.log("====================================");
  console.log(infos);
  console.log(date);
  console.log("====================================");

  const idTransaccion = uuidv4();
  const router = useRouter();
  const https = require("https");
  const querystring = require("querystring");
  const request = async () => {
    const path = "/v1/checkouts";
    const data = querystring.stringify({
      entityId: process.env.NEXT_PUBLIC_ENTITYID,
      amount: parseInt(totalprice).toFixed(2),
      currency: "MXN",
      paymentType: "DB",
      //'testMode': 'EXTERNAL',
      descriptor: process.env.NEXT_PUBLIC_IDDESCRIPTION,
      merchantTransactionId: idTransaccion,
      "billing.country": "MX",
      "shipping.country": "MX",
    });
    const options = {
      port: 443,
      host: process.env.NEXT_PUBLIC_URL_PAYMENT,
      path: path,
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Content-Length": data.length,
        Authorization: `${process.env.NEXT_PUBLIC_TOKEN_PAYMENT}`,
      },
    };
    return new Promise((resolve, reject) => {
      const postRequest = https.request(options, function (res: any) {
        const buf: any = [];
        res.on("data", (chunk: any) => {
          buf.push(Buffer.from(chunk));
        });
        res.on("end", () => {
          const jsonString = Buffer.concat(buf).toString("utf8");
          try {
            resolve(JSON.parse(jsonString));
          } catch (error) {
            reject(error);
          }
        });
      });
      postRequest.on("error", reject);
      postRequest.write(data);
      postRequest.end();
    });
  };

  useEffect(() => {
    request()
      .then((e: any) => {
        const info = {
          ID: e["id"],
          bookclassinfos: price,
        };
        const queryString = new URLSearchParams(info).toString();
        router.push(
          `${process.env.NEXT_PUBLIC_APP_URL}/paymentconfirm?${queryString}`
        );
      })
      .catch(console.error);
  }, []);
  return (
    <div className="z-40 flex h-screen w-full items-center justify-center rounded-xl shadow-md">
      <div className="h-12 w-12 rounded-full bg-[rgb(197,23,209)]">
        <div className="h-12 w-12 animate-ping rounded-full bg-[rgb(37,146,217)]">
          <div className="h-12 w-12 animate-ping rounded-full bg-[rgb(197,23,209)]">
            <div className="h-12 w-12 animate-ping rounded-full bg-[rgb(37,146,217)]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
