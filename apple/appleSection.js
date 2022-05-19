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
    
    _renderApple(){
        return`<div class="apple" id="apple">
        
        </div>`
    }
    _renderSnakeBody(){
        // return list.map((obj)=>{
            return this._renderApple();
        // }).join("");
    }
    render(){
        let content = this._renderApple()
        this.setHtmlContent = content
    }
}