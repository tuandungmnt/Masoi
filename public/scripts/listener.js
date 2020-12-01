function addListeners() {
    addSceneListener();
}

function addSceneListener() {
    firebase.database().ref('rooms/'+roomId+'/room_stage').on('value', (snapshot) => {
        scene = snapshot.val();
        changeScene();
    });
}