import {Component, Input} from "@angular/core";
import {Wrapper} from "../types/Wrapper";
import {IQuizAndMode} from "../types/IQuizAndMode";
import {IDefinition} from "../types/IDefinition";
import {Random} from "../types/Random";
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";

@Component({
	selector: "app-matching-quiz-game",
	templateUrl: "./matching-quiz-game.component.html",
	styleUrls: ["./matching-quiz-game.component.css"]
})
export class MatchingQuizGameComponent {
	@Input()
	public quiz: Wrapper<IQuizAndMode>;

	public wordsList: IDefinition[] = [];
	public definitionsList: IDefinition[] = [];

	public startNew(): void {
		const quizValue = this.quiz.value.quiz;
		const entries = quizValue.entries;
		const countToShow = Math.min(entries.length, quizValue.countToShow);
		const entriesToUse = Random.shuffle(entries).slice(0, countToShow);

		this.wordsList = Random.shuffle(entriesToUse);
		this.definitionsList = Random.shuffle(entriesToUse);
	}

	public score(): void {
		let countCorrect = 0;
		const count = this.wordsList.length;

		for (let index = 0; index < count; index++) {
			if (this.wordsList[index].id === this.definitionsList[index].id) {
				countCorrect++;
			}
		}

		alert(`You got ${countCorrect} out of ${count} correct for ${countCorrect / count * 100}%!`);
	}

	public onWordDrop(event: CdkDragDrop<IDefinition[]>) {
		moveItemInArray(this.wordsList, event.previousIndex, event.currentIndex);
	}

	public onDefinitionDrop(event: CdkDragDrop<IDefinition[]>) {
		moveItemInArray(this.definitionsList, event.previousIndex, event.currentIndex);
	}
}
