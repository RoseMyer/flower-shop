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
                    Data: JSON.stringify(orderData)
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
