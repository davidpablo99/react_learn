import Card from "./components/Card";
import swPosterImg from './assets/ba9464145eba8762f6286a3c8387c951.jpg';
import pesbPosterImg from './assets/esb-poster.webp';
import rotjPosterImg from './assets/rotj-poster.webp';

export default function App(){
  return (
    <>
      <Card title="Pôster: Star Wars (1977)" poster={swPosterImg}/>
      <Card title="Pôster: Empire Strikes Back (1980)" poster={pesbPosterImg}/>
      <Card title="Pôster: Return of the Jedi (1983)" poster={rotjPosterImg}/>
    </>
  )
}