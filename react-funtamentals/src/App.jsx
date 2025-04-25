export default function App(){
  const tech = "React"
  const status = false
  return (
    <div>
      <h1>{tech} is awesome</h1>
      <h2>Current status: {status ? "ON" : "OFF"}</h2>
    </div>
  )
}