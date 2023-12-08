export interface Letter {
    content: string;
    country: 'pl' | 'de' | 'us';
    priority: 'high' | 'medium' | 'low';
  }

  interface SortStrategy {
    sortLetters(letters: Letter[]): Letter[];
  }
  
  export class LetterSorter {
    private _sortStrategy: SortStrategy;

    constructor(sortStrategy: SortStrategy) {
        this._sortStrategy = sortStrategy;
    }
    sortLetters(letters: Letter[]): Letter[] {
      return this._sortStrategy.sortLetters(letters);
    }
  }

  export class PriorityStrategy implements SortStrategy {
    private readonly priorityOrder = { high: 1, medium: 2, low: 3};

    sortLetters(letters: Letter[]): Letter[] {
        return letters.sort((a, b) => this.priorityOrder[a.priority] - this.priorityOrder[b.priority]);
      }
  }

  export class CountryStrategy implements SortStrategy {
    private readonly countryOrder = { pl: 1, de: 2, us: 3};

    sortLetters(letters: Letter[]): Letter[] {
        return letters.sort((a, b) => this.countryOrder[a.country] - this.countryOrder[b.country]);
      }
  }

  export class LengthStrategy implements SortStrategy {
    sortLetters(letters: Letter[]): Letter[] {
        return letters.sort((a, b) => a.content.length - b.content.length);
      }
  }
  