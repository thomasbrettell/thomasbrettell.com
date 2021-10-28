const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');

const transporter = nodemailer.createTransport(
  sendgridTransport({
    auth: {
      api_key:
      process.env.NEXT_PUBLIC_SENDGRID_API_KEY,
    },
  })
);

const handler = (req, res) => {
  if (req.method !== 'POST') {
    return;
  }
  const {email, enquiry} = req.body;

  return transporter
    .sendMail({
      to: 'thomas.a.brettell@gmail.com',
      from: 'thomas.a.brettell@gmail.com',
      subject: 'Enquiry from portfolio',
      html: `
        <p>${email}</p>
        <p>${enquiry}</p>
      `,
    })
    .then((result) => {
      return res.status(200).json(result);
    })
    .catch((err) => {
      return res.status(400).json(err);
    });
};

export default handler;
