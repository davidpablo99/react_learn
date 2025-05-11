import UserInfo from "./components/UserInfo";
import UserContext from "./context/UseContext";

export default function App(){
  const user = {
    name: "João",
    email: "joao@gmail.com"
  }
  return(
    <UserContext.Provider value={user}>
      <h1>Usando context</h1>
      <UserInfo/>
    </UserContext.Provider>
  )
}