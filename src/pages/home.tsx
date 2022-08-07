import { useContext, useEffect } from "react"
import { Can } from "../components/Can";
import { AuthContext } from "../contexts/AuthContext"
import { setupApiClient } from "../services/api";
import { api } from "../services/apiClient";
import { withSSRAuth } from "../utils/withSSRAuth";

export default function Home() {
  const { user, signOut } = useContext(AuthContext);


  useEffect(() => {
    api.get('/me')
      .then(response => console.log(response))
      .catch(err => console.log(err));
  }, [])

  return (
    <div>
      <h1>Home</h1>

      <button onClick={signOut}>Sign Out</button>

      <Can permissions={['metrics.list']}>
        <div>
          Métricas
        </div>
      </Can>
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