function sendEmail(email, subject, body) {
  return new Promise((resolve, reject) => {
    if (!email || !subject || !body) {
      reject(new Error("Hacen falta campos para enviar el email"));
    } else {
      window.setTimeout(() => {
        resolve({
          email: email,
          subject: subject,
          body: body,
        });
      }, 2000);
    }
  });
}

// sendEmail("test@mail.com", "Nuevo reto", "Únete a los 30 días de JS").then(
//   (result) => console.log(result)
// );

// sendEmail("test@mail.com", "", "Únete a los 30 días de JS")
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));
