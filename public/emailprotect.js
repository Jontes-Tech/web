const emails = document.querySelectorAll("[data-email]");
if (!emails)
  throw new Error({
    message: "No email found",
    code: "NO_EMAIL_FOUND",
    issuer: "Mail Protector",
  });
if (emails.length > 1)
  throw new Error({
    message: "Multiple emails found",
    code: "MULTIPLE_EMAILS_FOUND",
    issuer: "Mail Protector",
  });
const email = emails[0];
const emailText = email.getAttribute("data-email");

const interval = setInterval(() => {
  const random = Math.random().toString(36).substring(2, 12);
  email.innerText = random
}, 100);

(async() => {
    const res = await fetch("https://api.jontes.page?email=" + emailText);
    email.innerText = await res.text()
    email.setAttribute("href", "mailto:" + email.innerText)
    clearInterval(interval);
})()