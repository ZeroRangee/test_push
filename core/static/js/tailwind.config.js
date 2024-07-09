
tailwind.config = {
    theme: {
      extend: {
        colors: {
            'light-green': '#6aa172',
            'dark-green': '#35533a',
        },
        fontFamily: {
          montserrat: ['Montserrat', 'ui-sans-serif', 'system-ui'],
          unbounded: ['Unbounded', 'ui-sans-serif', 'system-ui'],
        },
        keyframes: {
          openModalMenu: {
            'from' : { top : '100vw' },
            'to': { top: '0'},
          },
          closeModalMenu: {
            'from' : { top : '0' },
            'to': { top: '-100vw'},
          },
          openModalCart: {
            'from' : { rigth : '-30vw' },
            'to': { rigth: '0'},
          },
          closeModalCart: {
            'from' : { rigth : '0' },
            'to': { rigth: '-30vw' },
          }
        },
        animation: {
          OpenModalMenu: 'openModalMenu 0.7s forwards linear',
          CloseModalMenu: 'closeModalMenu 0.7s forwards linear',
          OpenModalCart: 'openModalCart 0.4s forwards linear',
          CloseModalCart: 'closeModalCart 0.4s forwards linear',
        },
      }
    }
  }

function getWidthV(){
    let result = {}
    for (let i = 0; i <= 100; i += 2) {  
        result[`${i}vw`] = `${i}vw`       
    }
    return result 
}
function getHeightV(){
    let result = {}
    for (let i = 0; i <= 100; i += 2) {  
        result[`${i}vh`] = `${i}vh`       
    }
    return result 
}

function getPaddingHeightV(){
  let result = {}
  for (let i = 0; i <= 100; i += 2) {  
      result[`${i}vh`] = `${i}vh`       
  }
  return result 
}
function getPaddingWidthV(){
  let result = {}
  for (let i = 0; i <= 100; i += 2) {  
      result[`${i}vw`] = `${i}vw`       
  }
  return result 
}

tailwind.config.theme.extend.width = getWidthV()
tailwind.config.theme.extend.height = getHeightV()
tailwind.config.theme.extend.padding = getPaddingWidthV(), getPaddingHeightV()
// tailwind.config.theme.extend.padding += getPaddingHeightV()



