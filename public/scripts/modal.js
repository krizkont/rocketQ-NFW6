export default function Modal(){

    const cancelButton = document.querySelector('.button.cancel')
    const modalWrapper = document.querySelector('.modal-wrapper')

    cancelButton.addEventListener('click', close)
    
    function open(){
        //Atribui a classe 'active' na .modal-wrapper
        modalWrapper.classList.add("active")
    };
    function close(){
        //Remove a classe 'active' da modal
        modalWrapper.classList.remove("active")
    };

    return{
        open,
        close
    }


}