import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const [isRegistering, setIsRegistering] = useState(false); // Zustand für Login oder Register
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmitLogin = async (data) => {
    // Hier API-Aufruf für Login einfügen
    console.log("Login:", data);
    navigate("/rooms"); // Weiterleitung zur nächsten Seite nach dem Login
  };

  const onSubmitRegister = async (data) => {
    // Hier API-Aufruf für Registrierung einfügen
    console.log("Register:", data);
    navigate("/login"); // Weiterleitung zur Login-Seite nach erfolgreicher Registrierung
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h2>{isRegistering ? "Registrierung" : "Anmeldung"}</h2>

      <form
        onSubmit={handleSubmit(isRegistering ? onSubmitRegister : onSubmitLogin)}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "300px",
        }}
      >
        {/* E-Mail Eingabefeld nur bei Registrierung */}
        {isRegistering && (
          <input
            {...register("email")}
            type="email"
            placeholder="E-Mail"
            required
            style={{
              margin: "10px 0",
              padding: "10px",
              width: "100%",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
        )}

        <input
          {...register("username")}
          placeholder="Benutzername"
          required
          style={{
            margin: "10px 0",
            padding: "10px",
            width: "100%",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <input
          {...register("password")}
          type="password"
          placeholder="Passwort"
          required
          style={{
            margin: "10px 0",
            padding: "10px",
            width: "100%",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        {isRegistering && (
          <input
            {...register("confirmPassword")}
            type="password"
            placeholder="Passwort wiederholen"
            required
            style={{
              margin: "10px 0",
              padding: "10px",
              width: "100%",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
        )}
        <button
          type="submit"
          style={{
            backgroundColor: "#007BFF",
            color: "#fff",
            border: "none",
            padding: "10px 15px",
            borderRadius: "5px",
            cursor: "pointer",
            marginTop: "10px",
          }}
        >
          {isRegistering ? "Registrieren" : "Anmelden"}
        </button>
      </form>

      <button
        type="button"
        style={{
          backgroundColor: "transparent",
          color: "#007BFF",
          border: "none",
          padding: "10px 15px",
          borderRadius: "5px",
          cursor: "pointer",
          marginTop: "10px",
        }}
        onClick={() => setIsRegistering(!isRegistering)} // Toggle zwischen Login und Register
      >
        {isRegistering ? "Schon registriert? Anmelden" : "Noch keinen Account? Registrieren"}
      </button>
    </div>
  );
};

export default AuthPage;
