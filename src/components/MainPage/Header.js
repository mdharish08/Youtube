import hamburger from "../../Assets/Images/hamburger.png"
const Header = () => {
    
    return (
    
        <div>
             <img className="" src={hamburger} alt="hamBurgerMenu"/>
             <img className="" src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500" alt="youtubeLogo"/>
             <input type="text" name="searchBar" className="border border-stone-400 rounded-l-full" />
             <img className="" src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg" alt="Person"/>
        </div>
    );
}

export default Header;