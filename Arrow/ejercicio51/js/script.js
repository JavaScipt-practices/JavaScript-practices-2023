const funNom = (nombre) => {
    for (let i = 0; i < 30; i++) {
        $("#msg").append(`<br>${nombre} ${i}`);

    }
}
funNom("Santiago");

