import { Component } from '@angular/core';
import { GraphqlService } from '../graphql.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss']
})
export class DeleteUserComponent {
  userIdToDelete: string = ''; // Initialisation de la propriété avec une chaîne vide

  constructor(private graphqlService: GraphqlService) { }

  onDelete(): void {
    this.graphqlService.deleteUser(this.userIdToDelete).subscribe({
      next: (result) => {
        console.log('User deleted successfully', result);
        // Handle success or navigate to another page
      },
      error: (error) => {
        console.error('Error deleting user:', error);
        // Handle error
      }
    });
    
    
  }
  
}
