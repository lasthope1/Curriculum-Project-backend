
import { catNode }  from "../util/catNode";
import { filters } from "../util/filters";
import { course } from "../util/course";
const { courseListNode } = require("../util/courseList"); // it's the same --import {leafNode} from "../util/leafNode"--

const resolvers = {
    /* ----- Query ----- */
    Query: {
        name() : string { return 'Anon Rottua'},
    
        gpa(): number { return 2.39 },
    
        isGraduation() {
            return false;
        },

        catNode(_,{id}){
            // const node = catNode.find((Node) => Node.id === id);
            // if(!node){
            //     throw new Error(`CatNode with id ${id} dose not exist.`);
            // }
            // return node;
            return catNode;
        },

        filter(_,{id}){
            const Fil = filters.find((nodeFil) => nodeFil.id === id);           
            return Fil;
        },

        courseListNode(){
            return courseListNode;
        },

        course(){
            return course
        }
    },

    /* ----- Mutation ----- */
    Mutation: {
        updateLeafNode(_, {id, name}){
            const updateLeaf = courseListNode.find((node: any) => node.id === id);
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