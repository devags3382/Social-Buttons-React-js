const Button = props => {
  const {className, buttonText} = props
  return <button className={`${className}`}>{buttonText}</button>
}

const element = (
  <div class='buttonContainer'>
    <h1>Social Buttons</h1>
    <div className='container'>
      <Button buttonText='Like' className='like-btn' />
      <Button buttonText='Cooment' className='comment-btn' />
      <Button buttonText='Share' className='share-btn' />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
