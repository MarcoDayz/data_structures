class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

class Queue{
    constructor(){
        this.first = null
        this.last = null
        this.length = 0
    }

    peek(){
        //show first node in q

        if(!this.first){
            return null
        }

        return this.first;
    }

    enqueue(data){
        //if there is no first, add first, otherwise get in back of line
        const node = new Node(data)

        if(!this.first){
            this.first = node
            this.last = node
        }else{
            this.last.next = node
            this.last = node
        }
        this.length++
        return this;
    }

    dequeue(){
        const trackNode = this.first
        //first person get on bus
        if(this.first === this.last){
            this.first = null
            this.last = null
        }else{
            this.first = this.first.next
        }
        this.length--
        return trackNode
    }

    size(){
        if(this.length === 0){
            return "The Queue is empty"
        }

        return this;
    }
}

const q = new Queue()

q.enqueue("first in line")
q.enqueue("second in line")
q.enqueue("third in line")

q.dequeue()
q.dequeue()


console.log(q.size())