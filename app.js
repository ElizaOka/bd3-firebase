/* REenderização da lista de dados*/
const listBook = document.querySelector('#book-list');

function renderList(doc){
    let li= document.createElement('li');
    let autor= document.createElement('span');
    let titulo= document.createElement('span');
    let excluir = document.createElement('div');

    li.setAttribute('data-id', doc.titulo)
    autor.textContent =doc.autor;
    titulo.textContent =doc.titulo;

    li.appendChild(titulo);
    li.appendChild(autor);

    listBook.appendChild(li);

}

/* lista da coleção firestore*/

db.collection('libri-collection')
    .get()
    .then((snapshot)=>{
        // console.log(snapshot.docs)
        snapshot.docs.forEach(
            doc =>{
                console.log(doc.data())
                renderList(doc.data())
            }

        )
    });
    /*inserção de dados*/
    const form = document.querySelector('#add-book-form');

    form.addEventListener('submit', (event)=>{
        event.preventDefault();
        // alert('Formulario funcionando')
        db.collection('libri-collection').add({
            autor: form.autor.value,
            titulo: form.titulo.value
        }).then(()=>{
            form.autor.value = '';
            form.titulo.value = '';
            window.location.reload();
        });
    });
