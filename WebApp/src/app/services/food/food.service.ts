import { Injectable } from '@angular/core';
import {Food} from '../../shared/models/Food';
import {Tag} from "../../shared/models/Tag";
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() {

  }
  getFoodById(id :number):Food{
    return this.getAll().find(food=>food.id=id)!
  }
  getAllFoodsBySearchTerm(searchTerm:string):Food[]{
 return this.getAll().filter(food=>food.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }
  getAllTags():Tag[]{
    return [
      {name:'All',count:6},
      {name:'Fruit',count:5},
      {name:'Allfds',count:0},
      {name:'Afdsll',count:0},
      {name:'Adsfll',count:0},
      {name:'Asdfll',count:0}
    ]
  }
  getAllFoodsByTag(tag:string):Food[]{
    return tag=="All"? this.getAll():this.getAll().filter(food=>food.tags?.includes(tag));

  }
  getAll():Food[]{
    return [
      {
        id:2,
        name:'qiwi',
        price:10,
        cookTime:'15',
        favorite:false,
        origins:['Africa','us'],
        stars:4.5,
        imageUrl:'/assets/image/fruits/2.jpeg',
        tags:['Fruitdsf']
      },
      {
        id:1,
        name:'Apple',
        price:5,
        cookTime:'15',
        favorite:true,
        origins:['shymkent','us'],
        stars:3.5,
        imageUrl:'../../assets/image/fruits/1.jpeg',
        tags:['Fruit']
      },
      {
        id:3,
        name:'Ananas',
        price:12,
        cookTime:'15',
        favorite:false,
        origins:['Kair','us'],
        stars:4.2,
        imageUrl:'/assets/image/fruits/3.jpeg',
        tags:['Fruit']
      },
      {
        id:4,
        name:'pear',
        price:4,
        cookTime:'15',
        favorite:true,
        origins:['Almaty','us'],
        stars:3.5,
        imageUrl:'/assets/image/fruits/4.jpg',
        tags:['Fruit']
      },
      {
        id:5,
        name:'blackberry',
        price:15,
        cookTime:'15',
        favorite:false,
        origins:['Almaty','us'],
        stars:5.5,
        imageUrl:'/assets/image/fruits/5.jpeg',
        tags:['Fruit']
      },
      {
        id:6,
        name:'banana',
        price:11,
        cookTime:'15',
        favorite:true,
        origins:['panama','us'],
        stars:5.5,
        imageUrl:'/assets/image/fruits/6.webp',
        tags:['Fruit']
      }

    ]
  }
}
