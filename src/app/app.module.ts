import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {MatchingQuizEditorComponent} from "./matching-quiz-editor/matching-quiz-editor.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule} from "@angular/forms";
import {MatchingQuizGameComponent} from "./matching-quiz-game/matching-quiz-game.component";
import {DragDropModule} from "@angular/cdk/drag-drop";

@NgModule({
	declarations: [
		AppComponent,
		MatchingQuizEditorComponent,
		MatchingQuizGameComponent
	],
	imports: [
		BrowserModule,
		NgbModule,
		FormsModule,
		DragDropModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
