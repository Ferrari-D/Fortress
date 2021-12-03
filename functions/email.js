const postmark = require('postmark');

// eslint-disable-next-line func-names
exports.handler = async function (event) {
  const client = new postmark.ServerClient('021dea12-16d9-4aad-ab3b-af85cb5954c2');
  const {
    name, email, subject, message,
  } = JSON.parse(event.body);

  return client.sendEmail({
    'From': 'wiretowirellc@wiretowirellc.com',
    'To': 'wiretowirellc@wiretowirellc.com, christophermcqueen@wiretowirellc.com',
    'Subject': 'New Inquiry from Wiretowire.com',
    'TextBody': `
      ${name} sent a new message from wiretowire.com!
      email: ${email}
      subject: ${subject}
      message: ${message}
    `
  }, (err) => {
    if (err) {
      return {
        statusCode: 500,
        body: JSON.stringify({
          message: `Internal Server Error: ${err}`,
        }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Message sent successfully!',
      }),
    };
  });
};
