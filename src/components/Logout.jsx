import { Button } from "antd";

export default function Logout({ setUser }) {
    return (
        <div>
            <>
                <Button className="logout" onClick={() => setUser(null)} type="primary" size="large">
                    Logout
                </Button>
            </>
        </div>
    );
}