import './button.css'
const button = (text) => {
    const button = document.createElement('button')
    button.classList.add('button')
    button.innerText = text
    return button
}
export default button