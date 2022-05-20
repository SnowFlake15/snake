export class appleSection {
    // snakeList=[]
    
    set setId(id){
        this.id = id
    }
    set setHtmlContent(content){
        this.id.innerHTML=content
    }
    set snakeList(data){
        this.snakeList=data
    }
    appleTopDistance = Math.round((Math.random() * (270 - 0) + 0) / 30) * 30;
    appleLeftDistance = Math.round((Math.random() * (270 - 0) + 0) / 30) * 30;
    
    _renderApple(){
        return`<div class="apple" id="apple" style="left:${this.appleLeftDistance}px;top:${this.appleTopDistance}px">
        
        </div>`
    }
    // createApple() {
        // appleTopDistance = Math.round((Math.random() * (270 - 0) + 0) / 30) * 30;
        // appleLeftDistance = Math.round((Math.random() * (270 - 0) + 0) / 30) * 30;
        // apple.style.left = `${appleLeftDistance}px`;
        // apple.style.top = `${appleTopDistance}px`;
        // apple.classList.add("apple");
        // apple.setAttribute("id", "apple");
        // canvasId.appendChild(apple);
    //   }
    render(){
        let content = this._renderApple()
        this.setHtmlContent = content
    }
}