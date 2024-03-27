import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  access_token: Scalars['String'];
  refresh_token: Scalars['String'];
  user: User;
};

export type Mutation = {
  __typename?: 'Mutation';
  createTodo: Todo;
  deleteTodo: Scalars['Boolean'];
  login: LoginResponse;
  logout: Scalars['Boolean'];
  refreshToken: LoginResponse;
  registerUser?: Maybe<User>;
  updateTodo: Todo;
  updateUser?: Maybe<User>;
};


export type MutationCreateTodoArgs = {
  description?: InputMaybe<Scalars['String']>;
  due?: InputMaybe<Scalars['DateTime']>;
  status: Scalars['Int'];
  title: Scalars['String'];
};


export type MutationDeleteTodoArgs = {
  id: Scalars['Int'];
};


export type MutationRegisterUserArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationUpdateTodoArgs = {
  description?: InputMaybe<Scalars['String']>;
  due?: InputMaybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  status?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateUserArgs = {
  email: Scalars['String'];
  id: Scalars['Float'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  getTodos: Array<Todo>;
  getUserByEmail?: Maybe<User>;
};


export type QueryGetTodosArgs = {
  id: Scalars['Int'];
};


export type QueryGetUserByEmailArgs = {
  email: Scalars['String'];
};

export type Todo = {
  __typename?: 'Todo';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  status: Scalars['Int'];
  title: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  username: Scalars['String'];
};

export type TodosQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type TodosQuery = { __typename?: 'Query', getTodos: Array<{ __typename?: 'Todo', description?: string | null, status: number, title: string }> };


export const TodosDocument = gql`
    query todos($id: Int!) {
  getTodos(id: $id) {
    description
    status
    title
  }
}
    `;

/**
 * __useTodosQuery__
 *
 * To run a query within a React component, call `useTodosQuery` and pass it any options that fit your needs.
 * When your component renders, `useTodosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTodosQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useTodosQuery(baseOptions: Apollo.QueryHookOptions<TodosQuery, TodosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TodosQuery, TodosQueryVariables>(TodosDocument, options);
      }
export function useTodosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TodosQuery, TodosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TodosQuery, TodosQueryVariables>(TodosDocument, options);
        }
export type TodosQueryHookResult = ReturnType<typeof useTodosQuery>;
export type TodosLazyQueryHookResult = ReturnType<typeof useTodosLazyQuery>;
export type TodosQueryResult = Apollo.QueryResult<TodosQuery, TodosQueryVariables>;