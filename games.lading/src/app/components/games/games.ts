import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Game {
  id: number;
  name: string;
  genre: string;
  rating: number;
  image: string;
  price: string;
}

@Component({
  selector: 'app-games',
  standalone: false,
  templateUrl: './games.html',
  styleUrl: './games.css'
})
export class GamesComponent {
  games: Game[] = [
    { id: 1, name: 'GTA V', genre: 'Acción', rating: 4.9, image: 'https://media.vandal.net/m/15192/grand-theft-auto-v-201342141558_1.jpg', price: '$59.99' },
    { id: 2, name: 'The Witcher 3: Wild Hunt', genre: 'RPG', rating: 4.9, image: 'https://image.api.playstation.com/vulcan/ap/rnd/202211/0711/kh4MUIuMmHlktOHar3lVl6rY.png', price: '$39.99' },
    { id: 3, name: 'Minecraft', genre: 'Sandbox', rating: 4.8, image: 'https://www.minecraft.net/content/dam/minecraftnet/games/minecraft/key-art/Homepage_Discover-our-games_MC-Vanilla-KeyArt_864x864.jpg', price: '$26.99' },
    { id: 4, name: 'Dragon Ball Fighter Z', genre: 'Lucha', rating: 4.7, image: 'https://upload.wikimedia.org/wikipedia/en/a/ad/DBFZ_cover_art.jpg', price: '$49.99' }
  ];

  selectedFilter = 'Todos';
  filters = ['Todos', 'Acción', 'RPG', 'Sandbox', 'Lucha'];

  filterGames() {
    if (this.selectedFilter === 'Todos') {
      return this.games;
    }
    return this.games.filter(game => game.genre === this.selectedFilter);
  }

  onGameClick(gameName: string) {
    alert(`¡Hiciste clic en ${gameName}! Próximamente disponible en tu biblioteca.`);
  }
}
