import {Component, Input} from "@angular/core";
import Guid from "uuid/v4";
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";
import {Wrapper} from "../types/Wrapper";
import {IQuizAndMode} from "../types/IQuizAndMode";
import {MatchingQuizMode} from "../types/MatchingQuizMode";

@Component({
	selector: "app-matching-quiz-editor",
	templateUrl: "./matching-quiz-editor.component.html",
	styleUrls: ["./matching-quiz-editor.component.css"]
})
export class MatchingQuizEditorComponent {
	public url: SafeUrl = null;
	@Input()
	public quiz: Wrapper<IQuizAndMode>;
	private internalUrl: string = null;

	public constructor(private readonly sanitizer: DomSanitizer) {
	}

	public addEntry(): void {
		const entry = {
			id: Guid(),
			definition: "",
			word: ""
		};

		this.quiz.value.quiz.entries.push(entry);
	}

	public updateJson(): void {
		window.URL.revokeObjectURL(this.internalUrl);

		const json = JSON.stringify(this.quiz.value.quiz);

		const blob = new Blob([json], {
			type: "application/json;charset=utf-8"
		});

		this.internalUrl = window.URL.createObjectURL(blob);
		this.url = this.sanitizer.bypassSecurityTrustUrl(this.internalUrl);
	}

	public deleteEntry(entryIndex: number): void {
		this.quiz.value.quiz.entries.splice(entryIndex, 1);
	}

	public setPlayMode(): void {
		this.quiz.value.mode = MatchingQuizMode.Play;
	}
}

