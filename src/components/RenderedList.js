export default function RenderedList({ fakeList, handleChange }) {
  return fakeList.map((e) => (
    <div className="list-cont">
      <a href="#" rel="noreferrer">
        https://{handleChange}-{e}.com
      </a>
      <h3>
        {handleChange}-{e}
      </h3>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam vitae
        molestias asperiores, facere obcaecati nulla, mollitia consequatur optio
        beatae assumenda, repudiandae adipisci! Voluptatem pariatur rem tempore
        architecto! Dolorum, laudantium voluptas?
      </p>
    </div>
  ));
}
