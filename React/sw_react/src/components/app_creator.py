import os

folders = [
    "app",
    "header",
    "item-list",
    "person-details",
    "planet-details",
    "random-planet",
    "starship-details"
]

for folder_name in folders:
    os.mkdir(folder_name)
    os.chdir(folder_name)
    f1 = open(f"{folder_name}.js", "w")
    jsText = f"""import React from "react";

import "./{folder_name}.css";

const {folder_name.title()} = () => {"{"}
    return (
        <div>
        <p>Hello</p>
        </div>
    );
{"}"}

export default {folder_name.title()};
    """
    f1.write(jsText)
    f2 = open(f"{folder_name}.css", "w")
    f3 = open(f"index.js", "w")
    indTxt = f"""import {folder_name.title()}  from './{folder_name}';

export default {folder_name.title()};
    """
    f3.write()
    f1.close()
    f2.close()
    f3.close()
    os.chdir("..")

