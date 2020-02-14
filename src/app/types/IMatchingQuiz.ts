import {IDefinition} from "./IDefinition";

export interface IMatchingQuiz {
	name: string;
	countToShow: number;
	entries: IDefinition[];
}
