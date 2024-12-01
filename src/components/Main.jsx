import { useState, useEffect } from "react"

export default function Main() {
    const [memeArray, setMemeArray] = useState([])
    const [meme, setMeme] = useState({
        topText: "One does not simply",
        bottomText:"Walk into Mordor",
        imgUrl:"http://i.imgflip.com/1bij.jpg"
    })

    useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
            .then(response => response.json())
            .then(respObj => setMemeArray(respObj.data.memes))
    }, [])

    function getRandomImage(){
        const imgIndex = Math.floor(Math.random() * memeArray.length)
        console.log(memeArray[imgIndex])
        setMeme(prevMeme => ({
            ...prevMeme,
            imgUrl: memeArray[imgIndex].url
        }))
    }

    function handleChange(event){
        const {value, name} = event.currentTarget // destructuring to get the value of the input element
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <main>
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        onChange={handleChange}
                        value={meme.topText}
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                        onChange={handleChange}
                        value={meme.bottomTextText}
                    />
                </label>
                <button onClick={getRandomImage}>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.imgUrl} />
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
        </main>
    )
}