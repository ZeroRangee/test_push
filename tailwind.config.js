tailwind.config = {
    theme: {
      extend: {
        colors: {
            'lime_green' : '#619648',
        }
      }
    }
  }

function getWidthV() {
    let result = {}
    for (let i = 0; i<101; i++){
        if ( i % 2 == 0){
            result[`${i}v`] = `${i}vw`
        }
    }
    return result
}

function getHeightV() {
    let result = {}
    for (let i = 0; i<101; i++){
        if ( i % 2 == 0){
            result[`${i}v`] = `${i}vh`
        }
    }
    return result
}


tailwind.config.theme.extend.width = getWidthV()
tailwind.config.theme.extend.height = getHeightV()


