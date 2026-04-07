import img01 from '../assets/images/img01.jpg';
import favicon from '../assets/images/favicon2.ico';

export default function Header() {
    return(
        <header>
            <h1>Header</h1>
            <img src="img01.jpg" alt="tree" width="100"/>
            <img src={img01} alt="tree" width="100"/>
            <img src={favicon} alt="tree" width="100"/>
        </header>
    )
}