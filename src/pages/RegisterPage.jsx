import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import './RegisterPage.css';

const RegisterPage = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, setError, formState: { errors } } = useForm();

  // Passwortvalidierung (mindestens 6 Zeichen, Groß- und Kleinbuchstaben, Sonderzeichen)
  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{6,}$/;
    return passwordRegex.test(password);
  };

  const onSubmit = async (data) => {
    if (!validatePassword(data.password)) {
      setError("password", {
        type: "manual",
        message: "Das Passwort muss mindestens 6 Zeichen, einen Großbuchstaben, einen Kleinbuchstaben und ein Sonderzeichen enthalten.",
      });
      return;
    }

    if (data.password !== data.confirmPassword) {
      setError("confirmPassword", {
        type: "manual",
        message: "Die Passwörter stimmen nicht überein.",
      });
      return;
    }

    console.log("Registrierung:", data);
    // Nach erfolgreicher Registrierung kannst du den Benutzer weiterleiten
    navigate("/danke");
  };

  return (
    <div className="register-page">
      <h2>Registrierung</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="register-form">
        <input
          {...register("email", { required: "E-Mail ist erforderlich" })}
          type="email"
          placeholder="E-Mail"
          className="input-field"
        />
        {errors.email && <p className="error-message">{errors.email.message}</p>}

        <input
          {...register("username", { required: "Benutzername ist erforderlich" })}
          placeholder="Benutzername"
          className="input-field"
        />

        <input
          {...register("password", { required: "Passwort ist erforderlich" })}
          type="password"
          placeholder="Passwort"
          className="input-field"
        />
        
        <input
          {...register("confirmPassword", { required: "Passwortwiederholung ist erforderlich" })}
          type="password"
          placeholder="Passwort wiederholen"
          className="input-field"
        />

        {errors.password && <p className="error-message">{errors.password.message}</p>}
        {errors.confirmPassword && <p className="error-message">{errors.confirmPassword.message}</p>}

        <button type="submit" className="submit-button">Registrieren</button>
      </form>

      <button
        type="button"
        className="back-button"
        onClick={() => navigate("/login")}
      >
        Schon registriert? Anmelden
      </button>
    </div>
  );
};

export default RegisterPage;

