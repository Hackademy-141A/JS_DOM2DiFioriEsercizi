// wrapper
let cardWrapper = document.querySelector('#cardWrapper')

// bottoni
let showContactsBtn = document.querySelector('#showContactsBtn');
let addContactBtn = document.querySelector('#addContactBtn');
let removeContactBtn = document.querySelector('#removeContactBtn');
let searchContactBtn= document.querySelector('#searchContactBtn')


// inputs

let nameInput = document.querySelector('#nameInput')
let numberInput = document.querySelector('#numberInput')



let rubrica = {
    
    contacts : [
        
        {name: 'Chiara', number:33333333},
        {name: 'Mattia', number:33333333},
        {name: 'Mattia', number:33333333},
    ],
    
    
    showContacts : function(array){
        // svuoto array
        cardWrapper.innerHTML='';
        
        // creo div
        //gli do le classi di una colonna
        // lo riempio con la card 
        // lo appendo alla row  
        array.forEach( (contact)=>{
            let div = document.createElement('div');
            div.classList.add('col-12', 'col-lg-8', 'my-3');
            div.innerHTML=`	
            <div class="card-contact bg-purple my-border rounded-4 px-5">
            <p class="pt-3 fs-5">
            ${contact.name}.toLowerCase
            </p>
            
            <p class="pt-3 fs-5">
            ${contact.number}
            </p>
            
            <i class="fa-regular fa-trash-can fa-2x icon"></i>
            
            </div>
            `
            cardWrapper.appendChild(div)
        });
        
        // catturo le icone nelle cards
        let icons = document.querySelectorAll('.icon')
        icons.forEach((icon , i)=> {
            icon.addEventListener( 'click' , ()=>{
                let name = array[i].name;
                this.removeContact(name)
            })
        })
    },
    
    addContact: function(newName, newNumber) {
        this.contacts.push(
            {name : newName, number : newNumber}
            )
            this.showContacts(this.contacts);
        },
        
        removeContact: function(removedName){
            
            let names =this.contacts.map( (contact) => contact.name.toLowerCase());
            let index =names.indexOf(removedName.toLocaleLowerCase())

            if (index > -1) {
                this.contacts.splice(index, 1);
                this.showContacts(this.contacts);
                showContactsBtn.innerHTML="Nascondi Contatti";
            }else{
                alert('come faccio a elimarlo se non ce')
            }
        },
        






        searchContact : function(searchedName){
            let filtered = this.contacts.filter( (contact)=> contact.name.toLowerCase() === searchedName.toLowerCase())
            if(filtered.length > 0){
                this.showContacts(filtered);
                
                showContactsBtn.innerHTML="Nascondi Contatti";
                confirm = true;
            }else{
                alert(`${nameInput.value} non ti ha dato il numero`);
                nameInput.value=''
            }
        }
    }
    


    
    
    
    
    
    
    // variabile appoggio
    let confirm = false;
    
    // evento per mostrare i contatti 
    showContactsBtn.addEventListener( 'click', ()=>{
        
        if (confirm == false) {
            rubrica.showContacts(rubrica.contacts);
            confirm = true;
            showContactsBtn.innerHTML="Nascondi Contatti";
        } else {
            cardWrapper.innerHTML = ``;
            confirm = false;
            showContactsBtn.innerHTML="Mostra Contatti";
        }
        
    } );
    

    addContactBtn.addEventListener( 'click', ()=>{
    
        if(nameInput.value != '' && numberInput.value != '' && numberInput.value.length == 10){
            
            confirm = true;
            rubrica.addContact(nameInput.value, numberInput.value);
            showContactsBtn.innerHTML="Nascondi Contatti";
    
            //svuoto i campi input
            nameInput.value = '';
            numberInput.value = '';
        } else {
            alert('Attenzione, devi inserire un nome ed un numero valido!')
        }
    
    })



    
    //Evento per rimuovere un contatto al click del bottone.
    removeContactBtn.addEventListener( 'click', ()=>{
        confirm = true;
        rubrica.removeContact(nameInput.value)
        nameInput.value = '';
    } )
    
    
    
    //evento per cercare un contatto al click del bottone.
    searchContactBtn.addEventListener('click', ()=> {

        nameInput.value = '';
        rubrica.searchContact(nameInput.value && numberInput.value);

    })



