import { catNode }  from "../util/catNode";
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
    name : () : string  => 'Anon Rottua',
    
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
        // if(id != null){
        //     node = catNode.find((Node) => Node.id === id);
        //     if(!node){
        //         throw new Error(`CatNode with id ${id} dose not exist.`);
        //     }
        // }else {
        //     node = catNode; 
        // }
        console.log(`\nThe selected ID is ${id} .`);
        console.log(node);
        return node;
    },

    filter(_,{id}){
        const Fil = filters.find((nodeFil) => nodeFil.id === id);
        console.log(Fil.id);
        return Fil;
    },

    leafNode(){
        console.log(leafNode);
        return leafNode;
    }
}

module.exports = { resolvers };