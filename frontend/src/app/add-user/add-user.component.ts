import { Component } from '@angular/core';
import { GraphqlService } from '../graphql.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'] // Assurez-vous que le chemin est correct
})

export class AddUserComponent {
  newUser = { username: '', email: '' };

  constructor(private graphqlService: GraphqlService) { }

  onSubmit(): void {
    this.graphqlService.addUser(this.newUser).subscribe( {
      next: (result) => {
      console.log('User added successfully', result);
      // Handle success or navigate to another page
    }, error: (error)  => {
      console.error('Error adding user:', error);
      // Handle error
    }
  });
}
}


