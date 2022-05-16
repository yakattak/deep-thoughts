import {gql} from '@apollo/client';

export const LOGIN_USER = gql `
    mutation login($email: Strong!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }`