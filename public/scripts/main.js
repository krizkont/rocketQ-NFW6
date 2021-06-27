import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

const checkButtons = document.querySelectorAll(".actions a.check")
const deleteButtons = document.querySelectorAll(".actions a.delete")

// Muda os textos e a cor dos botões no modal e depois abre ele.
// captura dados da mensagem (roomId, questionId, slug)
function handleClick(event, check = true) {
    event.preventDefault()
    const text = check ? "Marcar como lida" : "Excluir"
    
    const roomId =  document.querySelector('#room-id').dataset.id
    const questionId = event.target.dataset.id
    const slug = check ? "check" : "delete"
    
    const form = document.querySelector('.modal form')
    form.setAttribute('action', `/question/${roomId}/${questionId}/${slug}`)

    modalTitle.innerHTML=  `${text} esta pergunta`
    modalDescription.innerHTML= `Tem certeza que deseja ${text.toLowerCase()} esta pergunta?`
    modalButton.innerHTML = `Sim, ${text}`
   
    check ? modalButton.classList.remove("red") : modalButton.classList.add("red")

    modal.open()
}

// Escuta os botões dentro da classe .actions, se ouver click dispara handleClick e abre o modal.
checkButtons.forEach(button => { 
    button.addEventListener("click", handleClick)
})

deleteButtons.forEach(button => { 
    button.addEventListener("click", (event) => handleClick(event, false))
})

