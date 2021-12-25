import {filters} from "../util/filters";

const Mutation : object = {
    updateFilter(_, {id}){
        // const {Filter} = ctx;
        // const {id} = args;
        const updateFil = filters.find((fil: any) => fil.id === id);
            if(!updateFil){
                throw new Error(`Filter with id ${id} does not exist.`)
            }
        return updateFil;
    }
}

module.exports = Mutation;