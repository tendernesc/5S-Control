import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Проверка на заполненность всех полей
    if (!formData.name || !formData.email || !formData.message) {
      alert("Пожалуйста, заполните все поля.");
      return;
    }

    // Логирование данных в консоль
    console.log("Submitted data:", JSON.stringify(formData, null, 2));

    // Очистка полей
    setFormData({
      name: "",
      email: "",
      message: "",
    });

    // Показ уведомления
    alert("Ваше сообщение успешно отправлено!");
  };

  return (
    <>
      <Header />
      <div className="contact">
        <div className="contact-wrapper">
          <div className="contact-wrapper__text">
            <h2 className="contact-wrapper__text_info">we look forward to hearing from you</h2>
            <h3 className="contact-wrapper__text_abs">
              Our sales managers will respond to your message as soon as possible and help you get started.
            </h3>
          </div>
          <form className="contact-wrapper__input" onSubmit={handleSubmit}>
            <Input
              title=""
              isDisabled={false}
              type="text"
              placeholder="Your name"
              onChange={handleChange}
              name="name"
              value={formData.name} // Привязка значения к состоянию
            />
            <Input
              title=""
              isDisabled={false}
              type="email"
              placeholder="Your email"
              onChange={handleChange}
              name="email"
              value={formData.email} // Привязка значения к состоянию
            />
            <Input
              title=""
              isDisabled={false}
              type="text"
              placeholder="Your message"
              onChange={handleChange}
              name="message"
              value={formData.message} // Привязка значения к состоянию
            />
            <Button isDisabled={false} typeButton="submit">
              Submit
            </Button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;

