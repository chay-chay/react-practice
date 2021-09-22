import { useState, useEffect } from 'react'


const Images = ({imageArr}) => {
    const [index, setIndex] = useState(0)
    const [imageUrl, setImageUrl] = useState([])
    const [isLoading, setIsLoading]= useState(true)


    let image = imageArr.map((img) => {
        return <img src={img} key={img} alt={img}/>
    })

    let imageList = imageUrl.map((img) => {
        return <img src={img.url} key={img.id} alt={img.title} />
    }).slice(0, 5)
    console.log(imageList)

    useEffect (() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then (data => setImageUrl(data))
        setIsLoading(false)

       
    }, [])

    const handlePrevButton = () => {
        if ( index === 0) {
            setIndex(image.length-1)
        } else {
            setIndex((prev) => prev -1)
        }
    }

    const handleNextbutton = () => {
        if (index === image.length-1) {
            setIndex(0)
        } else {
            setIndex((prev) => {
                return prev + 1;
            })

        }
    };


    return (
        <>
        {/* {image[index]} */}
        {isLoading ? (<h2>Loading...</h2>) : imageList[index]}
        <button onClick={handlePrevButton}>Prev</button>
        {index}
        <button onClick={handleNextbutton}>Next</button>
        </>
    )
}

export default Images;