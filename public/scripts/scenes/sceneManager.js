function changeScene() {
    let txt;
    if (scene === "start") txt = startScene();
    if (scene === "select_room") txt = selectRoomScene();
    if (scene === "room") txt = roomScene();
    if (scene === "day_discussing") txt = dayDiscussingScene();

    console.log(txt);

    document.getElementById("scene").innerHTML = scene;
}

function startScene() {
    return "start";
}

function selectRoomScene() {
    return "select";
}

function roomScene() {
    return "room";
}

function dayDiscussingScene() {
    return "day_discussing";
}