import { useContext, useEffect } from "react"
import { AuthContext } from "../contexts/AuthContext"
import { setupApiClient } from "../services/api";
import { api } from "../services/apiClient";
import { withSSRAuth } from "../utils/withSSRAuth";

export default function Home() {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    api.get('/me')
      .then(response => console.log(response))
      .catch(err => console.log(err));
  }, [])

  return (
    <div>
      <h1>Home</h1>
      <br />
      <span>{user?.email}</span>
    </div>
  )
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
  const apiClient = setupApiClient(ctx);
  const response = await apiClient.get("/me");

  return {
    props: {}
  }
})