function validateForm(formData, registeredUsers) {
  let nameFieldsArray = new Array("name", "lastname", "email", "password");

  if (!nameFieldsArray.every((field) => formData[field])) {
    throw new Error(`Faltan los siguientes campos: 
      ${nameFieldsArray.filter((data) => !formData[data]).join(", ")}`);
  }

  let duplicatedEmail = registeredUsers.find(
    (user) => user.email === formData.email
  );

  if (duplicatedEmail) {
    throw new Error(duplicatedEmail.email);
  }

  registeredUsers.push({
    name: formData.name,
    lastname: formData.lastname,
    email: formData.email,
  });

  return `Tu registro fue exitoso ${formData.name} ${formData.lastname}`;
}

const formData = {
  name: "Juan",
  lastname: "Perez",
  email: "juan@example.com",
  password: "123456",
};

const registeredUsers = [
  { name: "Pedro", lastname: "Gomez", email: "pedro@example.com" },
  { name: "Maria", lastname: "Garcia", email: "maria@example.com" },
];

console.log(validateForm(formData, registeredUsers));
