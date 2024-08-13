const nodemailer = require("nodemailer");

const sendEmail = async (options) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "aymaanpathan5@gmail.com",
      pass: "shke aviz whyw uhwd",
    },
  });

  const mailOption = {
    from: '"Mindup.com" <no-reply@Mindup.com>',
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  try {
    await transporter.sendMail(mailOption);
  } catch (error) {}
};

const sendNewsLetter = async (req, res) => {
  try {
    const { email } = req.body;
    const emailSplit = email.split("@");
    const name = emailSplit[0];
    if (!email || !name) {
      return res.status(400).json({
        status: "Failed",
        message: "Email and name are required",
      });
    }

    const subject = "Welcome! You’re Subscribed to MindUp Updates";
    const message = `
Hi ${name},

Congratulations and Welcome!

We are thrilled to have you join the MindUp community! Thank you for subscribing to our newsletter. We’re excited to bring you the latest updates on our newest courses and learning opportunities.

Here’s What You Can Look Forward To:
- Early Access to New Courses: Be among the first to know when new courses are available.
- Exclusive Learning Tips and Resources: Receive special content designed to enhance your learning experience.
- Behind-the-Scenes Insights: Get a closer look at how our courses are developed and meet the instructors.
- Latest News and Updates: Stay informed about our platform’s latest features, events, and more.

Stay Tuned!
Our team is dedicated to helping you achieve your learning goals. Expect to see exciting updates and exclusive content in your inbox soon.

Got Questions?
If you have any questions, feedback, or just want to say hello, feel free to reach out to us at [Your Contact Information]. We’re always here to support you on your learning journey.

Thank You!
Thank you once again for subscribing. We’re excited to have you with us and can’t wait to share our latest courses and resources with you.`;

    await sendEmail({ email, subject, message });

    res.status(200).json({
      status: "Success",
      message: "Email sent successfully",
      data: { email, subject, message },
    });
  } catch (error) {
    res.status(500).json({
      status: "Error",
      message: "Error sending email",
      error: error.message,
    });
  }
};

const sendContactUsMessage = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        status: "Failed",
        message: "Name, email, subject, and message are required",
      });
    }

    const emailMessage = `
Hi From ${name},

${message}


To MindUp Team`;

    await sendEmail({ email, subject, message: emailMessage });

    res.status(200).json({
      status: "Success",
      message: "Email sent successfully",
      data: { name, email, subject, message: emailMessage },
    });
  } catch (error) {
    res.status(500).json({
      status: "Error",
      message: "Error sending email",
      error: error.message,
    });
  }
};

module.exports = { sendEmail, sendNewsLetter, sendContactUsMessage };
