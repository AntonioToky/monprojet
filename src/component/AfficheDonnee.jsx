function AfficheDonnee({ personnes, supprimer, modifier }) {
  return (
    <>
      <h1>Liste des utilisateurs</h1>

      <table className="table">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prenom</th>
            <th>Modifier</th>
            <th>Supprimer</th>
          </tr>
        </thead>

        <tbody>
          {personnes.map((personne) => (
            <tr key={personne.id}>
              <td>{personne.nom}</td>
              <td>{personne.prenom}</td>

              <td>
                <button onClick={() => modifier(personne)}>
                  Modifier
                </button>
              </td>

              <td>
                <button onClick={() => supprimer(personne.id)}>
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default AfficheDonnee;