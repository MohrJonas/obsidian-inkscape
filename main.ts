import {Plugin} from 'obsidian';
import {exec} from "child_process";

export default class MyPlugin extends Plugin {

	async onload() {
		this.addRibbonIcon("pencil", "Obsidian Inkscape", () => {
			exec("inkscape", ((error, stdout) => {
				if(error) console.error(error.message)
				console.log(stdout)
			}))
		})
	}
}
