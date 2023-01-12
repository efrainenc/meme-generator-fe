import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const View = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [image, setImage] = useState(null);

  const fetchData = async () => {
    const resp = await fetch(`https://hack-meme-gen.herokuapp.com/meme/${id}`);
    const data = await resp.json();
    setData(data);console.log(data)
    const image = await fetch(`https://hack-meme-gen.herokuapp.com/image/${data.image}`);
    const imgdata = await image.json();
    setImage(imgdata);
  }

  useEffect(() => {
    fetchData();
  }, []);

  let topOne = 0, topTwo = 0, leftOne = 0, leftTwo = 0;

  if (data && image) {
    topOne = image.text_one_location ? image.text_one_location.top : 0;
    leftOne = image.text_one_location ? image.text_one_location.left : 0;

    if (image.text_two_location) {
      topTwo = image.text_one_location ? image.text_two_location.top : 0;
      leftTwo = image.text_two_location ? image.text_two_location.left : 0;
    }

    return data && image && (
      <div className="w-50 p-3">
        <div className="meme-photo" style={{backgroundImage: `url(${image.image})`}}>
          <div className="text-box" style={{top: `${topOne}px`, left: `${leftOne}px`, color: data.color_one}}>
            {data.text_one}
          </div>
          <div className="text-box" style={{top: `${topTwo}px`, left: `${leftTwo}px`, color: data.color_two}}>
            {data.text_two}
          </div>
        </div>
      </div>
    )
  }
}

export default View
