import pepe from "../assets/pepe.png"

export default function Header() {
    return (
        <header className="header">
            <img 
                src={pepe} 
            />
            <h1>Meme Generator</h1>
        </header>
    )
}