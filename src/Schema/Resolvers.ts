
import { catNode }  from "../util/catNode";
import { filters } from "../util/filters";
import { leafNode } from "../util/leafNode";

const resolvers = {
    /* ----- Query ----- */
    Query: {
        name() : string { return 'Anon Rottua'},
    
        gpa() { return 2.39 },
    
        isGraduation() {
            return false;
        },

        catNode(_,{id}){
            const node = catNode.find((Node) => Node.id === id);
            if(!node){
                throw new Error(`CatNode with id ${id} dose not exist.`);
            }
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
            return leafNode;
        }
    },

    /* ----- Mutation ----- */
    Mutation: {
        updateLeafNode(_, {id, name}){
            const updateLeaf = leafNode.find((node: any) => node.id === id);
                if(!updateLeaf){
                    throw new Error(`Filter with id ${id} does not exist.`)
                }else{
                    updateLeaf.name = name
                }
            return updateLeaf;
        }
    }
};

module.exports = {resolvers};