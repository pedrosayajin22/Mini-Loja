const items = [
    {
        id: 0,
        nome: 'Camiseta',
        img: "camiseta.jpg",
        quantidade: 0
    },
    {
        id: 1,
        nome: 'Short',
        img: "short.png",
        quantidade: 0
    },
    {
        id: 2,
        nome: 'Sapato',
        img: "tenis.png",
        quantidade: 0
    },
]

function inicializar() {
    let containerProdutos = document.getElementById("produtos");
    items.map((val) => {
        containerProdutos.innerHTML += `
       
        <div class="slider">
        <img src="`+ val.img + `"/>
        <p>`+ val.nome + `</p>
        <a key="`+ val.id + `" href="#">Adicionar ao carrinho<a>
        </div>
        
        
        `;
    })
}
inicializar()


let links = document.getElementsByTagName("a");
for (let index = 0; index < links.length; index++) {
    links[index].addEventListener("click", function () {
        let key = this.getAttribute("key");
        items[key].quantidade++;
        atualizarCarinho();
        return false;
    })
}
function atualizarCarinho() {
    let containerCarrinho = document.getElementById("carrinho");
    containerCarrinho.innerHTML="";
    items.map((val) => {
        if (val.quantidade > 0) {
            containerCarrinho.innerHTML += `
            <p>`+val.nome+` | quantidade : `+val.quantidade+`
            <hr>
        
        `;
        }
    })
}
$('#AbrirCarrinho').click(function(){
    $('.abaCarrinho').css('display', 'block')
})

$('#fechar').click(function(){
    $('.abaCarrinho').css('display', 'none')
})


