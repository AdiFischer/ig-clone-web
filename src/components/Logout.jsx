
export default function Logout({ setUser }) {
    return (
        <div>
            <button className="logout" onClick={() => setUser(null)} type="primary" size="large">
                Logout
            </button>
        </div>
    );
}