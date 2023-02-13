import Database from "bun:sqlite";

type App = {
  database: Database;
}

declare global {
  var app: App = {
    database: {}
  }
}
  
