export class snakeSection {
    
    set setId(id){
        this.id = id
    }
    set setHtmlContent(content){
        this.id.innerHTML=content
    }
    
    _renderSnake(){
        return`<div class="canvas-item" id="head" >
        
        </div>`
    }
    render(){
        let content = this._renderSnake()
        this.setHtmlContent = content
    }
}