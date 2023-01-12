import React from "react";

const Choices = () => {
  return (
    <div>
      <form action="meme-sol.php" method="post">
        <div>
          <h1>Meme:</h1>
          <nav>
            <select name="image">
                <option value="https://imgflip.com/s/meme/Bernie-I-Am-Once-Again-Asking-For-Your-Support.jpg">Bernie Sanders</option>
                <option value="https://imgflip.com/s/meme/Roll-Safe-Think-About-It.jpg">Roll Safe Think About It</option>
            </select>
          </nav>

          <h3 className="topline">Top Line:</h3>
          <p className="topline">
            <input type="text" name="topline" />
          </p>

          <h3 className="bottomline">Bottom Line:</h3>
          <p className="bottomline">
            <input type="text" name="bottomline" />
          </p>
        </div>
        <p>
          <button type="submit">Generate Meme</button>
        </p>
      </form>
    </div>
  );
};

export default Choices;
