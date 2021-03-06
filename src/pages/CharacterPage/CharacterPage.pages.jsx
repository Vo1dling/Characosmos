import React from "react";
import { Link } from "react-router-dom";
import api from "../../components/api/api";
import "./CharacterPage.styles.css";
const CharacterPage = ({ char, setID, setEdit }) => {
  const editbutton = () => {
    setID(char.id);
    setEdit("true");
  };
  const deleteItem = async () => {
    await api.delete(char.id);
  };

  return (
    <div className="character-page">
      <div className="grid-container">
        <div className="paragraph-container para1">
          <h2 className="para-title">{char.paragraph1Title}</h2>
          <hr />
          <p className="para-content">{char.paragraph1Content}</p>
        </div>
        <div className="card-container">
          <img className="character-image" src={char.imageURL} alt="" />
          <p className="char name">Character Name : {char.name}</p>
          <p className="char origin">Character Origin : {char.origin}</p>
          <p className="char region">Character Region : {char.region}</p>
          <p className="char author">Author : {char.author}</p>
        </div>
        <div className="paragraph-container para2">
          <h2 className="para-title">{char.paragraph2Title}</h2>
          <hr />
          <p className="para-content">{char.paragraph2Content}</p>
        </div>
        <div className="paragraph-container para3">
          <h2 className="para-title">{char.paragraph3Title}</h2>
          <hr />
          <p className="para-content">{char.paragraph3Content}</p>
        </div>
        <Link onClick={editbutton} className="edit" to="/create">
          Edit
        </Link>
        <Link onClick={deleteItem} className="delete" to="/">
          Delete
        </Link>
      </div>
    </div>
  );
};
export default CharacterPage;
