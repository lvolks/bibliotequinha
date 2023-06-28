import "./Banner.css";

export default function Banner() {
  const bannerImgPath = process.env.PUBLIC_URL + "/book-banner.jpg";
  const logoImgPath =
    process.env.PUBLIC_URL + "/the-petshop-logo-transparent.png";

  const menuItems = document.querySelectorAll('.menu a[href^="#');
  console.log(menuItems);

  return (
    <div className="banner">
      <img className="banner-img" src={bannerImgPath}></img>
      <div className="slogan">
        <h1 className="slogan-1">Biblioteca</h1>
        <h3 className="slogan-2">A biblioteca virtual de todos, para todos.</h3>
      </div>
    </div>
  );
}
