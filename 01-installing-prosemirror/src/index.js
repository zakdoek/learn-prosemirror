/**
 * We "import" a few modules from the ProseMirror package, which is the
 * ES6 method for using other code.
 */
import {ProseMirror} from "prosemirror/dist/edit"
import "prosemirror/dist/inputrules/autoinput"
import "prosemirror/dist/menu/tooltipmenu"
import "prosemirror/dist/menu/menubar"

let place = document.querySelector("#editor")
let initialContent = document.querySelector("#initial-content")

let pm = window.pm = new ProseMirror({
  place: place,
  doc: initialContent,
  docFormat: "dom"
})