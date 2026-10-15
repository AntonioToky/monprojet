import { useState } from "react";
import Formulaire from "./component/Formulaire";
import AfficheDonnee from "./component/AfficheDonnee";

function App() {
  const [utilisateurs, setUtilisateurs] = useState([]);
  const [dataEdit, setDataEdit] = useState(null);

  // Ajouter
  const ajouterUtilisateur = (utilisateur) => {
    setUtilisateurs((prev) => [...prev, utilisateur]);
  };

  // Supprimer
  const supprimer = (id) => {
    setUtilisateurs((prev) =>
      prev.filter((utilisateur) => utilisateur.id !== id)
    );
  };

  // Rehefa tsindriana Modifier
  const modifier = (data) => {
    setDataEdit(data);
  };

  // Sauvegarder ny modification
  const sauvegarderModification = (dataModifie) => {
    setUtilisateurs((prev) =>
      prev.map((utilisateur) =>
        utilisateur.id === dataModifie.id
          ? dataModifie
          : utilisateur
      )
    );

    // Miverina amin'ny mode Ajouter
    setDataEdit(null);
  };

  return (
    <>
      <Formulaire
        ajouterUtilisateur={ajouterUtilisateur}
        data={dataEdit}
        sauvegarderModification={sauvegarderModification}
      />

      <AfficheDonnee
        personnes={utilisateurs}
        supprimer={supprimer}
        modifier={modifier}
      />
    </>
  );
}

export default App;