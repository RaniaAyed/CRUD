import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})
export class GraphqlService {

  constructor(private apollo: Apollo) { }

  getUsers() {
    return this.apollo.query({
      query: gql`
        query {
          users {
            id
            username
            email
          }
        }
      `
    });
  }
  addUser(newUser: any) { // Ajouter un paramètre pour le nouvel utilisateur à ajouter
    return this.apollo.mutate({
      mutation: gql`
        mutation AddUser($user: AddUserInput!) {
          addUser(user: $user) {
            id
            username
            email
          }
        }
      `,
      variables: {
        user: newUser
      }
    });
  }

  updateUser(updatedUser: any) { // Ajoutez la méthode updateUser
    return this.apollo.mutate({
      mutation: gql`
        mutation UpdateUser($user: UpdateUserInput!) {
          updateUser(user: $user) {
            id
            username
            email
          }
        }
      `,
      variables: {
        user: updatedUser
      }
    });
  }

  deleteUser(userId: string) { // Ajoutez la méthode deleteUser
    return this.apollo.mutate({
      mutation: gql`
        mutation DeleteUser($userId: ID!) {
          deleteUser(userId: $userId)
        }
      `,
      variables: {
        userId: userId
      }
    });
  }

}
