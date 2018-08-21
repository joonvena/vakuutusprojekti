import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    vakuutukset: [{name: "Lapsivakuutus",
            category: "Henkilövakuutukset",
            bgcolor: "green"},

            {name: "Tapaturma- ja sairausvakuutus",
            category: "Henkilövakuutukset",
            bgcolor: "green"},

            {name: "Vauvavakuutus",
            category: "Henkilövakuutukset",
            bgcolor: "green"},

            {name: "Henkivakuutus",
            category: "Henkilövakuutukset",
            bgcolor: "green"},

            {name: "Matkavakuutus",
            category: "Henkilövakuutukset",
            bgcolor: "green"},

            {name: "Autovakuutus",
            category: "Ajoneuvovakuutukset",
            bgcolor: "blue"},

            {name: "Liikennevakuutus",
            category: "Ajoneuvovakuutukset",
            bgcolor: "blue"},

            {name: "Pakettiautovakuutus",
            category: "Ajoneuvovakuutukset",
            bgcolor: "blue"},

            {name: "Moottoripyörävakuutus",
            category: "Ajoneuvovakuutukset",
            bgcolor: "blue"},

            {name: "Kuorma-autovakuutus",
            category: "Ajoneuvovakuutukset",
            bgcolor: "blue"}
    ]}

    onDragOver = (e) => {
      e.preventDefault();
    }

    onDragStart = (e, id) => {
      e.dataTransfer.setData("id", id);
    }

    onDrop = (ev, cat) => {       
      let id = ev.dataTransfer.getData("id");
      let vakuutukset = this.state.vakuutukset.filter((task) => {
          if (task.name == id) {
                   task.category = cat;           
          }              
           return task;       
       });        
       this.setState({           
          ...this.state,           
          vakuutukset       
       });    
    }

  render() {

    var vakuutukset = {
      Henkilövakuutukset: [],
      Ajoneuvovakuutukset: [],
      valitut: []
    }

    this.state.vakuutukset.forEach((t) => {
      vakuutukset[t.category].push(
      <div key={t.name}
      onDragStart={(e) => this.onDragStart(e, t.name)}
      draggable
      className="draggable" style={{backgroundColor: t.bgcolor}}>
        {t.name}
        </div>
        );
    });

    return (
      <div className="App">
      <h2 className="header">Vakuutukset</h2>
      <div className="kategoria" onDragOver={(e) => this.onDragOver(e)}
      onDrop={(e) => {this.onDrop(e, "Henkilövakuutukset")}}>
      <span className="task-header">Henkilövakuutukset</span>
      {vakuutukset.Henkilövakuutukset}
      </div>
      <div className="droppable" onDragOver={(e) => this.onDragOver(e)}
      onDrop={(e) => this.onDrop(e, "valitut")}>
      <span className="task-header">Valitut vakuutukset</span>
      {vakuutukset.valitut}
        </div>
      <div className="kategoria" onDragOver={(e) => this.onDragOver(e)}
      onDrop={(e) => {this.onDrop(e, "Ajoneuvovakuutukset")}}>
      <span className="task-header">Ajoneuvovakuutukset</span>
      {vakuutukset.Ajoneuvovakuutukset}
      </div>
      </div>
    );
  }
}

export default App;
