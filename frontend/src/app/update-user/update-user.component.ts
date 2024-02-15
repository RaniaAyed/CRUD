import { Component } from '@angular/core';
import { GraphqlService } from '../graphql.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent {
  updatedUser = { id: '', username: '', email: '' };

  constructor(private graphqlService: GraphqlService) { }

  onSubmit(): void {
    this.graphqlService.updateUser(this.updatedUser).subscribe(  {
      next: (result) => {
      console.log('User updated successfully', result);
      // Handle success or navigate to another page
    },  error: (error)=> {
      console.error('Error updating user:', error);
      // Handle error
    }
  });
}
}