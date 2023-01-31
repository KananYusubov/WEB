let model = {
    name: "BMW",
    autoPilot: undefined,

    toJSON() {
        let jsonStr = `{"name":"${this.name}","autoPilot":`
        if (this.autoPilot === undefined)
            jsonStr += '"Not"}';
        else
            jsonStr += `"${this.autoPilot}"}`;

        return jsonStr;
    }
};

let car ={
  Color:"Red",
  Date: new Date(2023,1,22),
  model
};

let carJson = JSON.stringify(car, null,4);

alert(carJson);
