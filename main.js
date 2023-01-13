

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
let intervalId
document.querySelectorAll('.arrow-price').forEach(el => el.addEventListener('click', e=>{
  let menu = e.target.dataset.path
  document.querySelectorAll('.basics').forEach(e=>{
    if(!document.querySelector(`[data-title = ${menu}]`).classList.contains('color')){
    e.classList.remove('color')
    intervalId = setTimeout(()=>{
      document.querySelector(`[data-title = ${menu}]`).classList.add('color')
    },0)
  }
  if(document.querySelector(`[data-title = ${menu}]`).classList.contains('color')){
    intervalId = setTimeout(()=>{
      document.querySelector(`[data-title = ${menu}]`).classList.remove('color')
    },0)
  }
  })
  document.querySelectorAll('.dropdown-content').forEach(e=>{
    if(!document.querySelector(`[data-target = ${menu}]`).classList.contains('open')){
      e.classList.remove('open-dropdown')
      e.classList.remove('open')
      document.querySelector(`[data-target = ${menu}]`).classList.add('open-dropdown')
      intervalId = setTimeout(()=>{
        document.querySelector(`[data-target = ${menu}]`).classList.add('open')
      },0)
    }
    if(document.querySelector(`[data-target = ${menu}]`).classList.contains('open')){
      clearTimeout(intervalId);
      document.querySelector(`[data-target = ${menu}]`).classList.remove('open-dropdown')
      intervalId = setTimeout(()=>{
        document.querySelector(`[data-target = ${menu}]`).classList.remove('open')
      },0)
    }
  })
  document.querySelectorAll('.arrow-price').forEach(e=>{
    if(!document.querySelector(`[data-path = ${menu}]`).classList.contains('up')){
    e.classList.remove('arrow-price-hover')
    intervalId = setTimeout(()=>{
      document.querySelector(`[data-path = ${menu}]`).classList.add('arrow-price-hover')
    },0)
  }
  if(document.querySelector(`[data-path = ${menu}]`).classList.contains('up')){
    intervalId = setTimeout(()=>{
      document.querySelector(`[data-path = ${menu}]`).classList.remove('arrow-price-hover')
    },0)
  }
  })
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
            