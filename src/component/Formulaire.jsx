import { useEffect, useState } from "react";

function Formulaire({
  ajouterUtilisateur,
  data,
  sauvegarderModification,
}) {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");

  // Rehefa misy utilisateur tiana ovaina
  useEffect(() => {
    if (data) {
      setNom(data.nom);
      setPrenom(data.prenom);
    } else {
      setNom("");
      setPrenom("");
    }
  }, [data]);

  const ajouter = (e) => {
    e.preventDefault();

    if (nom.trim() === "" || prenom.trim() === "") {
      alert("Ampidiro ny soratra");
      return;
    }

    const personne = {
      id: Date.now(),
      nom: nom,
      prenom: prenom,
    };

    ajouterUtilisateur(personne);

    setNom("");
    setPrenom("");
  };

  const sauvegarde = (e) => {
    e.preventDefault();

    if (nom.trim() === "" || prenom.trim() === "") {
      alert("Ampidiro ny soratra");
      return;
    }

    const personneModifiee = {
      id: data.id,
      nom: nom,
      prenom: prenom,
    };

    sauvegarderModification(personneModifiee);
  };

  return (
    <form onSubmit={data ? sauvegarde : ajouter}>
      <input
        type="text"
        value={nom}
        onChange={(e) => setNom(e.target.value)}
        placeholder="Entrer votre nom"
      />

      <br />

      <input
        type="text"
        value={prenom}
        onChange={(e) => setPrenom(e.target.value)}
        placeholder="Entrer votre prenom"
      />

      <br />

      <button type="submit">
        {data ? "Sauvegarder" : "Ajouter"}
      </button>
    </form>
  );
}

export default Formulaire;