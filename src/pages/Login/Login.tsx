import { useEffect, useState } from "react";
import "./Login.css";
import { api } from "../../services/api";
import Loading from "../../components/Loading/Loading";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setToken(token);
    }
  }, []);

  async function handleLogin() {
    const response = await api
      .post("/login", {
        email,
        password,
      })
      .then((response) => {
        if (response.status === 200) {
          localStorage.setItem("token", response.data.access_token);
          setToken(response.data.access_token);
          setLoading(false);
          window.location.href = "/home";
        } else {
          alert("Erro ao fazer login");
          setLoading(false);
        }
      })
      .catch((error) => {
        alert("Erro ao fazer login");
        console.log(error);
      });
  }

  return (
    <>
      <div className="main">
        <body>
          <div className="login">
            <form>
              <label>Login</label>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => {
                  setLoading(true);
                  handleLogin();
                }}
              >
                Login
              </button>
            </form>
          </div>
        </body>
      </div>
      <Loading loading={loading} />
    </>
  );
}

export default Login;
