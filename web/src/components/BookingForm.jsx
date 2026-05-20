import { useState } from "react";

function BookingForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.phone ||
      !formData.email
    ) {
      alert("Заповніть всі поля");
      return;
    }

    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Бронювання</h3>

      <input
        type="text"
        name="name"
        placeholder="Ім’я"
        value={formData.name}
        onChange={handleChange}
        style={styles.input}
      />

      <input
        type="text"
        name="phone"
        placeholder="Телефон"
        value={formData.phone}
        onChange={handleChange}
        style={styles.input}
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        style={styles.input}
      />

      <button type="submit" style={styles.button}>
        Забронювати
      </button>
    </form>
  );
}

const styles = {
  input: {
    display: "block",
    width: "100%",
    marginBottom: "10px",
    padding: "10px",
  },

  button: {
    padding: "10px 20px",
  },
};

export default BookingForm;