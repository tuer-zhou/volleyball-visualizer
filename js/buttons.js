export const speed = document.getElementById("speed");

export const systemSelector = document.getElementById("system");
systemSelector.onchange = () =>{
    players = systems[systemSelector.value];
    setNewPosition();
    selectedPlayer = null;
};
systemSelector.value = "5:1";

export const disableBorders = document.getElementById("disable_borders");
disableBorders.checked = false;