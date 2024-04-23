import { Card, Image } from "antd";
import './styles.css';


const Profile = () => {
    return (
        <>
            <Card
                title={<h1>Profile</h1>}
                className="card"
            >
                <Image
                    width={200}
                    src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
                    style={{ borderRadius: 100, marginBottom: "20px" }}
                    preview={false}
                />
                <p>User Name: Test User</p>
                <p>Email: test@email.com </p>
            </Card>
        </>
    )
}

export default Profile