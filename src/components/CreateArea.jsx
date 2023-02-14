import React, { useState } from "react";

function CreateArea(props) {

  const [article, setArticle] = useState({
    title: "",
    content: ""
  })

  function handleAdd(event) {
    props.onAdd(article)
    event.preventDefault();

  }

  function handleChange(event) {
    const { name, value } = event.target;
    setArticle((prev) => {
      return {
        ...prev,
        [name]: value
      }
    })
  }
  return (
    <div>
      <form>
        <input name="title" placeholder="Title" value={article.title} onChange={handleChange} />
        <textarea name="content" placeholder="Take a note..." rows="3" value={article.value} onChange={handleChange} />
        <button onClick={handleAdd}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
