import { catNode }  from "../util/catNode";
import { course } from "../util/course";
import { filters } from "../util/filters";
import { leafNode } from "../util/leafNode";

// interface Args {
//     id : any ;
//     name : string ;
// }

// interface LeafNode {
//     id: string;
//     name: string;
//     filters: [ any ];
// 	courses: [ string ];
// }

const resolvers = {
    name : (): string  => 'Anon Rottua',
    
    gpa() { return 2.39 },
    
    isGraduation() {
        return false;
    },

    catNode(_,{id}){
        // var node;
        const node = catNode.find((Node) => Node.id === id);
        if(!node){
            throw new Error(`CatNode with id ${id} dose not exist.`);
        }
        return node;
    },

    filter(_,{id}){
        const Fil = filters.find((nodeFil) => nodeFil.id === id);
        return Fil;
    },

    leafNode(){
        return leafNode;
    },

    course(){
        return course;
    }
}

module.exports = { resolvers };