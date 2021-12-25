
const {gql} = require('apollo-server-express');

export const typeDefs = gql`
	type CatNode {
			id: ID! 
			name: String!
			filters: [ Filters ]!
			credits: Int!
			keepOverCredits: Boolean!
			refs: [LeafNode]!  
		}

	type LeafNode {
			id: ID!
			name: String!
			filters: [ Filters ]!
			courses: [ ID! ]!     
		}

	type Course {
			id: ID!
			name: String!
			course_number: String! 
		}

	type Filters {
			id: ID! 
			question: Question!
			activation: [ String! ]!
		}

	type Question {
			id: ID!
			question: String!
			choices: [ String! ]!
		}
	
	# Query
	type Query {
	        name: String!
	        gpa: Float!
	        isGraduation: Boolean!
	        catNode (id: ID): CatNode!
	        filter (id: ID): Filters!
			leafNode: [LeafNode!]!
	    }

	
	# Mutation
	type Mutation {
	        updateLeafNode ( id: ID!, name: String! ): LeafNode!
	    }

`;

module.exports =  { typeDefs } ;