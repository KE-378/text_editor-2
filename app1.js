
var text = document.getElementById('Text')
var btn = document.getElementsByClassName('action-btn')

console.log(text)

for(var i = 0; i < btn.length; i++){
    btn[i].addEventListener('click' , function(){
        console.log(this.innerText)
        
        switch (this.innerText) {
            case 'Bold':
                text.style.fontWeight='bold'
                break;

                case 'Italic':
                text.style.fontStyle='italic'
                break;

                case 'Underline':
                text.style.textDecoration='underline'
                break;

                case 'Right':
                text.style.textAlign='right'
                break;
                
                case 'Left':
                text.style.textAlign='left'
                break;

                case 'Center':
                    text.style.textAlign='center'
                    break;
                    case 'Justify':
                        text.style.textAlign='Justify'
                        break;
    
                    
        
            default:
                break;
        }
    })
}