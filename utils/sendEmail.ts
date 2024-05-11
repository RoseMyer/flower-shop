"use server"

import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
import { AwsCredentialIdentity } from "@aws-sdk/types";

const sesClient = new SESClient({
    region: 'us-east-2',
    credentials: {
        accessKeyId: process.env.AKID,
        secretAccessKey: process.env.SAKID
      }
});

export const sendEmail = async (customerData: any, orderData: any) => {
    const params = {
        Source: 'rosesmyer@icloud.com',
        Destination: {
            ToAddresses: [customerData.email]
        },
        Message: {
            Subject: {
                Data: 'Order Confirmation'
            },
            Body: {
                Text: {
                    Data: `Welcome to the Braford family ${customerData.first_name} ${customerData.last_name}!\n\nYour purchase totaling ${orderData.total} is currently being processed and will be ready for pickup within 24 hours.\n\nWe will contact you when everything is prepared for you.\n\nPlease present you confirmation number (${orderData.customer_id}) to the attendant upon arrival.\n\nWe look forward to serving all your floral needs.`
                }
            }
        }
    };

    const command = new SendEmailCommand(params);

    try {
        const response = await sesClient.send(command);
        console.log("Email sent:", response);
        return true;
    } catch (error) {
        console.error("Failed to send email:", error);
        return false;
    }
};
