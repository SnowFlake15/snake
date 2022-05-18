export class snakeSection {
    snakeList=[]
    
    set setId(id){
        this.id = id
    }
    set setHtmlContent(content){
        this.id.innerHTML=content
    }
    set snakeList(data){
        this.snakeList=data
    }
    
    _renderSnakeBodyPart(obj){
        return`<div class="canvas-item" id="cube">

        </div>`
    }
    _renderSnakeBody(list){
        return list.map((obj)=>{
            return this._renderSnakeBodyPart(obj);
        }).join("");
    }
    render(){
        let content = this._renderSnakeBody(this.snakeList)
        this.setHtmlContent(content)
    }
}