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
    
    _renderSnake(obj){
        return`<div class="canvas-item" id="head" >
        
        </div>`
    }
    _renderSnakeBody(list){
        return list.map((obj)=>{
            return this._renderSnake(obj);
        }).join("");
    }
    render(){
        // let content = this._renderSnakeBody(this.snakeList)
        let content = this._renderSnake()
        this.setHtmlContent = content
    }
}