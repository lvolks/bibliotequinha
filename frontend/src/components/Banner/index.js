import "./Banner.css"


export default function Banner(){

    const bannerImgPath = process.env.PUBLIC_URL + '/banner-img.jpg';
    const logoImgPath = process.env.PUBLIC_URL + '/the-petshop-logo-transparent.png';

    const menuItems = document.querySelectorAll('.menu a[href^="#');
    console.log(menuItems);

    

    return(
        <div>
            <img className="banner" src={bannerImgPath}></img>
            <div className="slogan">
                <h1 className="slogan-1">The PetShop</h1>
                <h3 className="slogan-2">Os melhores livros para o seu pet, quando e onde você estiver!</h3>
            </div>
            <div className="banner-container">
                <div className="item 1">
                    <a href="#acessorios">Acessórios</a>
                </div>
                <div className="item 2">
                    <a href="#brinquedos">Brinquedos</a>
                </div>
                <div className="item 3">
                    <a href="#racao">Ração</a>
                </div>
            </div>
            <img className="logo" src={logoImgPath}></img>
        </div>
    )
}