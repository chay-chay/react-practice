

const Button = ({handleClick, handleClickBoo, count, countBoo}) => {
    return(
        <>
        <div>
            <button onClick={handleClick}> Click Me!</button>
            {count}
          </div>

          <button onClick={handleClickBoo}> Click Me!</button>
          {countBoo &&  'Hi'}
          </>
    )
}

export default Button;