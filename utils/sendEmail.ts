import AWS from 'aws-sdk';

// Configure the AWS region and credentials
AWS.config.update({ region: 'us-east-2' }); // Make sure to use the correct region

const ses = new AWS.SES();

export const sendEmail = async (customerData: any, orderData: any) => {
    const email_address = customerData.email
    console.log('email address: ', email_address)
  const params = {
    Source: 'rosesmyer@icloud.com',  // Use your verified email address
    Destination: {
      ToAddresses: [email_address]
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

  try {
    const response = await ses.sendEmail(params).promise();
    console.log("Email sent:", response);
    return true;
  } catch (error) {
    console.error("Failed to send email:", error);
    return false;
  }
};
