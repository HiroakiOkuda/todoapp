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

export type AddTodoInput = {
  description?: InputMaybe<Scalars['String']>;
  due?: InputMaybe<Scalars['DateTime']>;
  status: Scalars['Int'];
  title: Scalars['String'];
};

export type DeleteTodoInput = {
  id: Scalars['Int'];
};

export type EditTodoInput = {
  description?: InputMaybe<Scalars['String']>;
  due?: InputMaybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  status?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  access_token: Scalars['String'];
  user: User;
};

export type Mutation = {
  __typename?: 'Mutation';
  createTodo: Todo;
  deleteTodo: Scalars['Boolean'];
  editTodo: Todo;
  login: LoginResponse;
  registerUser?: Maybe<User>;
};


export type MutationCreateTodoArgs = {
  todo: AddTodoInput;
};


export type MutationDeleteTodoArgs = {
  todo: DeleteTodoInput;
};


export type MutationEditTodoArgs = {
  todo: EditTodoInput;
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationRegisterUserArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  getTodo: Todo;
  getUserByEmail: User;
  todos: Array<Todo>;
};


export type QueryGetTodoArgs = {
  id: Scalars['Int'];
};


export type QueryGetUserByEmailArgs = {
  args: Scalars['String'];
};

export type Todo = {
  __typename?: 'Todo';
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  description: Scalars['String'];
  due: Scalars['DateTime'];
  status: Scalars['Int'];
  title: Scalars['String'];
  todoId: Scalars['ID'];
  updatedAt: Scalars['DateTime'];
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  email: Scalars['String'];
  password: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  userId: Scalars['Int'];
  username: Scalars['String'];
};

export type TodosQueryVariables = Exact<{ [key: string]: never; }>;


export type TodosQuery = { __typename?: 'Query', todos: Array<{ __typename?: 'Todo', createdAt: any, deletedAt: any, description: string, due: any, status: number, title: string, todoId: string, updatedAt: any }> };

export type RegisterAccountMutationVariables = Exact<{
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type RegisterAccountMutation = { __typename?: 'Mutation', registerUser?: { __typename?: 'User', username: string } | null };

export type LoginMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginResponse', access_token: string } };


export const TodosDocument = gql`
    query todos {
  todos {
    createdAt
    deletedAt
    description
    due
    status
    title
    todoId
    updatedAt
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
 *   },
 * });
 */
export function useTodosQuery(baseOptions?: Apollo.QueryHookOptions<TodosQuery, TodosQueryVariables>) {
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
export const RegisterAccountDocument = gql`
    mutation registerAccount($username: String!, $email: String!, $password: String!) {
  registerUser(username: $username, email: $email, password: $password) {
    username
  }
}
    `;
export type RegisterAccountMutationFn = Apollo.MutationFunction<RegisterAccountMutation, RegisterAccountMutationVariables>;

/**
 * __useRegisterAccountMutation__
 *
 * To run a mutation, you first call `useRegisterAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerAccountMutation, { data, loading, error }] = useRegisterAccountMutation({
 *   variables: {
 *      username: // value for 'username'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useRegisterAccountMutation(baseOptions?: Apollo.MutationHookOptions<RegisterAccountMutation, RegisterAccountMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterAccountMutation, RegisterAccountMutationVariables>(RegisterAccountDocument, options);
      }
export type RegisterAccountMutationHookResult = ReturnType<typeof useRegisterAccountMutation>;
export type RegisterAccountMutationResult = Apollo.MutationResult<RegisterAccountMutation>;
export type RegisterAccountMutationOptions = Apollo.BaseMutationOptions<RegisterAccountMutation, RegisterAccountMutationVariables>;
export const LoginDocument = gql`
    mutation login($username: String!, $password: String!) {
  login(username: $username, password: $password) {
    access_token
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;