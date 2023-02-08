

const btn = document.querySelector('.service__header__btn')
const blocks = document.querySelector('.service-blocks').children


const selectContact = document.querySelector('.arrow-contacts-img')

const selectPrice = document.querySelector('.price-block')
const select = document.querySelector('.select')
const title = document.querySelector('.first-line')
const cityBlock = document.querySelector('.city-block')
const cityFeature = document.querySelector('.block-feature')

const basicsBlock = document.querySelectorAll('.basics-block')
const basics = document.querySelectorAll('.basics')
let arr = []
let cityBlockOpen = false
let active = false

/*Price blocks */
document.querySelectorAll('.arrow-price').forEach(el => el.addEventListener('click', e=>{
  let menu = e.target.dataset.path
  let previous 
  if(document.querySelector('.arrow-price-hover')){
    previous = document.querySelector('.arrow-price-hover').dataset.path
    console.log(previous,menu)
  document.querySelector('.arrow-price-hover').classList.remove('arrow-price-hover')
  }
  if(document.querySelector('.basics.color')){
     document.querySelector('.basics.color').classList.remove('color')
   }
  if(document.querySelector('.open-dropdown')){
    document.querySelector('.open-dropdown').classList.remove('open-dropdown')
  }
  if(previous!=menu){
  intervalId = setTimeout(()=>{
  e.target.classList.add('arrow-price-hover')
  document.querySelector(`[data-title = ${menu}]`).classList.add('color')
  document.querySelector(`[data-title = ${menu}]`).classList.add('color')
  document.querySelector(`[data-target = ${menu}]`).classList.add('open-dropdown')
  },0)}
}))
  
  /*----------------------------*/


  
  selectContact.addEventListener('click',function(e){
      if((e.target.tagName == "P" )){

        document.querySelector('.contacts-img').style.visibility= 'visible'
        if(window.innerWidth<500){
          document.querySelector('.contacts-img').style.visibility= 'hidden'
        }
      select.classList.toggle('open-select')
      title.style.background = `#C1E698`
      document.querySelector('.arrow-contacts-img').classList.toggle('rotate')
      cityBlock.classList.remove('open-select')
    }
    })
  


    select.addEventListener('click', function(e){
        if(e.target.nodeName == "LI" ){
            title.children[0].textContent = e.target.textContent
            select.classList.toggle('open-select')
            cityBlock.classList.toggle('open-select')
            document.querySelector('.arrow-contacts-img').classList.toggle('rotate')
            cityBlockOpen = true
            fillTheField(e.target.textContent)
            if(window.innerWidth<500){
              document.querySelector('.contacts__form').style.marginBottom = '250px'
            }
            
        }else{
            cityBlock.classList.toggle('open-select')
            cityBlockOpen = false
        }
        
      })
    
    /*Btn for service */
    btn.onclick = function(e) {
        if(arr.length<2  && !e.target.classList.contains('btn-hover')){
        arr.push(e.target.dataset.title)
        e.target.classList.toggle('btn-hover')
        blur(arr)
      }else if(e.target.classList.contains('btn-hover')){
        e.target.classList.remove('btn-hover')
        arr = arr.filter(el=>el!=e.target.dataset.title)
        blur(arr)
        if(arr.length==0 ){
          deleteBlur(arr)}
      }
        else{

      }
    }   

    function blur(arr){
        for(let i=0; i<blocks.length; i++){
          if(!arr.includes(blocks[i].dataset.title)){
            blocks[i].classList.add('blur')
          }else{
            blocks[i].classList.remove('blur')
          }
        }
      }
      function deleteBlur(arr){
        for(let i=0; i<blocks.length; i++){
            blocks[i].classList.remove('blur')
          
        }
      }
      
      function fillTheField(content){
          
          for(let i=0; i< cityDirectory.length; i++){
              if(cityDirectory[i].city==content){
                  cityFeature.children[0].textContent = cityDirectory[i].city;
                  cityFeature.children[1].textContent = cityDirectory[i].phone
                  cityFeature.children[2].textContent = cityDirectory[i].office
                  document.querySelector('.city-block-link').setAttribute('href', `tel:${cityDirectory[i].phone.replace(/\s/g, "")}`);
              }
          }
      
      }
      
      
      
      const cityDirectory = [
          {
              city: 'Canandaigua, NY',
              phone: '+1	585	393 0001',
              office: '151 Charlotte Street'
          },
          {
              city: 'New York City',
              phone: '+1	212	456 0002',
              office: '9 East 91st Street'
          },
          {
              city: 'Sherrill, NY',
              phone: '+1	315	908 0004',
              office: '14 WEST Noyes BLVD'
          },
          {
              city: 'Yonkers, NY',
              phone: '+1	914	678 0003',
              office: '14 WEST Noyes BLVD'
          },
      ]
            