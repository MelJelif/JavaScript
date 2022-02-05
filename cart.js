let spnCnt = document.querySelector('.spancount')
let cartObj = {}

const productsEl = document.querySelector('.cartTable');
document.querySelectorAll(".featuredItem").forEach(ftrdItm => {ftrdItm.addEventListener('click', event => {
  spnCnt.innerText = Number(spnCnt.innerText)+1
  const nameP = event.target.closest(".featuredItem").children[1].children.item(0).innerText.replace(' ','');
  const price = event.target.closest(".featuredItem").children[1].children.item(2).innerText.replace('$','');
  if(!cartObj.hasOwnProperty(nameP)){     
     cartObj[nameP]={
       nameP: nameP,
       count: 1,
       price: price,
       sumM: price
     }
    productsEl.insertAdjacentHTML("beforeend", `<tr class="${cartObj[nameP].nameP}"><td>${cartObj[nameP].nameP}</td>
    <td>${cartObj[nameP].count}</td><td>${cartObj[nameP].price}$</td><td>${cartObj[nameP].sumM}$</td></tr>`);
    }
    else{
      cartObj[nameP].count =cartObj[nameP].count+1;
      cartObj[nameP].sumM = Number(cartObj[nameP].count)*cartObj[nameP].price;
      for(let prop in cartObj){
     document.querySelector(`.${nameP}`).innerHTML = `<td>${cartObj[prop].nameP}</td>
     <td>${cartObj[prop].count}</td><td>${cartObj[prop].price}$</td><td>${cartObj[prop].sumM}$</td></tr>`;
    }}
     
     
})});
const cartDiv = document.querySelector('.cartDiv')
document.querySelector(".cartIconWrap").addEventListener('click', () => cartDiv.classList.toggle("hiddend"));