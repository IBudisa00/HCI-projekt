import kamera from '../assets/kamera.png';
import mainLogo from '../assets/mainLogo.png';
import popcorn from '../assets/popcorn.png';
import movieReel from '../assets/movieReel.png';
import Image from 'next/image';
import styles from '../styles/header.module.css';

const Hello = () => {
    return (

    <header className={styles.header}>
        <div>
            <Image
                src={kamera}
                layout="fixed"
                width={75}
                height={75}
                alt="Vintage camera logo"
            />
            <Image
                src={mainLogo}
                layout="fixed"
                width={400}
                height={100}
                alt="MovieNight logo"
            />
        </div>
        <div className={styles.searchBar}>
            <form>
                <input type="text" placeholder="Movie/Series name...">

                </input>

            </form>
        </div>
        <main>
            <nav>
                <li>Home</li>
                <li>Movies</li>
                <li>TV Shows</li>
                <li>About Us</li>
                <li>Log In</li>
            </nav>   
        </main>
    </header>
    );
}

export default Hello;