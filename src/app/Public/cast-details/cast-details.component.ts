import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cast-details',
  templateUrl: './cast-details.component.html',
  styleUrls: ['./cast-details.component.css']
})
export class CastDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  cast = {
    "id": 2,
    "name": "Ken Watanabe",
    "gender": "2",
    "tmdbUrl": "https://www.themoviedb.org/person/3899",
    "profilePath": "https://image.tmdb.org/t/p/w342//psAXOYp9SBOXvg6AXzARDedNQ9P.jpg",
    "movies": [
      {
        "id": 1,
        "title": "Inception",
        "posterURL": "https://image.tmdb.org/t/p/w342//9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg"
      },
      {
        "id": 42,
        "title": "Batman Begins",
        "posterURL": "https://image.tmdb.org/t/p/w342//1P3ZyEq02wcTMd3iE4ebtLvncvH.jpg"
      },
      {
        "id": 353,
        "title": "Godzilla",
        "posterURL": "https://image.tmdb.org/t/p/w342//iBZhbCVhLpyxAfW1B8ePUxjScrx.jpg"
      },
      {
        "id": 566,
        "title": "The Last Samurai",
        "posterURL": "https://image.tmdb.org/t/p/w342//lsasOSgYI85EHygtT5SvcxtZVYT.jpg"
      },
      {
        "id": 599,
        "title": "Pokémon Detective Pikachu",
        "posterURL": "https://image.tmdb.org/t/p/w342//wgQ7APnFpf1TuviKHXeEe3KnsTV.jpg"
      },
      {
        "id": 837,
        "title": "Godzilla: King of the Monsters",
        "posterURL": "https://image.tmdb.org/t/p/w342//mzOHg7Q5q9yUmY0b9Esu8Qe6Nnm.jpg"
      },
      {
        "id": 1524,
        "title": "Memoirs of a Geisha",
        "posterURL": "https://image.tmdb.org/t/p/w342//pBwYsQaSTgnPphIy02DJjCF2cqs.jpg"
      },
      {
        "id": 2083,
        "title": "Letters from Iwo Jima",
        "posterURL": "https://image.tmdb.org/t/p/w342//kZokxQtzMPURvijWYFuvh1fAvnv.jpg"
      },
      {
        "id": 4984,
        "title": "The Sea of Trees",
        "posterURL": "https://image.tmdb.org/t/p/w342//wJjUrR2VvX6dNifngg4qCJAYYvX.jpg"
      },
      {
        "id": 5849,
        "title": "Earth",
        "posterURL": "https://image.tmdb.org/t/p/w342//xybnXW6E28W9agiwUeGLbTYS454.jpg"
      },
      {
        "id": 8974,
        "title": "Shanghai",
        "posterURL": "https://image.tmdb.org/t/p/w342//xBrLr4ZNIdcGhRn0U6hoBX1RA4T.jpg"
      }
    ]
  };

  isMale = this.cast.gender == '2';

}
