import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Template from "../../components/template";
import Input from "../../components/input";

import api from "../../services";

import * as S from "./styles";

interface LoginProps {
  data: {
    token: string;
  };
}

function Login() {
  let history = useNavigate();
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleChange = ({ target }: any) => {
    const { name, value } = target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const response: LoginProps = await api.post("api-auth/", form);
      localStorage.setItem("token", response?.data?.token);
      history("/");
    } catch (err) {}
  };

  return (
    <Template>
      <Input placeholder="E-mail" name="username" onChange={handleChange} />
      <Input
        type="password"
        placeholder="Password"
        style={{ marginTop: "28px" }}
        name="password"
        onChange={handleChange}
      />
      <S.ForgotPassword>
        <a href="/forgot-password">Esqueceu sua senha ?</a>
      </S.ForgotPassword>
      <S.Button onClick={() => handleSubmit()}>Entrar</S.Button>
    </Template>
  );
}

export default Login;
