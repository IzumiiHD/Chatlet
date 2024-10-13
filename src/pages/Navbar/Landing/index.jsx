import Button from "@components/Button";
import styles from "@styles";

export default function Home() {
    return (
        <>
            <br/>
            <div className={styles.landing.chatletText}>
                Chatlet
            </div>
            <br/>
            <br/>
            <div className={styles.landing.welcomeContainer}>
                <div className={styles.landing.welcomeText}>
                    Welcome to Chatlet
                </div>
                <div className={styles.landing.welcomeSubtext}>
                    The best way to chat with people in any Blacket server using your {window.innerWidth >= 768 ? "tablet" : "phone"}.
                </div>

                <div className={styles.landing.buttonContainer}>
                    <Button>Register</Button>
                    <Button>Login</Button>
                </div>
            </div>
        </>
    )
}