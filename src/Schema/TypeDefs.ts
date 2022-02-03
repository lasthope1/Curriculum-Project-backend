
const {gql} = require('apollo-server-express');

export const typeDefs = gql`
	type CatNode {
			id: ID! 
			name: String!
			filters: [ Filters ]!
			credits: Int!
			keepOverCredits: Boolean!
			refs: [ID]!  
		}

	type CourseListNode {
			id: ID!
			name: String!
			filters: [ Filters ]!
			courses: [ ID! ]!     
		}

	type Course {
			id: ID!
			name: String!
			course_number: String!
			credit: Int!
			grade: String 
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
	        catNode: [CatNode!]!
	        filter (id: ID): Filters!
			courseListNode: [CourseListNode!]!
			course: [Course!]!
	    }

	
	# Mutation
	type Mutation {
	        updateLeafNode ( id: ID!, name: String! ): CourseListNode!
	    }

`;

module.exports =  { typeDefs } ;