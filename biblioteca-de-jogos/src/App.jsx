import Game from "./components/Game.jsx"
import NewGameForm from "./components/NewGameForm.jsx"
import useGameCollection from "./hooks/useGameCollection.js"

export default function App(){

  const { games, addGame, removeGame } = useGameCollection()
  return(
    <div id="app">
      <h1>Biblioteca de jogos</h1>
      <NewGameForm addGame={addGame}/>
      <div className="games">
        {games.map((game)=>(
          <Game 
            key={game.id}
            title={game.title}
            cover={game.cover}
            onRemove={()=>removeGame(game.id)}
            />
        ))}
      </div>
    </div>
  )
}