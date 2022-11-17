import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import Template from "../../components/template";
import Input from "../../components/input";

import api from "../../services";

import * as S from "./styles";

interface User {
  name: string;
  email: string;
  phone: string;
  password: string;
}

function RegisterUser() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    confirmPassword: "",
  });
  const history = useNavigate();

  const handleChange = ({ target }: any) => {
    const { name, value } = target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = useCallback(
    async (form: User) => {
      try {
        const body = {
          full_name: form?.name,
          email: form?.email,
          password: form?.password,
          username: form?.email,
        };
        await api.post("core/user/", body);
        alert("Usuário cadastrado com sucesso");
        history("/login");
      } catch (error) {
        alert(error);
      }
    },
    [form]
  );

  return (
    <Template>
      <Input placeholder="Nome" name="name" onChange={handleChange} />
      <Input
        placeholder="(99) 9 99999999"
        name="phone"
        style={{ marginTop: "18px" }}
        onChange={handleChange}
      />
      <Input
        placeholder="E-mail"
        name="email"
        style={{ marginTop: "18px" }}
        onChange={handleChange}
      />
      <Input
        type="password"
        placeholder="Password"
        style={{ marginTop: "18px" }}
        name="password"
        onChange={handleChange}
      />
      <Input
        type="password"
        placeholder="Confirm Password"
        style={{ marginTop: "18px" }}
        name="confirmPassword"
        onChange={handleChange}
      />
      <S.Button onClick={() => handleSubmit(form)}>Cadastrar</S.Button>
    </Template>
  );
}

export default RegisterUser;
