//LIFO - last in first out

//stack of plates analogy

//Never want to iterate over a stack or use as a look up
//concerned with top node

class Node {
    constructor(data){
        this.data = data
        this.next = null
    }
}

class Stack {
    constructor(){
        this.top = null
        this.bottom = null
        this.length = 0
    }

    pop(){
        //if there is a length of 1
        if(this.length === 1){
            //top declares this.top
            let top = this.top
            //top and bottom will become null
            this.top = null
            this.bottom = null
            //length will be decrimented
            this.length--
            //returns the top and bottom null with length of 0
            return top
        }else{
            let top = this.top
            //this top become the next top
            this.top = this.top.next
            //length is decrimented
            this.length--
            //return top
            return top
        }

    }

    push(data){
        //creates new Node instance
        const node = new Node(data)

        //if there is no top
        if(!this.top){
            //this top and bottom will be a node instance
            this.top = node
            this.bottom = node
        }else{
            //create temp var declaring this.top
            let temp = this.top
            //this top gets a value of node
            this.top = node
            //this top next gets the value of following top node
            this.top.next = temp
        }
        //incriment length
       this.length++
       //returns stack constructor
       return this
    }

    peek(){
        if(this.top){
            return this.top;
        }else{
            return "No Top"
        }
    }

    size(){
        if(this.length === 0){
            return "This Stack is empty"
        }

        return this;
    }
}

const stack = new Stack()

// stack.push('First Node')
// stack.push('Second Node')
// stack.push('Third Node')
// stack.push('Forth Node')
// stack.push('Fifth Node')
// stack.push('Sixth Node')

// stack.pop()
// stack.pop()
// stack.pop()
// stack.pop()
// stack.pop()
// stack.pop()

console.log(stack.size());