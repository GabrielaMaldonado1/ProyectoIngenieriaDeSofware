const dbUsuarios = [
    {
        id: "0310199600061",
        nombre: "LESLY ARGUETA",
        email: "aleslymabely@yahoo.com",
        telefono: "96112949",
        imagen: "",
        genero: "Femenino"
    }
];

export function findUser(id) {
    const t = dbUsuarios.filter(v => {
        return v.id === id
    });

    if (t.length > 0) {
         console.log(t[0])
         return t[0];
    } else {
        return undefined;
    };
};