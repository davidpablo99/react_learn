import Profile from "./components/Profile";
import Avatar from "./assets/avatar.png";

export default function App(){
  return(
    <div className="app">
      <Profile 
        avatar= {Avatar}
        name="David Queiroz"
        bio="Full-stack javascript developer at Acme Inc."
        email = "davidpablo99@gmail.com"
        phone = "(69) 99372-9118"
        githubUrl = "https://github.com/davidpablo99"
        linkedinUrl = "https://www.linkedin.com/in/davidqrz/"
        twitterUrl = "https://www.linkedin.com/in/davidqrz/"
      />
    </div>
    
  )
}