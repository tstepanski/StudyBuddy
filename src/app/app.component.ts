import {Component} from "@angular/core";
import Guid from "uuid/v4";
import {Wrapper} from "./types/Wrapper";
import {IQuizAndMode} from "./types/IQuizAndMode";
import {MatchingQuizMode} from "./types/MatchingQuizMode";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.css"]
})
export class AppComponent {
	public readonly id: string = Guid();

	public readonly quiz: Wrapper<IQuizAndMode> = {
		value: {
			mode: MatchingQuizMode.Play,
			quiz: null
		}
	};

	public createNew(): void {
		this.quiz.value = {
			quiz: {
				countToShow: 3,
				entries: [],
				name: ""
			},
			mode: MatchingQuizMode.Edit
		};
	}

	public showOpenFileDialog(): void {
		document
			.getElementById(this.id)
			.click();
	}

	public loadFile(event: Event): void {
		const fileReader = new FileReader();

		fileReader.onload = fileReaderEvent => {
			const json = fileReaderEvent.target.result.toString();

			this.quiz.value.quiz = JSON.parse(json);
		};

		const file = (event.target as HTMLInputElement).files[0];

		fileReader.readAsText(file);
	}

	public setToEdit(): void {
		this.quiz.value.mode = MatchingQuizMode.Edit;
	}
}
