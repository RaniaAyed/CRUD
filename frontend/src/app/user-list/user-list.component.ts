import { Component, OnInit } from '@angular/core';
import { GraphqlService } from '../graphql.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: any[] = []; // Initialisation de la propriété avec un tableau vide

  constructor(private graphqlService: GraphqlService) { }

  ngOnInit(): void {
    this.graphqlService.getUsers().subscribe((result: any) => { // Utilisation du type any pour result
      this.users = result.data.users;
    });
  }
}
