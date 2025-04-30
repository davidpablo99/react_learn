import StatusTest from "./components/StatusTest/StatusTest"
import Title from "./components/Title/index"
import styles from "./App.module.css"

export default function App(){
  

  return (
    <div className={styles.app}>
      <Title/>
      <StatusTest/>
    </div>
  )
}